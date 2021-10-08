import {SET_ADMINID,SET_ID,LOGOUT,SET_CONID} from '../actions/types';

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

export const setconductorid=(id)=>{
    return{
        type:SET_CONID,
        payload:id,
    }
}