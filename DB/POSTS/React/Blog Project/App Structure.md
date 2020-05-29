### React Blog Project
# App Structure
[https://github.com/syleLim/react-blog](https://github.com/syleLim/react-blog)<br><br>

## 주의사항
 해당 프로젝트는 nodejs가 일정 버전이상 설치되어 있다고 가정되어 진행됩니다.
 만약 해당 프로젝트가 정상작동이 되지 않는다면 12.0이상의 nodejs를 설치 후 진행바랍니다.

## 목표
#### App에 필요한 Component들과 연결관계, 필요한 State와 Action을 정의한다.
<br><br><br>

## 전체 파일 구조
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
      |   |   |   └── AppComponent.js
      |   |   ├── Category
      |   |   |   ├── Category.js
      |   |   |   ├── CategoryList.js
      |   |   |   └── Profile.js
      |   |   ├── Footer
      |   |   |   └── Footer.js
      |   |   ├── Header
      |   |   |   └── Header.js
      |   |   ├── Home
      |   |   |   ├── Home.js
      |   |   |   └── HomePreivew.js
      |   |   ├── PostList
      |   |   |   ├── PostList.js
      |   |   |   └── PostListPreivew.js
      |   |   ├── Post
      |   |   |   └── Post.js
      |   |   └── Title
      |   |       └── Title.js
      |   ├── container
      |   |   ├── index.js
      |   |   ├── AppContainer.js
      |   |   ├── CategoryContainer.js
      |   |   ├── HomeContainer.js
      |   |   ├── PostListContainer.js
      |   |   └── PostContainer.js
      |   ├── page
      |   |   ├── index.js
      |   |   ├── Home.js
      |   |   ├── Post.js
      |   |   └── PostList.js
      |   ├── module
      |   |   ├── index.js
      |   |   ├── DataAction.js
      |   |   ├── CategoryAction.js
      |   |   ├── PostListAction.js
      |   |   └── PostAction.js
      |   ├── lib
      |   |   ├── index.js
      |   |   └── markdown
      |   |       └── PostMarkdown.js
      |   └── styles
      |       ├── index.js
      |       ├── AppStyle.js
      |       ├── Basic
      |       |   └── BasicStyle.js
      |       ├── Category
      |       |   ├── CategoryGroupStyle.js
      |       |   ├── CategoryListStyle.js
      |       |   ├── CategoryStyle.js
      |       |   └── ProfileStyle.js
      |       ├── Footer
      |       |   └── FooterStyle.js
      |       ├── Header
      |       |   └── HeaderStyle.js
      |       ├── Home
      |       |   ├── HomeStyle.js
      |       |   └── HomePreviewStyle.js
      |       ├── Post
      |       |   ├── PostListStyle.js
      |       |   ├── PostPreviewStyle.js
      |       |   └── PostListStyle.js
      |       ├── Preview
      |       |   └── PreviewStyle.js
      |       └── Title
      |          └── TitleStyle.js
      ├── .babelrc
      ├── .gitignore
      ├── package.json
      └── webpack.config.js
  ``` 
<br><br><br><br>

## 컴포넌트 구성
[image 넣을것]()
<br><br><br><br>

## 컴포넌트 당 State
[image 넣을것]()
<br><br><br><br>

## 컴포넌트 당 액션 구성
[image 넣을것]()
<br><br><br><br>
