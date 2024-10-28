import { createContext, useEffect, useReducer } from "react"

const iniUser = localStorage.getItem("user")

const INITIAL_STATE = {
    user: (iniUser === 'undefined') ? null : JSON.parse(iniUser),
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: action.payload,
                isLoading: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isLoading: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isLoading: false,
                error: action.payload
            };

        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    const LoginStart = () =>{
        dispatch({type:"LOGIN_START"})
    };
    const LoginSuccess = (user) =>{
      dispatch({
        type:"LOGIN_SUCCESS",
        payload: user
      })
    }
    const LoginFailure = (error) =>{
        dispatch({
            type:"LOGIN_FAILURE",
            payload: error
        })
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user])

    const context = {
        user:state.user,
        isFetching:state.isFetching,
        error:state.errot,
        LoginStart,
        LoginFailure,
        LoginSuccess,
        dispatch
    }


    return (       
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}