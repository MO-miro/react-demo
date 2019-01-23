import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import store from 'STORE'
export function createRootReducer() {
    return combineReducers({
    //   ...syncReducers,
    //   ...asyncReducers
    })
  }