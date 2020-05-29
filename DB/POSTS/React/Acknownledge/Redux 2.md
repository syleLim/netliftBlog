# React를 구성하는 기본 요소

## Redux 2
### 주의사항
&nbsp;&nbsp;이전 포스트를 읽어 주시기 바랍니다. ([**이전 포스트**]())

&nbsp;&nbsp;이 내용은 react의 기초인 `state`, `props`, 리엑트간 데이터 통신, `Component`등의 기본 지식이 있다고 가정하고 작성되었습니다. 해당 지식이 없다면 먼저 학습하신 후 읽기를 추천드립니다.<br><br>&nbsp;&nbsp;또한 개념을 제외한 기본 코드는 `redux package`를 활용하여 작성되었습니다. 좀더 `low level`의 코드를 원한다면 다른 글을 참고하시는 것을 추천드립니다.
### Module 
&nbsp;&nbsp;`redux`를 구성함에 있어서 파일을 분리할 수도 있지만 이 내용에선 하나의 `module`로 묶어서 작동하기로 한다.<br>기본 구조는 아래와 같다.
```javascript
import { handleActions, createAction }	from "redux-actions"

/*
* Action을 설정한다. 아래 flag를 호출하는 함수를 만들어서 componet에서 호출하면
* 해당 Action에 설정된 Reducer가 동작한다.
*/
const TEST = "TEST"; //TEST라는 Action flag를 만들었다.
export const getAction = createAction(TEST); //TEST라는 Action을 호출하는 함수를 만들었다. 이는 Component에서 호출되어 TEST라는 Action을 Reducer에 전달한다.

//state를 설정한다. 원래 React에서 최초의 this.state를 설정하는것과 동일하다.
const initialState = {
	data			: "data"
};

/*
* Reducer인 부분이다.
* 설정된 Action(해당 코드에선 TEST)이 발생하면 실행될 함수를 지정한다.
* 이 때 변수는 action의 payload에 저장된다.
* 반환값은 변경된 state여야한다.
*/
export default handleActions({
	[TEST] : (state, action) => {
        console.log(action.payload) //호출할 때 넣어준 값
		return state;
	}
}, initialState);
```
 - **createAction** &nbsp;&nbsp;&nbsp;: `Action`을 호출하는 함수를 쉽게 만들어 주는 모듈
 - **handleActions** : `Reducer`를 쉽게 만들어주는 모듈, 설정된 `Action`을 `Reducer`와 연결하고 발생한 `Action`을 가져온다.

#### Module과 App의 연결
&nbsp;&nbsp;`Store`는 App의 최상위에 연결되어 하위 `Component`를 구독한다.<br>따라서 `Component`에 연결을 한다.<br> 전체적인 코드는 [여기]()를 참고해보기 바란다.
```javascript
import React            from "react"
import { createStore }  from "redux"
import { Provider }     from "react-redux"

import { Container }    from "./containers"
import modules          from "./modules"

const store = createStore(modules);

const App = () => {
    return (
        <Provider store={store}>
            <Container />
        </Provider>
    );
}

export default App;
```
 - **createStore** : 앞서 작성된 `Module`코드를 `Store`로 편하게 묶어주는 코드이다. 
 - **Provider** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 하위 `Component`에 `Store`를 연결하는 `Component`이다.