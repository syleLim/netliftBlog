# Redux with Promise 1

## redux-thunk
### 주의사항
&nbsp;&nbsp;이 내용은 react redux와 Promise에 대한 기본 지식이 있다고 가정하고 작성되었습니다. 해당 지식이 없다면 먼저 학습하신 후 읽기를 추천드립니다.
<br><br><br>

### Promise
&nbsp;&nbsp;javascript에서 비동기 작업을 담당해주는 대표적인 객체<br>비동기 작업에서의 결과값을 반환할 수 있게끔한다. 다만 최종 결과를 직접 반환하는 것이 아닌 프로미스(예약)를 반환하여 미래의 시점에서 결과를 제공한다.<br><br>기본적으로 pending(대기), fullfilled(성공), rejected(실패)세가지 상태를 가진다.<br><br>자세한 내용은 [여기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) 참고
<br><br><br>

### Redux MiddleWare
&nbsp;&nbsp;기본적으로 redux는 동기 데이터흐름만을 지원한다. 따라서 **Promise**를 사용하기 위해서는 비동기 작업을 지원해주기 위한 처리가 필요한데, 이를 가능하게 해주는 것이 **MiddleWare**이다.
```javascript
import { createStore, applyMiddleware} from "redux"
import reducer from "./" //custom reducer

const store = createStore(reducer, applyMiddleWare(...)) //...에 적용할 MiddleWare를 넣는다.
```
<br><br><br>

### redux-thunk
&nbsp;&nbsp;함수를 생성하는 Action function을 만들 수 있도록 하는 미들웨어<br><br>기본적으로 Action function는 액션을 생성하는 역할만을 하지만 redux-thunk는 함수를 반환하게끔 만들 수 있다.
```javascript
//최상위 Component
import ReduxThunk from "redux-thunk"
import reducer from "./" //custom reducer
const store = createStore(reducer, applyMiddleWare(ReduxThunk)))

...
//module
const ACTION = "ACTION"
export const actionCreator = createAction(ACTION);

const Actionfunction = () => dispatch => {
    setTimeout(() => { dispatch(actionCreator()) }, 1000)
}
```
<br>

위와 같이 작성하면 1초후 actionCreator가 실행된다.<br>반드시 javascrit의 event loop를 정확히 이해한 후 학습하기를 추천한다.
<br><br><br>

### Promise with redux-thunk
&nbsp;&nbsp;통상 웹 요청을 해결할 때 사용하지만 먼저 우선 어떻게 동작이 되는지 알아보자.
```javascript
const getDataAPI = () => {
	return new Promise((resolve, reject) => {
		resolve("Test DATA")
	})
}

const GET_DATA_PENDING = "GET_DATA_PENDING";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getData = () => dispatch => {
    dispatch({type : GET_DATA_PENDINF});
    
    return getDataAPI().then(res => {
        dispatch({
            type : GET_DATA_SUCCESS,
            payload : res
        })
    }).catch(err => {
        dispatch({
            type : GET_DATA_FAILURE,
            payload : err
        })
    })
}

export default handleAction({
    [GET_POST_PENDING] : (state, action) => {},
    [GET_POST_SUCCESS] : (state, action) => {},
    [GET_POST_FAILURE] : (state, action) => {}
})
```
<br>

위와 같이 작성하면 getDataAPI는 redux-thunk에 의해 Action function의 반환값으로 설정되고 이 함수는 비동기적으로 dispatch에 적용된다.<br>각 세가지 상태에 따라 변경할 state의 동작을 아래 정의하면 된다. ([Redux Post](/post/React/Acknownledge/Redux%202)와 동일)
