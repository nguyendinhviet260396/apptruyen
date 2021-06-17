import * as types from './../constants/auths';


const initialState = {
    onButton:true,
    listUsers:[],
    userEditting:null,
    redirectToReferrer:false,
    listUserLogs:[],
    infAuth:null
}
const authReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.AUTH_LOGIN:{
            return{
                ...state,
            }
        }
        case types.AUTH_LOGIN_SUCCESS:{
            const {data}=action.payload;
            localStorage.setItem("token:",data.jwt_token)
            return {
                ...state,
                infAuth:null,
                redirectToReferrer:true,
            }
        }
        case types.AUTH_LOGIN_FAILD:{
            const {error} = action.payload;
            return {
                
                ...state,
                infAuth:error,
            }
        }
        case types.AUTH_LOGOUT:{
            localStorage.removeItem("token:")
            return {
                ...state,
                redirectToReferrer:false,
            }
        }
        case types.AUTH_HISTORY:{
            return{
                ...state,
            }
        }
        case types.AUTH_HISTORY_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listUserLogs:data,
            }
        }
        case types.AUTH_HISTORY_FAILD:{
            return {
                ...state,
            }
        }

        case types.AUTH_DELETE_HISTORY:{
            return{
                ...state,
            }
        }
        case types.AUTH_DELETE_HISTORY_SUCCESS:{
            const {data}=action.payload;
            return {
                ...state,
                listUserLogs:data,
            }
        }
        case types.AUTH_DELETE_HISTORY_FAILD:{
            return {
                ...state,
            }
        }
        
        case types.AUTH_SIGNUP:{
            return{
                ...state,
            }
        }
        case types.AUTH_SIGNUP_SUCCESS:{
            const {data}= action.payload;
            return {
                ...state,
                listUsers:data

            }
        }
        case types.AUTH_SIGNUP_FAILD:{
            return {
                ...state,
            }
        }
        case types.ON_BUTTON_SUBMIT:{
            return{
                ...state,
                onButton:false,
            }
        }
        case types.OFF_BUTTON_SUBMIT:{
            return{
                ...state,
                onButton:true,
            }
        }
        case types.CHECK_AUTH_SUCCESS:{
            return{
                ...state,
                infAuth:'Thành công !'
            }
        }
        case types.CHECK_AUTH_FAILD:{
            return{
                ...state,
                infAuth:'Tài khoản đã tồn tại !'
            }
        }
        case types.FETCH_USER:{
            return {
                ...state,
                listUsers:[],
            };
       }
       case types.FETCH_USER_SUCCESS: {
            const {data} =action.payload;
            return {
                ...state,
                listUsers:data,
            };
       }
       case types.FETCH_USER_FAILED: {
            return {
                ...state,
                listUsers: [],
            };
       }
       case types.SET_USER_EDITING:{
        const {user}=action.payload;
        return{
            ...state,
            userEditting:user,
        }
        }
       case types.UPDATE_USER:{
        return {
            ...state,
            listUsers:[],
        };
        }
        case types.UPDATE_USER_SUCCESS: {
                const {data} =action.payload;
                return {
                    ...state,
                    listUsers:data,
                };
        }
        case types.UPDATE_USER_FAILED: {
                return {
                    ...state,
                    listUsers: [],
                };
        }
        case types.SET_USER_DELETE:{
            return {
                ...state,
                listUsers:[],
        };
        }
        case types.SET_USER_DELETE_SUCCESS: {
                const {data} =action.payload;
                return {
                    ...state,
                    listUsers:data,
                };
        }
        case types.SET_USER_DELETE_FAILED: {
                return {
                    ...state,
                    listUsers: [],
                };
        }
            default:
                return state;
        }
};
export  default authReducer;