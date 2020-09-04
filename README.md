# Redux
An is an open-source JavaScript library for managing application state.

**Architecture:**

![Architecture](/img/redux.jpg)

**Typical Flow:**
![Flow](/img/flow.png)



## 1. Core Components:
- **Action**: Stores the types of action.
- **Reducer:** Changes the state of an application.
- **Store:** Central store to store the state of an app.

### 1.1. Actions:

- The only way we can interact with store.
- Carries information from app to redux store.
- Plain js objects.
- Have ``type`` property that indicates the type of action being performed.

```js
const PROCESS_ITEM = 'PROCESS_ITEM';

// Action Creator returning action
function processItem(){
    return {
            //  Action
            type: PROCESS_ITEM,
            info: 'Processing an item.'
    }
}
```


### 1.2. Reducers:

- Specifies how the app's state changes in response to action sent to store.
- Accepts current state, action as argument and returns next state.
- ``(prevState, action) => nextState``

```js
// State
const initialState = {
    numOfItems: 10
}

// Reducer: Make a cpopy of a state then only changes that needs to
const reducer = (state=initialState, action) => {
    switch(action.type){
        case PROCESS_ITEM: return{
            ...state, // make a copy
            numOfItems: state.numOfItems -1 // change what needs to
        }
        default:
            return state
    }
}
```
