const redux = require('redux');
const reduxLogger = require('redux-logger');

// Imports
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

// Action types
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

// Action generator
function buyCake(){
    return {
        type: BUY_CAKE
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}


// initial state
const initialCakeState = {
    noOfCake: 10
}
const initialIceCreamState = {
    noOfIceCream: 20
}

// Reducers
const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCake: state.noOfCake - 1
            }
        default:
            return state
    }
}

const iceCreamReducer = (state=initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            }
        default:
            return state
    }
}

// Combine reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


// store + middleware
const store = redux.createStore(rootReducer, applyMiddleware(logger))

// initial state
console.log("Initial State", store.getState())

// dispatch
console.log("")
store.dispatch(buyCake())
console.log("")
store.dispatch(buyIceCream())
