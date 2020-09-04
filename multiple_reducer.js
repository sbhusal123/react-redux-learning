const redux = require("redux");
const combineReducers = redux.combineReducers

// Action Types
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

// Action Creator: Buy Cake
function buyCake(){
    return {
        type: BUY_CAKE
    }
}

// Action Creator: Buy Ice cream
function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}

// Initil State
const initialCakeState = {
    noOfCakes: 10,
}

const initialIceCreamState = {
    noOfIceCream: 20
}

// Reucer
const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
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

// Combine Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// Store
const store  = redux.createStore(rootReducer)

console.log("Initial state", store.getState())
console.log("")

// Subscribe to store 
unsubscribe = store.subscribe(() =>  console.log("Updated state", store.getState()) )


console.log("Buy Cakes")
// Dispatch 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

console.log("")


console.log("Buy Ice cream")
// Dispatch
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()