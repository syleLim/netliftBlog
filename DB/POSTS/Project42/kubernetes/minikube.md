### Kubernetes Project
# Kubernetes

## 주의사항
&nbsp;&nbsp;해당 프로젝트는 docker와 image에 대한 지식이 어느정도 이상 되어있다고 가정하고 작성되었습니다.

## 목표
#### kubernetes Cluster로 프로젝트 배포

### minikube
로컬환경에서 최상 쿠버네티스 환경을 제공하는 프로젝트<br>통상 서버 및 클러스터 구조에서 운용되는 쿠버네티스를 간편하게 구현하는 도구이다.
<br><br><br>

### minikube 설치
https://kubernetes.io/ko/docs/tasks/tools/install-minikube
minikube는 vm를 기반으로 동작하기 때문에, 관련 hyperviser를 설치하고 작동시켜야 한다.<br>해당 구성에서는 vmbox를 설치해서 진행하였다.
```bash
//key 설치
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add -

//apt에 패키지 추가
sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian $(lsb_release -sc) contrib" >> /etc/apt/sources.list'

//설치
sudo apt-get update
sudo apt-get install virtualbox-6.1 //(버전은 마음대로)

//확인
VBoxManage -v
```
<br>

kubenetes는 어떤 플랫폼이던간에 기본적으로 kubectl을 통해 조작을 할 수 있다.<br>해당 모듈은 apt를 통해 설치할 수 도 있지만 대부분 구 버전이기 때문에 curl을 통해 최신버전으로 설치한다.
```
//설치
curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl

//권한 부여 및 명렁어로 설정(복사)
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

//확인
kubectl version --client

```
<br>

마지막으로 minikube를 설치한다.
```
//설치
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

//권한 부여 및 명령어로 설정(복사)
chmod +x minikube
sudo mv minikube /usr/local/bin/

//확인
minikube version
```

minikube를 구동하면 자동으로 cluster를 실행하고 status를 통해 확인한다.
```
// 구동
minikube start

// 확인
minikube status
```
<br><br><br>

### get start
https://zerobig-k8s.tistory.com/6?category=297761
<br>

#### node 서버 실행시켜 보기
간단한 http server를 만들어서 cluster위에서 실행시켜 보자<br><br>server.js
```javascript
//server.js
import http from "http"

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello world");
})

server.listen(8080);
```
<br>

Dockerfile
```
FROM node:6.9.2
EXPOSE 8080
COPY server.js
CMD node server.js
```
<br>

minikube내 docker deamon에서 docker를 이미지를 빌드할 수 있도록 환경값을 조정하고 build한다.
```bash
//minikube docker deamon 설정
eval $(minikube docker-env)

//build
docker build -t node-server .
```
<br>

간단한 명령을 통해 deployment를 실행해보자
```bash
//deployment실행
kubectl run node-server --node-server --port 8080 --image-pull-policty=Never

//확인
kubectl get deployment
kubectl get pods
```
<br>

외부 접속을 위해서 service도 설정해보자
```
kubectl expose deloyment node-server --type=LoadBalancer

//확인
kubectl get services
```
<br>

서비스에 나온 연결 포트로 접속을 하면 node-server가 작동된 것을 확인할 수 있다.<br>마지막으로 관련 리소스를 전부 삭제하고 cluster를 종료시켜보자.
```
kubectl delete service node-server
kubectl delete deployment node-server
docker rmi node-server -f
minikube stop
eval $(minikube docker-env -u)
```
