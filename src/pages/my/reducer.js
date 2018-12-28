import { 
    GET_CATEGORY_DATA,
    GET_CAROUSEL_DATA,
    GET_RECOMMENDEDCONTENT_DATA,
    GET_MYALL_DATA
} from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    //总数据
    categories:{},
    //banner数据，被干掉了
    carousel:[],
    //banner下边的图图被干掉了
    recommendedContent:[],
    //总数据
    myall:{}
})

export default (state=defaultState,action)=>{
    if (action.type === GET_CATEGORY_DATA) {
        // return {
        //     ...state,
        //     categories: {...state.categories, ...action.categories}
        // }
        return state.setIn(['categories'], fromJS(action.categories))
    }else if(action.type === GET_CAROUSEL_DATA){
        return {
            ...state,
            carousel: [...state.carousel,...action.carousel]
        }
    }else if(action.type === GET_RECOMMENDEDCONTENT_DATA){
        return {
            ...state,
            recommendedContent:[...state.recommendedContent,...action.recommendedContent]
        }
    }else if(action.type === GET_MYALL_DATA){
        return state.setIn(['myall'], fromJS(action.myall))
    }
    return state
}