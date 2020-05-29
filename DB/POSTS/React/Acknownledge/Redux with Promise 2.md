# Redux with Promise 2

## redux-pender
### 주의사항
&nbsp;&nbsp;[이전 포스트](post/React/Acknownledge/Redux%20with%20Promise%201)를 읽고 오시길 추천합니다<br><br>&nbsp;&nbsp;이 내용은 react redux와 Promise에 대한 기본 지식이 있다고 가정하고 작성되었습니다. 해당 지식이 없다면 먼저 학습하신 후 읽기를 추천드립니다.
<br><br><br>

### redux-pender
&nbsp;&nbsp;redux-pender는 promise기반 Action들을 관리하기 위한 모듈이다.<br>아래와 같이 미들웨어를 등록하고 module에 penderReducer를 등록해 두어야한다.
```javascript
//최상위 Component
import { creatStore, applyMiddleware } from "redux"
import penderMiddleware from "redux-pender"
import reducer from "./reducer"

const store = createStore(reducer, applyMiddleware(penderMiddleware()));


//reducer/index.js
import { combineReducers } from "redux"
import ownActionModule     from "./ownActionModule"
import { penderReducer }   from "redux-pender"

export default combineReducers({
    ownActionModule,
    pender : penderReducer
})
```
<br><br><br>

### penderReducer
&nbsp;&nbsp;비동기 처리를 하는 reducer로 기존 async Action function에서 Success, pending, failure을 나누어 작성해주던 부분을 한번에 처리해준다.<br>아래와 같은 상태를 가지고 이름 그대로 액션들을 동작한다.
```javascript
{
    pending : {
        ActionFlag : //boolean 값
    },
    success : {
        ActionFlag : //boolean 값
    },
    failure : {
        ActionFlag : //boolean 값
    }
}
```
<br><br><br>

### module(reducer) .js
```javascript
...

import { pender } from "redux-pender"

const getDataAPI = () => {
	return new Promise((resolve, reject) => {
		resolve("TEST DATA")
	})
}

const GET_DATA = "GET_DATA"
export const getData = createAction(GET_DATA, getDataAPI); //함수 바로 등록

...

export default handleActions({	
	...pender({
		type		: GET_DATA,
		onSuccess	: (state, action) => {},
		onPending	: (state, action) => {},
		onFailure	: (state, action) => {}
	})
}, initialState);

```
<br>

위 코드를 보면 Action function에 그저 Promise를 반환하는 함수를 등록하기만 하면 해당 함수가 반환값으로 등록된다.<br>아래 ...pender 내부에서 세가지 상태에 따라 동작할 부분을 작성하면 된다.<br><br>공식 문서를 보면 action의 payload값은 Promise.resolve()의 값이 등록되어 있다.<br><br>더 자세한 내용은 [여기](https://github.com/velopert/redux-pender)참고

<br><br><br><br>