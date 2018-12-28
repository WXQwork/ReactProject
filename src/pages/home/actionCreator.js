import {
    GET_HOMENAME_DATA
} from './actionTypes'

export const loadNameSync = (homename)=>{
    return {
        type:GET_HOMENAME_DATA,
        homename
    }
}