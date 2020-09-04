redux = require("redux")

createStore = redux.createStore

// Action Type
const BUY_CAKE = 'BUY_CAKE';

// Action Creator
function buyCake(){
    return {
            type: BUY_CAKE,
            info: 'Buy cake action'
    }
}

// State
const initialState = {
    numOfCakes: 10
}

// Reducer: Make a cpopy of a state then only changes that needs
const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, // make a copy
            numOfCakes: state.numOfCakes -1 // change what needs
        }
        default:
            return state
    }
}


// Creating Store
const store = createStore(reducer)
console.log('Initial state', store.getState()) // get Current State

// Subscribe to the store
const unsubscribe =  store.subscribe(()=> {console.log("Updated state", store.getState())})

// Dispatch action
store.dispatch(buyCake())
store.dispatch(buyCake())

// Unsubscribe
unsubscribe()