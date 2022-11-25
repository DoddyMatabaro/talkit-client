import { reducerCases } from "./Constants";
import { GlobalContext } from "./context";
import { converseRoute, messagesRoute, sendRoute, usersRoute } from "./routesAPI";
import { toast, ToastContainer } from 'react-toastify';
import { trackPromise } from "react-promise-tracker";


export const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
}; 

export const sendMessage = (id_from, id_to, text )=>{
    try{
        fetch(sendRoute,{
            method: 'post',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                from:id_from,
                to:id_to,
                message:text
            })
        })
        .then(response=>response.text())
        .then((result)=>{
             console.log(result);
        })
    }catch(err){
        toast.error(err, toastOptions);
    }
}

export const getAllMessages = (id, setMessage)=>{
    try{
        trackPromise(fetch(messagesRoute+id,{
            method: 'post',
            headers:{
                "Content-Type" : "application/x-www-form-urlencoded"
            },
        })
        .then(response=>response.json()))
        .then((result)=>{
            setMessage({type: reducerCases.SET_MESSAGES, value:result})
        })
    }catch(err){
        toast.error(err, toastOptions);
    }
}

export const getConversation = (id_from, id_to, setConverse)=>{
    try{
        fetch(converseRoute,{
            method: 'post',
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                from:id_from,
                to:id_to
            })
        })
        .then(response=>response.json())
        .then((result)=>{
            setConverse({type: reducerCases.SET_CONVERSATION, value: result})
        })
    }catch(err){
        toast.error(err, toastOptions);
    }
}

export const getUser = (id)=>{
    try{
        fetch(converseRoute+id,{
            method: 'get',
            headers:{
                "Content-Type" : "application/x-www-form-urlencoded"
            },
        })
        .then(response=>response.json())
        .then((result)=>{
            console.log(result);
        })
    }catch(err){
        toast.error(err, toastOptions);
    }
}

export const allUsers = (id, setUsers)=>{
    try{
        fetch(usersRoute+id,{
            method: 'get',
            headers:{
                "Content-Type" : "application/x-www-form-urlencoded"
            },
        })
        .then(response=>response.json())
        .then((result)=>{
            // console.log(result);
            setUsers({type: reducerCases.SET_USERS, value:result.users})
        })
    }catch(err){
        toast.error(err, toastOptions);
    }
}