### React Blog Project
# Home Component
[https://github.com/syleLim/react-blog](https://github.com/syleLim/react-blog)<br><br>

## 주의사항
 해당 프로젝트는 nodejs가 일정 버전이상 설치되어 있다고 가정되어 진행됩니다.
 만약 해당 프로젝트가 정상작동이 되지 않는다면 12.0이상의 nodejs를 설치 후 진행바랍니다.

## 목표
#### Style을 적용시켜 Home Component를 만들어 본다.
<br><br><br>

## 사전 지식
### [styled-component](/post/React/Acknownledge/Styled%20component)
&nbsp;&nbsp;**React**에서 인라인(inline)스타일을 담당하는 모듈, [공식문서](https://styled-components.com/docs)에 자세히 설명이 되어있다.
<br><br>

### [CSS styling]()
&nbsp;&nbsp;css를 style하는 기본문법을 알고 있는 상태에서 프로젝트가 진행되어야 한다. 대표적으로 `calc`와 같은 문법이나 `rem`단위 등을 알고 있어야 한다.
<br><br>

### [media Query]()
&nbsp;&nbsp;CSS3부터 가능한 화면 크기에 따른 style을 달리하는 반응형 사이트를 만드는 패러다임이자 문법
<br><br><br>

### Step 1: 모듈 설치
```
//styled component 모듈
npm install --save-dev styled-component
```

### Step 2: 기본 파일 생성
#### 기본 구조
  ```
  react-blog
      ├── node_modules
      ├── src
      |   ├── index.html
      |   ├── index.js
      |   ├── Root.js
      |   ├── component
      |   |   ├── index.js
      |   |   ├── App
      |   |   |   ├── AppComponent.js    
      |   |   └── Home
      |   |   |   └── HomeComponent.js
      |   ├── container
      |   |   ├── index.js
      |   |   ├── AppContainer.js
      |   |   └── HomeContainer.js
      |   ├── page
      |   |   ├── index.js
      |   |   └── Home.js
      |   ├── module
      |   |   └── HomeAction.js
      |   └── style
      |       ├── index.js
      |       └── Home
      |           └── HomeStyle.js
      ├── .babelrc
      ├── .gitignore
      ├── package.json
      └── webpack.config.js
  ``` 
<br><br>

#### style/HomeStyle.js
```javascript
import styles from "styled-components"
/*
* 차후 우측에 카테고리를 추가하기 위하여 전체(100%)에서 15rem만큼(카테고리의 폭) 뺀 길이를 폭으로 취함
* width가 768px이하가 되면 카테고리를 보여주지 않으려 하므로 해당 경우엔 전체(100%)를 폭으로 잡는다. 
*/
const HomeStyle = styles.div`
	width				: calc(100% - 15rem); 
	min-height			: 50rem;
	float				: left;
	background-color	: #55555;
	@media only screen and (max-width: 768px) {
		width			: 100%;
	}
`;

export default HomeStyle;
```
<br><br>

#### styles/index.js
```javascript
export { default as HomeStyle } from "./Home/HomeStyle"
```
<br><br>

#### page/Home.js
```javascript
import React from "react"
import { HomeContainer } from "../container"

const Home = () => (
    <HomeContainer />
)

export default Home;
```
<br><br>

#### page/index.js
```javascript
export { default as HomePage } from "./Home"
```
<br><br>

#### Container/HomeContainer.js
```javascript
import React			 from "react"
import { connect }		 from "react-redux"

import { HomeComponent } from "../component/"

class HomeContainer extends React.Component {
    render () {
		return (
			<HomeComponent />
		)
	}
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

export default HomeContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainer);
```
<br><br>

#### container/index.js
```javascript
export { default as AppContainer } from "./AppContainer"
export { default as HomeContainer } from "./HomeContainer"
```
<br><br>

#### Component/Home/HomeComponent.js
```javascript
import React from "react"
import { HomeStyle } from "../../style"

const HomeComponent = () => (
	<HomeStyle>
		Home
	</HomeStyle>
)

export default HomeComponent;
```
※ 반드시 변경된 경로에따라 AppComponent등 다른 Component들의 경로 및 import를 변경해 주어야 한다.
<br><br><br>

## 결과물
![result](https://user-images.githubusercontent.com/26323486/83103347-7ba20680-a0f1-11ea-91b5-7a9b9b8c7ff2.png "500")