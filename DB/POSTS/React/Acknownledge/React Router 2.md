# React를 구성하는 기본 요소

## Router 2
### 주의사항
&nbsp;&nbsp;[이전 포스트]()를 먼저 읽고 오시길 추천합니다.


&nbsp;&nbsp;이 내용은 react의 기초인 `state`, `props`, 리엑트간 데이터 통신, `Component`등의 기본 지식이 있다고 가정하고 작성되었습니다. 해당 지식이 없다면 먼저 학습하신 후 읽기를 추천드립니다.<br><br>&nbsp;&nbsp;또한 개념을 제외한 기본 코드는 `react-router-dom package`를 활용하여 작성되었습니다. 좀더 `low level`의 코드를 원한다면 다른 글을 참고하시는 것을 추천드립니다.
<br><br><br>

### Router props
`Route Component`는 호출하는 Component에 `history`, `match`, `location`이라는 3개의 `props`을 기본적으로 넘긴다.
#### match : 매칭된 `url`에 대한 정보가 담긴 객체
 - `path` : 라우터 path
 - `url` : 클라이언트로부터 요청된 path
 - `isExact` : Route의 exact속성과 동일, 완전히 일치하는 경우에만 호출
 - `params` : `url`에 설정된 `parameter`
 - 아래와 같이 작성하고 "`/name/usr`"로 접근하면 `usr`을 출력한다.
 ```javascript
 <Route path="/name/:id" component={Home}/>
    
 const Home = ({match}) => {
    console.log(match.params.id) 
 }
 ```
<br><br>

#### location : 현재 페이지의 정보
 - `pathname` : 현재 페이지의 `url`
 - `search` : 현재 페이지의 쿼리값
 - `hash` : 현재 페이지의 해시값
 - 아래와 같이 작성하고 "`name/?id=usr`"로 접근하면 `?id=usr`을 출력한다. 해당 쿼리는 다른 모듈을 사용해서 파싱(parsing)해야 한다.
```javascript
<Route path="/name/" component={Home}/>
    
 const Home = ({location}) => {
    console.log(location.search) 
 }
```
<br><br>

#### history
&nbsp;&nbsp;현재까지 이동한 모든 경로에 대한 url이 stack에 담겨있다. 몇가지 기능이 존재하는데, 대표적인것만 살펴보자
 - push(path) : 새로운 경로를 stack에 푸시하고 이동
 - replace(path) : 최근 경로를 stack에서 교체하고 이동
 - goBack() : 이전 페이지로 이동
 - goForward() : 앞 페이지로 이동
자세한 내용은 [여기 참고](https://reacttraining.com/react-router/web/api/history)
