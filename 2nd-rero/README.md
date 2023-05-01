## CRUD - 관련 메서드
#### 플로우 익히기

CRUD는 데이터베이스에서 가장 기본적인 데이터 조작 기능을 말한다. 
CRUD 메서드는 Create, Read, Update, Delete를 의미하며, 이를 통해 데이터를 생성, 조회, 수정, 삭제할 수 있다.

Create (생성)
Create는 데이터를 생성하는 메서드다. 데이터베이스에 새로운 데이터를 추가하기 위해 사용한다.
 일반적으로 데이터베이스에서는 새로운 데이터를 추가하면 데이터베이스에 고유한 ID가 부여됩니다. 이 메서드는 다음과 같은 절차로 작동한다.
사용자가 새 데이터를 입력한다.
데이터베이스는 새 데이터를 저장하고 ID를 부여한다.
사용자에게 새 데이터의 ID가 제공됩니다.

Read (읽기)
Read는 데이터를 조회하는 메서드다. 데이터베이스에 저장된 데이터를 검색하고 읽어올 때 사용한다. 
이 메서드는 다음과 같은 절차로 작동한다.
사용자가 조회하려는 데이터의 ID나 검색어를 입력한다.
데이터베이스는 해당 데이터를 검색하고 사용자에게 결과를 반환한다.

Update (수정)
Update는 데이터를 수정하는 메서드다. 이미 저장된 데이터를 수정할 때 사용한다.
 이 메서드는 다음과 같은 절차로 작동한다.
사용자가 수정하려는 데이터의 ID와 수정 내용을 입력한다.
데이터베이스는 해당 데이터를 수정하고 사용자에게 결과를 반환한다.

Delete (삭제)
Delete는 데이터를 삭제하는 메서드다. 데이터베이스에서 특정 데이터를 제거할 때 사용한다. 
이 메서드는 다음과 같은 절차로 작동한다.
사용자가 삭제하려는 데이터의 ID를 입력한다.
데이터베이스는 해당 데이터를 삭제하고 사용자에게 결과를 반환한다.
이렇게 CRUD 메서드를 사용하여 데이터베이스에서 데이터를 생성, 조회, 수정, 삭제할 수 있다. 
CRUD 메서드는 대부분의 언어와 데이터베이스에서 지원하며, 프로그래밍에서 매우 중요한 기능 중 하나다.

### useparams

React의 useParams 훅은 React Router v5에서 제공하는 훅 중 하나다. 
useParams 훅은 현재 URL에서 파라미터 값을 추출하는 데 사용됩니다. 
예를 들어, /:id와 같은 URL 경로에서 id라는 파라미터 값을 추출하는 데 사용됩니다.

useParams 훅은 다음과 같은 단계로 작동한다.

라우트에서 파라미터 값을 설정한다.
```
<Route path="/users/:userId" component={User} />
useParams 훅을 컴포넌트 내부에서 사용하여 파라미터 값을 추출한다.
jsx
Copy code
import { useParams } from 'react-router-dom';

function User() {
  let { userId } = useParams();
  return <h1>User ID: {userId}</h1>;
}
```
위의 예시에서는 User 컴포넌트에서 useParams 훅을 사용하여 현재 URL에서 userId 값을 추출하고, 이 값을 사용하여 컴포넌트 내부에서 렌더링한다.

useParams 훅은 URL에서 여러 개의 파라미터 값을 추출할 수도 있다. 
예를 들어, /users/:userId/posts/:postId와 같은 URL에서 userId와 postId 값을 추출할 수 있다. 
이 경우에는 다음과 같이 useParams 훅을 사용할 수 있다.

```
let { userId, postId } = useParams();
```
useParams 훅은 React Router에서 파라미터 값을 추출하는 가장 간단하고 직관적인 방법 중 하나다. 
파라미터 값을 추출하는 데 사용될 수 있는 다른 React Router 훅도 있지만, useParams 훅은 대부분의 경우 가장 적합한 선택이다.

### dispatch(액션발생) > payload > 리듀스받는 과정 >1 

Redux에서 dispatch 메서드는 상태를 변경하기 위한 액션 객체를 Redux 스토어에 보내는 역할을 한다. 
액션 객체는 일반적으로 type이라는 필수 속성과 payload라는 선택적 속성으로 구성됩니다.

예를 들어, 다음과 같은 액션 객체를 만들어 dispatch 할 수 있다.

```
{
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Buy groceries',
    completed: false
  }
}
```
위의 액션 객체는 ADD_TODO 라는 타입을 가지며, payload 속성은 새로운 할 일을 나타내는 객체다.

dispatch 메서드가 액션 객체를 스토어에 보내면, 스토어의 리듀서 함수가 이를 처리한다. 
리듀서 함수는 현재 상태와 액션 객체를 받아서 새로운 상태를 반환하는 순수 함수다. 
리듀서 함수는 이전 상태를 변경하지 않고, 대신 새로운 상태 객체를 반환한다.

예를 들어, ADD_TODO 액션을 처리하는 리듀서 함수는 다음과 같이 작성할 수 있다.

```
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
}
```
위의 예시에서는 state 매개변수는 이전 상태를 나타내고, action 매개변수는 dispatch 된 액션 객체다. 
ADD_TODO 타입의 액션 객체가 dispatch 된 경우, 리듀서 함수는 이전 상태에 새로운 할 일 객체를 추가하여 새로운 배열을 반환한다.

액션 객체와 리듀서 함수는 Redux에서 상태를 관리하기 위한 중요한 개념다. 
dispatch 메서드로 액션 객체를 보내고, 리듀서 함수를 사용하여 이를 처리하여 상태를 업데이트할 수 있다. 
이 과정을 통해 Redux는 애플리케이션의 전체 상태를 효율적으로 관리할 수 있다.