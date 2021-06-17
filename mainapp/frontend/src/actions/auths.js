import * as authTypes from './../constants/auths';


export const authLogin =(email,password)=>({
    type:authTypes.AUTH_LOGIN,
    payload:{
        email,
        password
       
    }
});

export const authLoginSuccess = (data) => ({
    type: authTypes.AUTH_LOGIN_SUCCESS,
    payload:{
        data,
    }
});

export const authLoginFaild =(error)=>({
    type:authTypes.AUTH_LOGIN_FAILD,
    payload:{
        error,
    }
});


export const authLogout =()=>({
    type:authTypes.AUTH_LOGOUT,
});


export const authLogHistory =()=>({
    type:authTypes.AUTH_HISTORY,
    payload:{
       
    }
});

export const authLogHistorySuccess = (data) => ({
    type: authTypes.AUTH_HISTORY_SUCCESS,
    payload:{
        data,
    }
});

export const authLogHistoryFaild =(error)=>({
    type:authTypes.AUTH_HISTORY_FAILD,
    payload:{
        error,
    }
});


export const authLogDeleteHistory =(id)=>({
    type:authTypes.AUTH_DELETE_HISTORY,
    payload:{
       id,
    }
});

export const authLogDeleteHistorySuccess = (data) => ({
    type: authTypes.AUTH_DELETE_HISTORY_SUCCESS,
    payload:{
        data,
    }
});

export const authLogDeleteHistoryFaild =(error)=>({
    type:authTypes.AUTH_DELETE_HISTORY_FAILD,
    payload:{
        error,
    }
});


export const authSignup = (name,email,password,operator) => ({
    type: authTypes.AUTH_SIGNUP,
    payload:{
        name,
        email,
        password,
        operator,
    }
});
export const authSignupSuccess = (data) => ({
    type: authTypes.AUTH_SIGNUP_SUCCESS,
    payload:{
        data,
        
    }
});

export const authSignupFaild = (error) => ({
    type: authTypes.AUTH_SIGNUP_FAILD,
    payload:{
        error,
    }
});

export const onButtonSubmit =()=>({
    type:authTypes.ON_BUTTON_SUBMIT,
});
export const offButtonSubmit =()=>({
    type:authTypes.OFF_BUTTON_SUBMIT,
});
export const checkAuthSuccess =()=>({
    type:authTypes.CHECK_AUTH_SUCCESS,
});
export const checkAuthFaild =()=>({
    type:authTypes.CHECK_AUTH_FAILD,
});


/**edit user */
export const setUserEditting =(user)=>{
    return{
        type : authTypes.SET_USER_EDITING,
        payload:{
            user,
        }
    }
};


export const updateUser =(name,email,password,operator)=>{
    return{
        type : authTypes.UPDATE_USER,
        payload:{
            name,
            email,
            password,
            operator,
        }
    }
};
export const updateUserFailed = error => {
    return {
        type: authTypes.UPDATE_USER_FAILED,
        payload: {
            error,
        }
    };
};
export const updateUserSuccess = data => {
    return {
        type: authTypes.UPDATE_USER_SUCCESS,
        payload: {
            data,
        }
    };
};



export const fetchListUser= (params={}) => {
    return {
        type: authTypes.FETCH_USER,
        payload:{
            params,
        }
    };
};
export const fetchListUserFailed = error => {
    return {
        type: authTypes.FETCH_USER_FAILED,
        payload: {
            error,
        }
    };
};
export const fetchListUserSuccess = data => {
    return {
        type: authTypes.FETCH_USER_SUCCESS,
        payload: {
            data,
        }
    };
};

export const setUserDelete = id =>{
    return{
        type : authTypes.SET_USER_DELETE,
        payload:{
            id,
        }
    }
};
export const setUserDeleteSucces = data=>{
    return{
        type : authTypes.SET_USER_DELETE_SUCCESS,
        payload:{
            data,
        }
    }
};
export const setUserDeleteFaild =error=>{
    return{
        type : authTypes.SET_USER_DELETE_FAILED,
        payload:{
            error,
        }
    }
};