import { reducerCases } from "./Constants";

export const initialState = {
    searchKey:null,
    current_user:localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null,
    token:localStorage.getItem('token') !== null? JSON.parse(localStorage.getItem('token')) : null,
    loader:false,
    messages:[],
    users:null,
    conversation:null,
    selected_user:null,
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
        case reducerCases.SET_SELECTED_USER:
        return {
            ...state,
            selected_user: action.value,
        };
        case reducerCases.SET_LOADER:
            return {
                ...state,
                loader: action.value,
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
        case reducerCases.SET_CONVERSSATION:
            return {
                ...state,
                current_user: action.value,
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