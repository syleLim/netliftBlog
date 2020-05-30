# Data Structure

## Immutable JS
### 주의사항
&nbsp;&nbsp;이 내용은 javascript 기초인 `array` 및 `array function`들, javascript의 불변성(`immutability`) 패러다임에 대한 기본 지식이 있다고 가정하고 작성되었습니다. 해당 지식이 없다면 먼저 학습하신 후 읽기를 추천드립니다.
<br><br><br>

### immutable
&nbsp;&nbsp;javascript는 원시 데이터를 제외한 모든 데이터를 객체로 참조하므로 데이터의 변화가 쉽게 이루어진다.<br>다만 이러한 부분은 상당히 문제를 일으킬 수 있다.<br><br>예를 들어 어떤 웹 페이지에서 2명의 client가 거의 동시에 요청을 하였을 때, 앞선 요청자의 프로세스가 느린 경우 두번째 요청자의 결과가 발생해버리면 interupt가 발생할 수 있으며 성능도 떨어진다.<br>이러한 상황을 방지하기 위해 immutable 패러다임이 추가되었다. 
<br><br><br>

### immutable without immutable-js
&nbsp;&nbsp;`immutable-js`는 javascript에서 `array`나 `map`을 `immutable`하게 쉽게 하도록 만든 모듈이지만 해당 기능이 없이 immutable을 간단히 경험해보자
#### splice / slice
&nbsp;&nbsp;`array`의 내장 함수 중, `splice`와 `slice`는 유사한 기능을 가진다. 다만 `splice`는 원본배열을 변경 시키고, `slice`는 새로운 배열을 반환한다. 이렇듯 `splice`를 사용하게 되면 불변성을 해치게 되므로 불변성을 유지하기 위해선 `slice`를 사용한다.
<br><br>

#### Object.freeze / Object.assign
&nbsp;&nbsp;`Object.freeze`어떠한 객체를 아예 변경이 불가능한 객체로 만든다. 다만 내부 데이터는 변경가능하므로 완벽한 불변성을 유지하지는 못한다. 이를 변경한 객체를 만들기 위해선 `Object.assgin`을 활용해 복사한 객체를 변경하는 방법을 사용한다.
<br><br><br><br>

### immutable-js
&nbsp;&nbsp;성능 이슈 및 코드의 간결성을 위해 불변 구조체를 만들어내는 모듈이다.<br>내부에 정의된 `Map`, `List`, `Record`가 있으며 `fromJS()`를 통해 객체를 `immutable-js`의 객체로 만들 수 도 있고, `toJS()`를 통해 `immutable-js`객체를 일반 객체로 바꿀 수 도 있다.
<br><br>

#### Map
&nbsp;&nbsp;`immutable-js`의 가장 기본적인 객체로 `key : value`데이터형이다. 데이터를 직접 참조(.)할수 없고 `get` / `set` / `update`을 이용해 접근해야한다.<br>`toJS()`를 통해 일반 객체를 얻을 수 도 있다.
```javascript
import { Map } from "immutable"

const map = Map({a : 1, b : 2, c : 3})
console.log(map.get('a')) //1
console.log(map.a)        //undefied 접근이 불가능하다.


const map_copy = map.set('a', 2);
console.log(map_copy.get('a')) //2
console.log(map.get('a'))      //1

const map_update = map.update('a', e => e + 1)
console.log(map_update.get('a')) //2

const n_map = map.toJS()
console.log(n_map.a) //1
```
<br>

위와 같이 get을 통해 데이터에 접근해야 하고 set을 통해 데이터를 변경한 새로운 객체를 반환한다. 만약 읽은 후의 작업을 정의하고 싶으면 `update`를 사용한다.<br>겹쳐있는 객체도 fromJS를 통해 Map으로 만들 수 있다.<br>이렇게 깊은 객체는 `getIn`이나 `setIn`을 통해 한번에 조작할 수 있다.

```javascript
import { Map, fromJS } from "immutable"

const map = fromJS({
    a : 1,
    b : 2,
    c : {
        ca : 1,
        cb : 2
    }
})
console.log(map.getIn(['c', 'ca'])) //1

const map_copy = map.setIn(['c', 'ca'], 3)
console.log(map_copy.getIn(['c', 'ca'])) //3
console.log(map.getIn(['c', 'ca']))      //1
```
<br>

여러개의 값을 동시에 설정하는 `merge`, `mergeIn`이 있지만 성능상 `set`을 반복하는 것이 낫다.
```javascript
cosnt new_map = map.merge({a : 1, b : 2})
cosnt new_map = map.mergeIn(['c'], {ca : 1, cb : 2})
```
<br><br><br>

#### List
&nbsp;&nbsp;immtable한 array를 만드는 법이고 array의 내장함수를 대부분 활용할 수 있다.(map, filter, push, pop...)<br>Map과 유사하에 `get`, `set`, `update`을 활용하고 key대신 index값을 넣어주면 된다.
```javascript
import { List } from "immutable"

const arr = List([1, 2, 3, 4])
console.log(arr.get(0))  //1
console.log(arr.set(0, 5).get(0)) //5
console.log(arr.update(0, e => e + 1).get(0)) //2

console.log(arr.toJS()[0]) //1
```
<br><br><br>

#### Record
&nbsp;&nbsp;Map과 같으나 일반 객체처럼 접근이 가능합니다. 물론 get도 가능하나, key값을 새로 추가할 수는 없다. 또한 함수이므로 생성시 함수호출로 하여야 한다.
```javascript
import { Record } from "immutable"

const record = Record({ a : 1, b : 2}))()
console.log(record.a) //1
```
<br><br><br>