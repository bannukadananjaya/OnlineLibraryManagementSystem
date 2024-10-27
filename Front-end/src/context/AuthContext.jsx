import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const iniUser = localStorage.getItem("user")

const INITIAL_STATE = {
    user: (iniUser === 'undefined') ? null : JSON.parse(iniUser),
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE)

// const AuthReducer = (state, action) => {
//     switch (action.type) {
//         case "LOGIN_START":
//             return {
//                 user: action.payload,
//                 isLoading: true,
//                 error: false
//             };
//         case "LOGIN_SUCCESS":
//             return {
//                 user: action.payload,
//                 isLoading: false,
//                 error: false
//             };
//         case "LOGIN_FAILURE":
//             return {
//                 user: null,
//                 isLoading: false,
//                 error: action.payload
//             };

//         default:
//             return state
//     }
// }
export const AuthContextProvider = ({children}) => {

//     const LoginStart = (userCredentials) =>({
//         type:"LOGIN_START"
//     });
//     const LoginSuccess = (user) =>({
//         type:"LOGIN_SUCCESS",
//         payload: user
//     })
//     const LoginFailure = (error) =>({
//         type:"LOGIN_FAILURE",
//         payload: error
//     })

    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user])

    return (       
        <AuthContext.Provider
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}