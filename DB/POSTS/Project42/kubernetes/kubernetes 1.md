### Kubernetes Project
# Kubernetes

## 주의사항
&nbsp;&nbsp;해당 프로젝트는 docker와 image에 대한 지식이 어느정도 이상 되어있다고 가정하고 작성되었습니다.

## 목표
#### kubernetes Cluster로 프로젝트 배포

## 필요한 지식
1. Docker
2. Docker file
3. Kubernetes

### What is Kubernetes
&nbsp;&nbsp;오케스트레이션 시스템의 표준, 기본적으로 수동 제어되던 부분을 자동화 한다.

### 특징
1. 선언적 API
    - 컨테이너가 어떤 상태이길 원하는지만 설정하면 지속적으로 확인을 하고 설정을 변화시킨다.
2. 워크로드 분리
    - 시스템을 레이어로써 분리하면서 안정성을 확보한다.
3. 어디서나 실행 가능
    - 서버, 개인, 퍼블릭 클라우드 어디서든 실행이 가능하다.

### Structure
#### 도식
```bash
                   ├──[Node Cluster] 
[Master Cluster]───|
                   ├──[Node Cluster]
[Master Cluster]───|
                   ├──[Node Cluster]
[Master Cluster]───|
                   └──[Node Cluster]
```
#### Master Cluster
&nbsp;&nbsp;kubernetes를 관리하는 cluster, 아래 컴포넌트들로  구성되어 있다.
1. kube-apiserver : 클러스터의 api를 사용할 수 있도록 하는 컴포넌트
2. kube-scheduler : node를 찾아서 pod를 실행 시키는 역할
3. ectd : 데이터를 저장해둔 값 (key : value)
4. kube-controller-manager : 파드를 관리하는 controller를 실행하는 컴포넌트
5. cloud-controller-manager : controller를 component와 연결해서 작동시키는 컴포넌트 
6. kubelet : 명령 실행


#### Node Cluster
1. kubelet : 파드의 실행을 직접 관리하는 컴포넌트
2. kube-proxy : 가상 네트워크의 동작을 관리하느 컴포넌트, 실제 proxy서버를 설정하는 것인지 아닌지는 아직 모르겠다.

### 애드온
&nbsp;&nbsp;클러스터에서 필요한 기능을 실행하는 파드
1. 네트워킹 애드온 : 가상 네트워크를 구성할 때 kube-proxy와 함께 사용
2. dns 애드온 : dns서버 관리
3. 대시보드 애드온 : 웹 UI
4. 컨테이너 자원 모니터링 : 클러스터안에서 실행중인 컨테이너의 상태를 모니터링, Master cluster에서 실행된다.
5. 클러스터 로깅 : 로그 수집

### Object & controller
&nbsp;&nbsp;자원의 상태를 설정하고 controller는 이를 바탕으로 object를 생성한다. 이를 name-space를 나누어든다.
#### name-space
&nbsp;&nbsp;클러스터를 논리단위로 나누어서 사용하는 방식이다.

#### 템플릿
&nbsp;&nbsp;object나 controller가 어떤 상태여야 하는지 적용하는 방식. YAML이라는 형식을 쓴다.


### 파드(Pod)
&nbsp;&nbsp;여러 컨테이너를 하나로 묶어서 활용하는 사용한다.<br>기본 YAML
```bash
apiVersion: v1
kind: Pod
metadata:
    name: pod-name
    labels:
        app: app-name
spec:
    containers:
    - name: container-name
      image: docker-image(or image file)
      ports:
      - containerPort: 8080 (in port)
```
하나의 Pod는 하나의 IP로 이용되며 내부 컨테이너들은 각각의 Port에서 실행된다.

#### life-cycle
- Pending : 생성중
- Running : 실행중
- Succeeded : 정상종료
- Failed : 비정상 종료, 재시작됨
- Unknown : 확인 불가, 보통 노드와 통신할 수 없을 때

#### 초기화 컨테이너
&nbsp;app이 실행되기 전 파드를 초기화 하는 컨테이너<br>분리로 관리되는 container(db 등)를 초기화할 때 사용된다.
```bash
apiVersion: v1
kind: Pod
metadata:
    name: pod-name
    labels:
        app: app-name
spec:
    initContainers:
    - name : init-mydb
      image : docker-image(or image file)
      command: ["sh", ...] (docker file의 문법과 동일)
    containers:
    - name: container-name
      image: docker-image(or image file)
      ports:
      - containerPort: 8080 (in port)
```


#### status
 - initialized : 초기화 컨테이너가 모두 실행된 상태
 - Ready : 모든 요청을 실행가능함 / 로드밸런싱에 추가되어야 한다는 의미
 - ContainersReady : 컨테이너가 준비상태
 - PodScheduled : 파드가 하나의 노드로 스케줄을 완료함
 - Unschedulable : 제약으로 인해 당장 파드를 스케줄할 수 없음


#### 컨테이너 진단
&nbsp;주기적으로 진단을 시행하며 2개의 probe를 가지고 있다.
- **livenessProbe** : 실행되었는지 확인, 기본은 sucess
- **readinessProbe** : 컨테이너가 실행된 후 해당 요청이 가능한지 진단, 기본은 failure

