### React Blog Project
# Category Component
[https://github.com/syleLim/react-blog](https://github.com/syleLim/react-blog)<br><br>

## 주의사항
&nbsp;&nbsp;반드시 이전 포스트인 [App Structure](/post/React/Blog%20Project/App%20Structure)을 확인하고 보시기 바랍니다.

 해당 프로젝트는 nodejs가 일정 버전이상 설치되어 있다고 가정되어 진행됩니다.
 만약 해당 프로젝트가 정상작동이 되지 않는다면 12.0이상의 nodejs를 설치 후 진행바랍니다.

## 목표
#### Category Component를 만들어보자
<br><br><br><br>

## 사전지식
1. [immutable JS](/post/React/Acknownledge/immutable%20JS)
2. [Component prop-types]()
<br><br><br><br>

## Components
#### Category.js
```javascript
import React from "react"
import { Record, List } from "immutable"
import ImmutablePropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"

import { CategoryStyle } from "../../style"
import Profile from "./Profile"
import CategoryList from "./CategoryList"

const CategoryComponent = ({profile, categoryGroups}) => {
	return (
		<CategoryStyle>
			<Profile profile={ profile } />
			<CategoryList categoryGroups={categoryGroups} />
		</CategoryStyle>
	);
};

CategoryComponent.propTypes = {
	profile         : ImmutablePropTypes.recordOf({
		name        : PropTypes.string,
		description : PropTypes.string
	}),
	categoryGroups	: ImmutablePropTypes.listOf(
		ImmutablePropTypes.recordOf({
			groupName   : PropTypes.string,
			categories  : ImmutablePropTypes.listOf(
				PropTypes.string
			)
		})
	)
};

CategoryComponent.defaultProps = {
	profile	: Record({
		name		: "xx",
		description	: "xx"
	})(),
	categoryGroups	: List([
		Record({
			groupName	: "xx",
			categories	: List([
				"xx"
			])
		})()  
	])
};

export default CategoryComponent;
```
<br><br>

#### CategoryList.js
```javascript
import React from "react"
import { List, Record } from "immutable"

import { CategoryListStyle,
			CategoryGroupStyle,
			Item,
			GroupName,
			CategroyLink } from "../../style"

const Category = ({groupName, categories}) => {
	
	return(
	<CategoryGroupStyle>
		{categories.map((categoryName, i) => (
			<Item key={i}>
				<CategroyLink exact to={`/postlist/${groupName}/${categoryName}`}>
					{categoryName}
				</CategroyLink>
			</Item>
		))}
	</CategoryGroupStyle>
)}

const CategoryList = ({categoryGroups}) => (
	categoryGroups.map(({ groupName, categories }, i) => {
	
		return(
			<CategoryListStyle key={i}>
				<GroupName>{groupName}</GroupName>
				<Category groupName={groupName}
						 categories={categories}/>
			</CategoryListStyle>
		)}
	)
)

export default CategoryList;
```
<br><br>

#### Profile.js
```javascript
import React from "react"
import { ProfileStyle, User, Description } from "../../style"
import { Record } from "immutable"

const Profile = ({profile}) => {
	const { user, userDescription } = profile;

	return (
		<ProfileStyle>
			<User>{user}</User>
			<Description>{userDescription}</Description>
		</ProfileStyle>
	);
}

export default Profile;
```
<br><br><br><br>

## Container
#### CategoryContainer.js
```javascript
import React					from "react"
import { connect }				from "react-redux"
import { Record }				from "immutable"
import { bindActionCreators }	from "redux"

import { CategoryComponent }	from "../component"
import * as CategoryAction		from "../modules/CategoryAction"

class CategoryContainter extends React.Component {
	loadData () {
		const { CategoryAction } = this.props;
		
		CategoryAction.getCategory();
	}

	componentDidMount() {
		this.loadData();
	}

	render () {
		const { user, userDescription, categoryGroups } = this.props
		
		return (<CategoryComponent 
					profile={Record({user : user, userDescription : userDescription})()}
					categoryGroups={categoryGroups}
				/>)
	}
}

const mapStateToProps = (state) => ({
	user			: "later time"
	userDescription	: "later time"
	categoryGroups	: state.CategoryAction
});

const mapDispatchToProps = (dispatch) => ({
	CategoryAction : bindActionCreators(CategoryAction, dispatch)
});

export default CategoryContainter = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryContainter);
```
<br><br><br><br>

## Style
#### CategoryStyle.js
```javascript
import styles from "styled-components"

const CategoryStyle = styles.div`
	width			: 15rem;
	float			: right;
	background		: white;
	box-shadow		: 0 0 10px grey;
	padding-bottom	: 5rem;
	
	@media only screen and (max-width: 768px) {
		display			: none;
	}
`;

export default CategoryStyle;
```
<br><br>

#### CategoryListStyle.js
```javascript
import styles from "styled-components"

const CategoryListStyle = styles.div`
	width		: 100%;
	float		: left;
	margin-top	: 1rem;
`;

const GroupName = styles.h1`
	font-size			: 1.4rem;
	margin-block-start	: 0;
	margin-inline-start	: 1rem;
	margin-block-end	: 0;
`;

export { CategoryListStyle, GroupName };
```
<br><br>

#### CategoryGroupStyle.js
```javascript
import styles from "styled-components"
import { NavLink } from "react-router-dom"

const CategoryGroupStyle = styles.div`
			
`;

const Item = styles.div`
	margin-block-start		: 0.1rem;
	margin-inline-start		: 2rem;	
`;

const CategroyLink = styles(NavLink)`
	text-decoration		: none;
	&:focus, &:hover, &:visited, &:link, &:active {
		text-decoration	: none;
		color			: black;
	}
`;

export { CategoryGroupStyle, Item, CategroyLink };
```
<br><br>

#### ProfileStyle.js
```javascript
import styles from "styled-components"

const ProfileStyle = styles.div`
	text-align			: center;
	margin				: 0 auto;
	margin-top			: 2rem;
	width				: 10rem;
	height				: 10rem;
`;

const User = styles.h1`
	font-size			: 2.5rem;
	margin-block-end	: 0.1em;
	margin-block-start	: 0.1em;
	text-align			: center;
	background			: white;
	border				: 0.2rem solid black;
	border-radius		: 1rem;
`;

const Description = styles.p`
	font-size			: 1rem;
	margin-block-start	: 0em;
	padding				: 1rem;
	background			: black;
	color				: white;
	text-align			: center;
	border-radius		: 0.5rem;
`;

export { ProfileStyle, User, Description };
```
<br><br><br><br>

#### Module은 비워둔다.
```javascript
import { List, Record }			from "immutable"
import { handleActions, createAction }	from "redux-actions"

const GET_CATEGORY = "GET_CATEGORY";
export const getCategory = createAction(GET_CATEGORY);

const initialState = List([
	Record({
		groupName	: "no data",
		categories	: List([
			"no data"
		])
	})()
])

export default handleActions({}, initialState);

```
<br><br><br><br>


## 결과물
**각각의 index.js에 해당 부분들을 추가하고 AppComponent에서 Category Container를 호출한다.**
![result](https://user-images.githubusercontent.com/26323486/83320145-930efa00-a27f-11ea-96ea-0d70fb2ca544.png "100%")