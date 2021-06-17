import  AxiosService from '../services/axiosService';
import {API_ENDPOINT} from '../constants/index';
import qs from 'query-string';

// api http://localhost:6768/alarm/?q:params METHOD : GET
export const getListAnalytics =(url,params={})=>{
    console.log(params)
    let queryParams='';
    if(Object.keys(params).length >0){
        queryParams=`?${qs.stringify(params)}`;
    }
    return AxiosService.get(`${API_ENDPOINT}/${url}${queryParams}`)
}
