import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { buyCake } from '../redux'

// Without Using Connect, Using Hooks to dispatch and pass the props

// Usage warning: https://react-redux.js.org/api/hooks#useselector

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes} </h2>
            <button onClick={ () =>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
