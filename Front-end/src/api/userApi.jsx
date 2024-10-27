import api from "./api";

export const Login = async(userCredentials,dispatch) => {  
    dispatch({type:"LOGIN_START"});
    console.log(userCredentials);
    try{
        
        const response = await api.post('/auth/signin',userCredentials);
        const data = await response.data;

        if(response.status !== 200){
          
            console.log("login not success",data);
            dispatch({ type: "LOGIN_FAILURE", payload: data })
           
            return { success: false, data:data };
        }

        console.log(data);
        dispatch({type:"LOGIN_SUCCESS",payload:data})
        console.log("dispatch",dispatch);
        return { success: true, data:data };
    }catch(err){
        console.log(err)
    }
}

