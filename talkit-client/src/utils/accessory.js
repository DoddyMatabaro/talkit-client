import { reducerCases } from "./Constants";
import { GlobalContext } from "./context";
import { messagesRoute, sendRoute } from "./routesAPI";

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
            method: 'POST',
            headers:{
                "Content-Type" : "application/x-www-form-urlencoded"
            },
            body:{
                from: id_from,
                to: id_to,
                message: text
            }
        })
        .then(response=>response.json())
        .then((result)=>{
            console.log(result);
        })
    }catch(err){
        toast.error(err, toastOptions);
        console.log("erreur " + err);
    }
}

