### Kubernetes Project
# Kubernetes

## 주의사항
&nbsp;&nbsp;해당 프로젝트는 docker와 image에 대한 지식이 어느정도 이상 되어있다고 가정하고 작성되었습니다.

## 목표
#### kubernetes Cluster로 프로젝트 배포

### 서비스
&nbsp;&nbsp;컨트롤러를 통해 파드를 실행하였을 때, 해당 파드로 접근하기 위한 방법이 필요하다. 이를 가능하게 해주는 것이 서비스이다.
<br><br>

#### Type
1. clusterIP : 클러스터 내부에서만 사용하는 기본 서비스 타입
2. NodePort : 외부에서 접근할 때의 port를 설정하는 방식
3. LoadBalancer : loadbalancer장비가 있을 때 실행하는 방식
4. ExternalName : 안에서 외부에 접근할 때, spec.externalName필드를 통해 접근한다. seletor가 필요없음
<br><br>

#### ClusterIP
```
apiVersion: v1
kind: Service
metadata:
    name: clusterip-service
spec:
    type: ClusterIP //cluster ip
    selector:
        app : nginx-for-svc //설정할 pod들의 label값
    ports:
    - protocol: TCP
      port: 80
      targetPort: 80
```
<br>

해당과 같이 동작하면 nginx-for-svc를 label로 가진 pod에 ip를 endpoint로 가진다.
<br><br>

#### NodePort
```
apiVersion: v1
kind: Service
metadata:
    name: nodePort-service
spec:
    type: NodePort 
    selector:
        app : nginx-for-svc //설정할 pod들의 label값
    ports:
    - protocol: TCP
      port: 80
      targetPort: 80
      nodePort : 30080
```
<br>

해당과 같이 동작하면 80번 포트를 30080에 매칭시킨다.(docker export와 동일)<br>
localhost의 30080포트로 접속하면 cluster내부의 pod로 연결된다.<br>
NodePort의 특이한 점은 pod2개를 설정하고 하나가 꺼져있을 때, 꺼진 파드로 접속했을 때, 켜진 pod로 접속된다는 것이다.
<br><br>

#### LoadBalancer
```
apiVersion: v1
kind: Service
metadata:
    name: loadbalancer-service
spec:
    type: LoadBalancer 
    selector:
        app : nginx-for-svc //설정할 pod들의 label값
    ports:
    - protocol: TCP
      port: 80
      targetPort: 80
```
<br>

실제 [로드밸런서](https://nesoy.github.io/articles/2018-06/Load-Balancer)에서 동작한다. 
<br><br>

#### ExternalName
```
apiVersion: v1
kind: Service
metadata:
    name: externalName-service
spec:
    type: ExternalName
    externalName : google.com
```
<br>

외부 도메인(혹은 ip)로 접근하므로 selector가 필요하지 않다.
<br><br>

#### 해드리스 서비스
&nbsp;&nbsp;Cluster IP에서 ClusterIP를 None으로 설정하면 IP가 없는 서비스를 만들 수 있다.<br>그렇지만 해당 파드로 접속할 수 있는 endpoint나 dns는 동일하게 만들어지고 kube api로 확인할 수 있다.
<br><br>

#### kube-proxy
&nbsp;&nbsp;실질적으로 Cluster IP나 Node Port로 접근할 수 있게 만드는 컴포넌트(네트워크 관리도구)
1. userspace
    - 클라이언트가 cluster ip로 요청을 할 때 iptable에서 kube-proxy로 요청을 전달하고 pod로 연결된다.
2. iptalbes
    - kube-proxy가 iptable을 관리하는 모드
3. ipvs
    - 로드밸런싱기술을 통해 성능이 좋으나, 다양한 로드밸런싱 알고리즘을 적용해야한다.
<br><br><br><br>

### 인그레스
&nbsp;&nbsp;클러스터 외부에서 내부로 접속할 때, 요청의 처리 방법을 정의한 규칙<br>인그레스는 그러한 부분을 정의해둔 문서이고, 조작은 인그레스 컨트롤러에서 진행된다.

#### 설정파일
```
apiVersion: extension/v1beta1
kind: ingress
metadata:
    name: test
    annotations:
        nginx.ingress.kubernetes.io/rewrite-target: /
spec:
    rules:
    - host: foo.bar.com
      http:
          paths:
          - path: /foo1
            backend:
                serviceName: s1
                servicePort: 80
```
<br>

`annotaions` : 해당 필드에 인그레스를 설정하는데, 앞선값이 key(nginx.ingress...)이고 뒤 값이 value(/)이다.
`spec` : 접속 경로 및 연결할 서비스에 대한 정보를 입력한다.

#### 인그레스 컨트롤러
&nbsp;&nbsp;nginx용 ingress-nginx를 살펴본다.<br><br>해당 컨트롤러를 clone해서 namespace로 설정하여 controller를 생성하면 NodePort로 설정된 nginx서비스와 함께 controller가 실행된다.<br>service에 deployment된 파드(nginx)를 연결하면 host로 동작하게 할 수 있다.
<br><br>

#### 예제 : ssl 설정
아래 명령어를 통해 만들어진 ssl 인증서와 연결한다.
```
kubectl create secret tls "tls name" --key "key name" --cert "cert name"
```
<br>

인그레스 파일에 spec.tls를 설정함으로써 ssl을 등록한다.
```
apiVersion: extension/v1beta1
kind: ingress
metadata:
    name: ingress-ssl
spec:
    tls:
    - hosts:
      - kube-book.com
      secretName: kube-book-secret
    rules:
    - hosts: kube-book.com
      http:
         paths:
         - path: /
           backend:
               serviceName: s1
               servicePort: 80
```
<br>

해당 파일을 적용시키면 443포트(ssl 인증서 포트)가 포트포워딩된것을 확인 할 수 있다.
<br><br><br><br>

### 참고 사이트
https://nesoy.github.io/articles/2018-06/Load-Balancer

<br><br><br>