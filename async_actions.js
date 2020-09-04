// imports
const redux = require('redux');
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


// State
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Action Types
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'


// Actions Creatoes
const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        error: ""
    }
}


// Reducers
const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            return{
                ...state,
                users: action.payload
            }

        case FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data.map(user => user.id);
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUserFailure(error.message))
        });
    }
}

// Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// Subscribe to store
store.subscribe(()=> { console.log(store.getState()) })
store.dispatch(fetchUsers())