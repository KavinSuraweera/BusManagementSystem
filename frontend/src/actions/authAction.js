import {SET_ADMINID,SET_ID,LOGOUT} from '../actions/types';

export const logout=()=>{
    return{
        type:LOGOUT
    }
}

export const setid=(id)=>{
    return{
        type:SET_ID,
        payload:id,
    }
}

export const setadminid=(id)=>{
    return{
        type:SET_ADMINID,
        payload:id,
    }
}