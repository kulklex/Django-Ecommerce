import  {SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from '../actions/actionTypes'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false
}

export default function authReducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access);
            return {...state, isAuthenticated: true, isLoading: true, token: payload?.access}
        case SIGNUP_SUCCESS:
            return {...state, isAuthenticated: false, isLoading: true}
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')
            return {...state, token: null, isAuthenticated: false, isLoading: false}
        default :
            return state
    }
}