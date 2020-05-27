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

### 파드(Pod)
#### 파드 인프라 컨테이너
&nbsp;&nbsp;모든 파드에는 pause라는 컨테이너가 pid 1을 부여받아 기본 네트워크로 실행된다. 이 pause를 파드 인프라 컨테이너라고 한다.<br>파드 내 모든 컨테이너는 이 pause의 ip를 공유하여 사용한다. 따라서 pause가 재시작되면 ip가 변경된다.
<br><br>

#### 스태틱(statuc) 파드
&nbsp;&nbsp;kube-apiserver에서 작업을 하지 않고 kubelet이 직접 실행하는 파드<br>통상 kube-apiserver나 etcd를 실행시키는 용도이다.
<br><br>

#### 파드 자원 할당
&nbsp;&nbsp;노드 하나에 여러 파드를 실행할 때, 자원을 많이 소모하는 파드가 하나의 노드에 모여있다면 효율이 나빠지고, 메모리 부족상황이 발생 할 수 있다. 이를 대응하기 위하여 메모리 자원을 직접 할당할 수 있다.
자세한 내용은 [여기 참고](https://bcho.tistory.com/1291)
<br><br>

#### 파드 환경변수 설정
&nbsp;&nbsp;또한 파드에는 지속적으로 환경변수가 설정이 가능하다.## yaml을 아래와같이 덧붙인다.
```javascript
apiVersion :v1
...
spec :
    ...
    containers :
    ...
      env :
      - name  : env_name 
        value : "value" //값을 직접 설정
      - name  : HOSTNAME
        valueFrom : //값을 다른곳에서 참조
          fieldRef :
            fiedlfPath : spec.nodeName

```
<br><br>

#### Pod 패턴 구성
&nbsp;&nbsp;파드 내 컨테이너를 구성하는 패턴은 어느정도 정형화 되어있는데, 아래 3개가 구글에서 공개한 대표적 패턴이다.
 - 사이드카 패턴
     - 기본 컨테이너의 기능을 확장하거나 강화할 때, 새로운 컨테이너를 추가하는 방식
 - 앰배서더 패턴
     - 컨테이너 내부에 proxy 컨테이너를 추가하는 방식
 - 어뎁터 패넡
     - 외부로 표출하는 정보를 표준화하는 어댑터 컨테이너를 사용하는 방식
<br><br><br>

### 컨트롤러
파드를 관리하는 기능을 담당
#### 레플리카세트
&nbsp;&nbsp;상태가 존재하지 않는 파드들을 설정한 숫자만큼 실행되도록 관리하는 컨트롤러
```
apiVersion: app/v1
kind: Replicaset
metadata:
    name: nginx-replicaset
spec:
    template: //실행할 파드에 대한 정보
        metadata:
            name: nginx-replicaset
            labels:
                app: nginx-replicaset
        spec: //pod가 가진 container들에 대한 정보
            containers:
            - name: nginx-replicaset
              image: nginx
              ports:
              - containerPort: 80
    replicas: 3 //실행할 개수
    selector:
        matchLabels:
            app: nginx-replicaset
```
위를 실행시키면 3개의 nginx-replicaset-...이라는 파드 3개가 실행된다. 하나를 지워도 3개가 유지되도록 하나가 더 실행된다.
<br><br>

#### 디플로이먼트
&nbsp;&nbsp;통상 상태가 없는 앱을 배포할때 사용하는 기본적인 컨트롤러<br>롤링 업데이트나, 재배포, 롤백등이 가능하다.<br>기본 yaml구조는 레플리카셋트와 유사 [여기 참고](https://kubernetes.io/ko/docs/concepts/workloads/controllers/deployment/)
```
apiVersion: app/v1
kind: Deployment
metadata:
    name: nginx-deployment
spec:
    replicas: 3  //실행할 개수
    selector:
        matchLabels:
            app: nginx-deployment
    template: //배포할 파드에 대한 정보
        metadata:
            name: nginx-deployment
            labels:
                app: nginx-deployment
        spec: //pod가 가진 container들에 대한 정보
            containers:
            - name: nginx-deployment
              image: nginx
              ports:
              - containerPort: 80
    
    
```
<br><br>

#### 데몬세트
&nbsp;&nbsp;클러스터 전체노드에 특정 파드를 실행할 때 사용하는 컨트롤러<br>통상 로그 수집기등에 활용한다.
<br><br>

#### 스테이트풀세트
&nbsp;&nbsp;상태가 존재하는 파드를 관리하는 컨트롤러<br>보통 서비스를 관리한다.
<br><br>

#### 잡
&nbsp;&nbsp;실행 후 종료되어야 하는 작업을 실행시키는 컨트롤러
<br><br><br>

### 참고 사이트
https://bcho.tistory.com/1291
https://kubernetes.io/ko/docs/concepts/workloads/controllers/deployment/
