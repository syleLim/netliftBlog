# React를 구성하는 기본 요소

## webpack
### webpack이란?
 여러 파일을 동시에 묶어 하나의 번들(bundle)로 묶어 즉시호출함수(IIFE)스타일로 변경하여 빌드(build)하는 모듈 번들러(module bundler)
<br><br>
React를 빌드(build)해보면 개발자도구(Chrome에서 F12)에 Source 탭에 번들파일을 확인할 수 있다.
![1](https://user-images.githubusercontent.com/26323486/82653497-3f3a5a80-9c5a-11ea-9241-dfe3ae159400.png)
### webpack의 설정
webpack내에서 모든 파일 및 데이터는 모듈이다. 따라서 모든 파일을 javascript로 로딩해서 사용한다. 이에대한 의존성이 생기는데 이를 단계적으로 나누어 설정하여 bundle로 묶어낸다.
#### 엔트리(entry)
의존성 그래프의 시작점을 의미한다.<br>
```javascript=
module.exports = {
    entry : "./src/index.js"
}
```

#### 아웃풋(output)
모든 모듈을 하나로 묶은 결과(bundle file)를 처리할 위치이다.
```javascript=
module.exports = {
    output  : "bundle.js"
    path    : "./dist"
}
```

#### 로더(loader)
자바스크립트가 아닌 파일들을 javascript로 변경하는 모듈이다.<br>
가장 유명한 로더는 [babel-loader](), [css-loader](), [sass-loader]()이다.<br>
간단히 말하면 es6이후 문법으로 작성된 javascript를 이전 es5로 바꿔주는 로더이다. 자세한 설명은 링크 참조<br>
사용을 위해서 별도의 모듈를 설치(npm install)해야한다.
```javascript=
module.exports = {
    module : {
        rules : [{
            test      : /\.js$/,
            exclude   : /node_modules/,
            use {
                loader : 'babel-loader'
            }
        }]
    }
}
```
test에 javascript 파일을 지정하고, node_modules는 제외(exclude)시켰다. use엔 사용할 loader를 지정한다.


#### 플러그인(plugin)
번들된 결과물을 처리하는 모듈이다.<br>
특정 텍스트를 추출하거나 bundle된 javascript를 난독화하는 등의 작업을 한다. 대표적으로 UglifyJsPlugin(bundle 파일 난독화), HtmlWebpackPlugin(React html plugin)이 있다.<br>
로더와 마찬가지로 사용하려면 설치(npm install)해야한다.
```
const webpack = require('webpack')

module.exports = {
    plugins : [
        new webpack.optimize.UglifyJsPlugin()
    ]
}
```