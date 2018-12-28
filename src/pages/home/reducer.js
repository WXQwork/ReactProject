import {
    GET_HOMENAME_DATA
} from './actionTypes'

import { fromJS } from 'immutable'

const defaultState = fromJS({
    homename:'cookbooks'
})

export default (state=defaultState,action)=>{
    if(action.type===GET_HOMENAME_DATA){
        return state.setIn(['homename'],fromJS(action.homename))
    }

    return state
}