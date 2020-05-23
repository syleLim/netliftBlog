### React Blog Project
# Redux, Router Setting
[https://github.com/syleLim/react-blog](https://github.com/syleLim/react-blog)<br><br>

## 주의사항
 해당 프로젝트는 nodejs가 일정 버전이상 설치되어 있다고 가정되어 진행됩니다.
 만약 해당 프로젝트가 정상작동이 되지 않는다면 12.0이상의 nodejs를 설치 후 진행바랍니다.

## 목표
#### Redux와 Router를 설정한다.<br><br>

### Step 1: 모듈 설치
  - [**Redux**]()
  - [**React Router**]()
```
//Redux 모듈
npm install --save-dev redux react-redux
npm install --save-dev redux-actions

//Router 모듈
npm install --save-dev react-router-dom
```

### Step 2: 기본 파일 생성
#### 기본 구조
  ```=
  react-blog
      ├── node_modules
      ├── src
      |   ├── index.html
      |   ├── index.js
      |   ├── Root.js
      |   ├── component
      |   |   └── AppComponent.js
      |   ├── container
      |   |   └── AppContainer.js
      |   ├── page
      |   |   └── Home.js
      |   └── module
      |   |   └── HomeAction.js
      ├── .babelrc
      ├── .gitignore
      ├── package.json
      └── webpack.config.js
  ``` 

#### Root.js
```javascript=
import React                    from "react"
import { BrowserRouter }        from "react-router-dom"
import { createStore }          from "redux"
import { Provider }             from "react-redux"

import AppContainer             from "./container/AppContainer"
import modules 	         from "./modules/HomeAction"



const store = createStore(modules);

const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppContainer />
			</BrowserRouter>
		</Provider>
	);
}

export default Root;
```

#### container/AppContainer.js
```javascript=
import React			from "react"
import { connect }		from "react-redux"

import AppComponent     	from "../component/AppComponent"

class AppContainer extends React.Component {
    render () {
		return (
			<AppComponent />
		)
	}
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

export default AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);
```

#### component/AppComponent.js
```javascript=
import React     from "react"
import { Route } from "react-router-dom"
import Home      from "../page/Home"

class App extends React.Component {
    render () {
        return (
            <div>
                Main
                <Route exact path="/" component={Home} />
            </div>
        )
    };
}

export default App;
```

#### index.js
```javascript=
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root' //최초의 component 파일 경로

ReactDOM.render(<Root/>, document.getElementById('root'))
```

#### page/Home.js
```javascript=
import React from "react"

const Home = () => (
    <div>
        Home
    </div>
)

export default Home;
```

### module/HomeAction.js
```javascript=
import { handleActions, createAction }	from "redux-actions"

const actionType = ""

export const action = createAction(actionType);

const initialState = {}

export default handleActions({	

}, initialState);

```

## 결과물
![an image](/DB/src/React/Blog%20Project/Redux%20Router.md/result.png)