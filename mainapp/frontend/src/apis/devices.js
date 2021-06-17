import  AxiosService from './../services/axiosService';
import {API_ENDPOINT} from './../constants/index';
import qs from 'query-string';

export const getListData =(url,params={})=>{
    let queryParams = ''
    if(Object.keys(params).length >0){
        queryParams=`?${qs.stringify(params)}`;
    }
    return AxiosService.get(`${API_ENDPOINT}/${url}${queryParams}`)
}

export const addData=(url,data)=>{
    return AxiosService.post(`${API_ENDPOINT}/${url}`,data)
}

export const updateData=(url,data)=>{
    return AxiosService.put(`${API_ENDPOINT}/${url}`,data)
}

export const deteleD =(url,id)=>{
    return AxiosService.delete(`${API_ENDPOINT}/${url}${id}`)
}