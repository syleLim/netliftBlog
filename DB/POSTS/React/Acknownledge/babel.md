# React를 구성하는 기본 요소

## babel
### babel이란?
es6상위 문법으로 작성된 javascript파일을 이전 문법으로 변환하는 모듈이다.<br>
대체로 webpack에서 loader로 활용된다.<br><br> 

### .babelrc
.babelrc는 babel의 설정을 모아둔 파일이며 babel을 사용할때 활용되는 plugin의 묶음이다. es6 상위의 문법들이 하나의 plugin이라 보면 된다.<br>
이러한 plugin을 묶어둔 것이 preset이며 이 preset을 설정해둠으로써 babel이 동작하게 된다.모든 preset은 따로 설치를 해야한다.<br>아래와 같이 파일을 생성하면 2개의 preset이 적용된다.
```javascript
{
    "presets": [
        "@babel/env",
        "@babel/react"
    ]
}
```

### babel-cli
위에서 말한대로 webpack의 loader로써 활용되는 것이 react내에선 일반적이지만 babel-cli를 이용하여 빌드(build)를 진행할 수 도 있다.<br>
```bash
 > npx babel script.js
```
wepback에 로더를 설정하는 법은 [webpack]()을 참고하길 바란다.