# React를 구성하는 기본 요소

## Router 1
### 주의사항
&nbsp;&nbsp;이 내용은 react의 기초인 `state`, `props`, 리엑트간 데이터 통신, `Component`등의 기본 지식이 있다고 가정하고 작성되었습니다. 해당 지식이 없다면 먼저 학습하신 후 읽기를 추천드립니다.<br><br>&nbsp;&nbsp;또한 개념을 제외한 기본 코드는 `react-router-dom package`를 활용하여 작성되었습니다. 좀더 `low level`의 코드를 원한다면 다른 글을 참고하시는 것을 추천드립니다.
<br><br><br>

### Route
**Route** : 인터넷 상에서 네트워크까지 가는 경로를 의미<br>**Routing** : 최적의 경로를 선택하는 과정<br>**Router** : Routing된 최적 경로로 데이터(`packet`)를 전하는 장치

### react-router
&nbsp;&nbsp;React는 view만 담당하기 때문에 routing을 담당하는 모듈이 요구되고 `react-router-dom`가 해당 기능을 담당한다.
<br><br><br>

### 기본 구조
**요구 파일**
&nbsp;&nbsp;**App.js**는 route될 `Component`들을 감싸고 있고 **Root.js**는 App의 Routing이 동작할 수 있도록 감싸는 `Component`이다. (아래 코드에선 `BrowserRouter`로 감쌌으며 `HashRouter`등 다른 옵션들이 있다.)

**App.js**
```javascript
import React from      "react"
import { Route } from  "react-router-dom"
import Home from       "./home"    // Home과 Content는 임의의 Component이고
import Content from    "./content" // 어떤 컴포넌트이던 상관없다.

class App = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/content" component={Content} />
    </div>
);


export default App;
```

**Root.js**
```javascript
import React             from "react"
import { BrowserRouter } from "react-router-dom"
import App               from "./App"

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

export default Root;
```

위와같이 App이 실행한다면 실행되었을 때 `Home Component`로 연결이 되었을 것이고 경로(url)에 "`/cotent`"를 붙여주면 `Content Component`로 연결될 것이다.
<br><br><br>

### react-router의 다양한 모듈들
#### Route
&nbsp;&nbsp;지정된 `url`이 입력되었을 때, 지정된 `Component`를 보여주는 역할을 한다.
```javascript
<Route path="/path" component={App} />
```
위와 같이 작성되면 "`/path`"로 접속할때 `App Component`를 보여준다.<br>설정할 수 있는 옵션이 몇가지 존재한다. 간단히 몇개만 살펴본다
 - **path** : 사용될 경로의 설정
     - path에는 접속할 경로 url을 설정한다.
     - "/:name"을 통해 `parameter`를 받을 수 있다. 해당 parameter는 `match`라는 `props`에 저장되어 `Component`로 넘어간다(후술)
     - 문자열로 혹은 문자열 배열로 여러개의 경로를 동시에 설정할 수 도 있다.
     ```javascript
        path={["/id", "/name"]}
     ```
 - **exact** : 경로의 정확성을 위한 설정
     - path가 겹치는 경우`(ex> /one와 /one/two는 /one이 겹치므로 2개의 component를 다 보여준다)`를 방지한다.
     - exact를 준 Route의 경우에는 정확히 일치하는 url일때만 Component를 호출한다.
     - bool값 혹은 그냥 선언만 해주면 된다.
     ```html
         <Route exact path=... />
     ```
 - **component** : 호출할 Component의 설정
 - **etc** : render, strict ...[여기 참고](https://reacttraining.com/react-router/web/api/Route)
<br><br>

#### BrowserRouter, HashRouter
&nbsp;&nbsp;React Application에서 최상위 `Component`를 감싸서 Router가 동작하도록 하는 Module
 - **BrowserRouter** : `Link Component`를 통해 이동을 관리하고 새로고침을 하면 경로를 찾지 못한다.
 - **HashRouter** : local에서 해쉬(#)을 통해 경로를 읽으므로 새로고침에서 에러가 나진 않지만 검색엔진으로 읽지 못하여 거의 사용하지 않는다.
<br><br>

#### Link, NavLink
&nbsp;&nbsp;해당 `Component`내부에서 Routing을 위한 path를 지정할 때 사용하는 `Component`<br>아래 `Component`에서 `title`을 누르면 "/post/id" url로 이동하게 된다.
```javascript
<Link to={`/post/id`}>
    title
</Link>
```
<br><br>

#### 더 자세한 내용은 [여기 참고](https://reacttraining.com/react-router/web/api/)
