# React를 구성하는 기본 요소

## Styled Component
### 주의사항
&nbsp;&nbsp;이 내용은 react의 기초인 `Component`, `Webpack` 및 CSS에 대한 기본 지식이 있다고 가정하고 작성되었습니다. 해당 지식이 없다면 먼저 학습하신 후 읽기를 추천드립니다.
<br><br><br>

### React Style
&nbsp;&nbsp;React는 기본적으로 webpack을 통해 읽게 되므로 내부에서 style을 정의하거나 Webpack loader를 통해 css혹은 scss파일을 읽어와 스타일링을 하게된다.<br>이번 파트에선 inline style중 가장 유명한 styled component를 살펴본다.
<br><br><br>

### styled-component
#### inline style
&nbsp;&nbsp;inline style이란 javascript코드 내에서 style을 작성하는 기법으로 javascript로 작성되므로 따로 loader를 통해 외부 파일을 읽어올 필요가 없다.
<br><br>

#### styled-component module
&nbsp;&nbsp;기본적으로 styled component로 구성한 style은 React element로 반환된다.<br>따라서 component를 작성할 때와 동일하게 작성하면 된다.
```javascript
import styled from "styled-component"

const Style = styled.div`
    width           : calc(100% - 20rem);
    height          : 10rem;
    float           : left;
    backgrond-color : #555555;
    @media only screen and (max-width: 768px) {
        width       : 100%; 
    } 
`

const App = () => (
    <Style>
        Style DIV with styled component
    </Style>
)
```
<br>

위 코드에선 styled.div를 통해 style이 적용된 div를 만들고 이를 원하는 element를 감싸서 처리한다.<br>h1등도 위와 같이 설정할 수 있고, 라우터에 존재하는 NavLink등도 아래와 같이 설정할 수 있다.
```javascript
const StyleLink = styled(NavLink)`
    color        : white;
    font-size    : 1rem;
`
```

자세한 내용은 [공식 문서](https://styled-components.com/docs) 참고