import { reducerCases } from "./Constants";

export const initialState = {
    searchKey:null,
    loading:true,
    current_user:null,
    token:null,
    messages:null,
    users:null,
 }

const reducer = (state, action)=>{
    switch (action.type){
        case reducerCases.SET_SEARCHKEY:
        return {
            ...state,
            searchKey: action.value,
        };
        case reducerCases.SET_USERS:
            return {
                ...state,
                users: action.value,
            };
        case reducerCases.SET_MESSAGES:
        return {
            ...state,
            messages: action.value,
        };
        case reducerCases.SET_CURRENT_USER:
            return {
                ...state,
                current_user: action.value,
            };
        case reducerCases.SET_LOADING:
            return {
                ...state,
                loading: action.value,
            };
        case reducerCases.SET_TOKEN:
            return {
                ...state,
                token: action.value,
            };
        default :
                    return state;
    };
};


export default reducer;