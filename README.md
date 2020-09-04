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

### 1.3. Redux Store
- One Store for entire application.

**Responsibilities:**
- Holds entire application state.
- Allows access to state via ``getState()``.
- Allows state to be updated via ``dispatch(action)``.
- Register listner via ``subscribe(listner)``. Executed anytime state changes.
- Handles unregistering of listners via the function returned by ``subscribe(listner)`` using ``unregister()``.

```js
// Creating Store
const store = createStore(reducer)
console.log('Initial state', store.getState()) // get Current State

// Subscribe to the store
const unsubscribe =  store.subscribe(()=> {console.log("Updated state", store.getState())})

// Dispatch action
store.dispatch(processItem())

// Unsubscribe
unsubscribe()
```

## 2. Combining Reducers:
- For the large applications it becomes hard to manage the actions and reducers in a single file.
- So we need to separate the actions separaetly.
- Thus we can combine the multiple reducers as one by combining such reducers using ``combineResucers``.
- It takes the reducer objects as an argument.
- Demo file: ***multiple_reducer.js***.

```js
// Combine Reducers
const rootReducer = combineReducers({
    myReducer1: reducer1,
    myReducer2: reducer2
})
```