import {SET_ADMINID,SET_ID,LOGOUT} from '../actions/types';

const initialState={
    id:null,
    adminid:null,
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_ID:
            return{
                ...state,
                id:action.payload
            }

            case SET_ADMINID:
            return{
                ...state,
                adminid:action.payload
            }

        case LOGOUT:
            return initialState;
            
        default:
            return state
    }
}

