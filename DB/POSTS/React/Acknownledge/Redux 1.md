# React를 구성하는 기본 요소

## Redux 1
### 주의사항
&nbsp;&nbsp;이 내용은 react의 기초인 `state`, `props`, 리엑트간 데이터 통신, `Component`등의 기본 지식이 있다고 가정하고 작성되었습니다. 해당 지식이 없다면 먼저 학습하신 후 읽기를 추천드립니다.<br><br>&nbsp;&nbsp;또한 개념을 제외한 기본 코드는 `redux package`를 활용하여 작성되었습니다. 좀더 `low level`의 코드를 원한다면 다른 글을 참고하시는 것을 추천드립니다.
### redux 
&nbsp;&nbsp;기본적으로 react는 내부에 `state`를 기반으로 데이터들을 저장하고 `props`를 통해 상위`Component`에서 하위 `Component`로 데이터를 넘겨준다.<br>그러나 최상위 `Component`에서 최하위 `Component`까지 데이터를 넘겨주거나 하는 경우 상당한 어려움과 코드의 난잡함이 따른다.<br>따라서 이를 보완하기 위해 상태관리 라이브러리를 사용하게 되고 그중 하나가 `redux`이다.
해당 형식은 FaceBook의 **Flux**라는 패턴을 이용한 것이다. 관련 내용을 참고해 보길 추천한다.

### redux 구성 요소
#### Store
&nbsp;&nbsp;데이터를 가지고 있는 저장소<br>`Component`의 `state`를 가지고 있다고  보면 된다.(실제로 내부 데이터를 `state`라고 지칭한다.)

#### Action
&nbsp;&nbsp;데이터를 변화시키는(`state`의 변화) flag들을 정의<br>`Component`(정확히는 `Container`)가 이 `Action`들 중 하나를 `Dispatch`를 통해 `Reducer`에 전달하고 `Reducer`는 전달받은 `Action`이 무엇이냐에 따라 `Store`의 값을 변경시킨다.

#### Dispatch
&nbsp;&nbsp;`Action`을 `Component`에서 `Reducer`로 전달하는 역할을 수행한다.<br>

#### Reducer
&nbsp;&nbsp;`state`(정확히는 `Store`내부의 `state`)를 변경하는 로직이 담겨있다.<br>`Distpatch`가 넘겨준 `Action`에 따라 지정된 행동을 수행한다.

### 구조
#### Model Structure
![1](https://user-images.githubusercontent.com/26323486/82865372-8b8ae080-9f61-11ea-8b84-57793f77ccd7.png "100%")
#### Subscribe
`Store`에서 특정 `state`를 필요로하는 `Component`와 연결하는 것을 구독(subscribe)라고 표현한다. <br>기본적 구조는 디자인 패턴의 <b><i>subscribe-publish</i></b>와 유사하다. 관련정보를 참고해 보길 바란다.
#### Container
`Component`를 감싸고 있으며 해당 `Component`가 사용할 `Store`의 `state`나 `Action`과 연결한다.<br>기본적인 코드구조는 아래와 같다. 아래 코드의 `redux` package는 redux를 좀 더 간단히 구현시켜주는 module이므로 참고하기 바란다.
```javascript
import React                    from "react"
import { connect }              from "react-redux" 
import { bindActionCreators }   from "redux" 
import Component                from "component"
import * as Module              from "module" //Action이 담겨있음

class Container extends React.Component {
    render () {
        return (
            <Component /> //component를 감싸는 역할만을 수행
        )
    }
}

const mapStateToProps = (state) => ({
    /*
    * state는 Store의 state와 연결되어 있으며 원하는 데이터를 받아온다.
    * 예를 들어 Store의 state에 user라는 데이터를
    * container의 user라는 props과 연결하고 싶다면
    * user : state.user로 연결할 수 있다.
    */
    data : state.data 
})

const mapDispatchToProps = (dispatch) => ({
    /*
    * Action과 Dispatch를 연결한다.
    * 아래 코드에서 Module내에 getAction이라는 함수가 `TEST`라는 Action을 호출한다고 해보자.
    * 이 때 this.props.action.getAction()을 호출하면 Reducer에 `TEST`라는 Action을 전달한다.
    */
    action : bindActionCreators(Module, dispatch)
})

//아래 코드는 Container의 props와 Dispatch, state를 연결하는 코드이다.
export default AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Container);
```

... 2에 계속