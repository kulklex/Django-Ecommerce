import axios from "axios"
import { setAlert } from "./alert"
import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "./actionTypes"
import {toast} from 'react-toastify'

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    withCredentials: true
})


export const login = ({email, password}, navigate)  => async dispatch =>  {
    
 const body = JSON.stringify({email, password});

 try {
    const res = await axiosInstance.post('/api/token/', body);
    dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    })
    dispatch(setAlert('Authenticated successfully', 'success'))
    navigate(`/`)
 } catch (error) {
    if(error.response) {
        const {data} = error.response
        toast.error(data.message)
    }
    dispatch({
        type: LOGIN_FAIL
    })

    dispatch(setAlert('Error Authenticating', 'error'));
    console.error(error);
 }
}

export const signup = ({name, email, password, password2}, navigate) => async dispatch => {
    
     const body = JSON.stringify({name, email, password, password2});
    
     try {
        const res = await axiosInstance.post(`/api/accounts/signup`, body);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
        navigate('/login')
    } catch (error) {
        if(error.response) {
            const {data} = error.response
            toast.error(data.message)
        }
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