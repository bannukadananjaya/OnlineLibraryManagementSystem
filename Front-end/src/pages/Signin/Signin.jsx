// export default Signin
import{ useContext, useState } from 'react'
import './Signin.css'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import Switch from '@mui/material/Switch';

function Signin() {
    //default student signin
    
    const [isStudent, setIsStudent] = useState(true)
    const [admissionId, setAdmissionId] = useState()
    const [employeeId,setEmployeeId] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const { dispatch } = useContext(AuthContext)

    const api = axios.create({
        baseURL:'http://192.168.43.219:3000/'
    })
    //const API_URL = process.env.REACT_APP_API_URL
    
    // const BASE_URL = 'http://localhost:3000/'

    const loginCall = (userCredential, dispatch) => {
        dispatch({ type: "LOGIN_START" });
        console.log(userCredential);

        try {
            // const res = await axios.post("http://192.168.43.219:3000/api/auth/signin", userCredential);
            axios.post("http://localhost:3000/api/auth/signin", userCredential).then(res => {
                console.log(res.data)
                console.log('res.data')
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            }).catch(e => {
                console.log(e)
            })
            // console.log('res.data');  
            // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err })
            setError("Wrong Password Or Username")
        }
    }

    const handleForm = (e) => {
        e.preventDefault()
        isStudent
        ? loginCall({ admissionId, password }, dispatch)
        : loginCall({ employeeId,password }, dispatch)
    }

    return (
        <div className='signin-container'>
            <div className="signin-card">
                <form onSubmit={handleForm}>
                    <h2 className="signin-title"> Log in</h2>
                    <p className="line"></p>
                    <div className="persontype-question">
                        <p>Are you a Staff member ?</p>
                        <Switch
                            onChange={() => setIsStudent(!isStudent)}
                            color="primary"
                        />
                    </div>
                    <div className="error-message"><p>{error}</p></div>
                    <div className="signin-fields">
                        <label htmlFor={isStudent?"admissionId":"employeeId"}> <b>{isStudent?"Admission ID":"Employee ID"}</b></label>
                        <input className='signin-textbox' type="text" placeholder={isStudent?"Enter Admission ID":"Enter Employee ID"} name={isStudent?"admissionId":"employeeId"} required onChange={(e) => { isStudent?setAdmissionId(e.target.value):setEmployeeId(e.target.value) }}/>
                        <label htmlFor="password"><b>Password</b></label>
                        <input className='signin-textbox' type="password" minLength='6' placeholder="Enter Password" name="psw" required onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    <button className="signin-button">Log In</button>
                    <a className="forget-pass" href="#home">Forgot password?</a>
                </form>
                <div className='signup-option'>
                    <p className="signup-question">Dont have an account? Contact Librarian</p>
                </div>
            </div>
        </div>
    )
}

export default Signin