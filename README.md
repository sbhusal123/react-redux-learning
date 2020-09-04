# Redux
An is an open-source JavaScript library for managing application state.

![Architecture](/img/redux.jpg)

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