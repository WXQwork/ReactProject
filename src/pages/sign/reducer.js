import { 
    GET_ISSIGN_DATA
} from "./actionTypes";

import { fromJS } from 'immutable'

const defaultState = fromJS({
    issign:'false'
})

export default (state=defaultState,action)=>{
    if(action.type === GET_ISSIGN_DATA){
        console.log(state)
        console.log(action)
        return state.set('issign',action.issign)
    }
    return state
}