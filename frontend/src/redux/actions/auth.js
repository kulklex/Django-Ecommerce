import axios from "axios"
import { setAlert } from "./alert"
import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "./types"


export const login = (email, password)  => async dispatch =>  {
 const config = {
    headers: {
    'Content-Type': 'application/json'}
 }

 const body = JSON.stringify({email, password});

 try {
    const res = await axios.post('http://localhost:8000/', body, config);
    dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    })

    dispatch(setAlert('Authenticated successfully', 'success'))
 } catch (error) {
    dispatch({
        type: LOGIN_FAIL
    })

    dispatch(setAlert('Error Authenticating', 'error'));
    console.error(error);
 }
}

export const signup = ({name, email, password, password2}) => async dispatch => {
    const config = {
        headers: {
        'Content-Type': 'application/json'}
     }
    
     const body = JSON.stringify({email, password});
    
     try {
        const res = await axios.post('http://localhost:8000/signup', body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
    
        dispatch(login(email, password))
        } catch (error) {
        dispatch({
            type: SIGNUP_FAIL
        })
        dispatch(setAlert('Error Authenticating', 'error'));
        console.error(error);
        }
}

export const logout = () => dispatch => {
    dispatch(setAlert('logout successful', 'success'))
    dispatch({type: LOGOUT})
}