import AxiosService from '../services/axiosService';
//import { API_ENDPOINT } from '../constants/index';

// api http://localhost:3000/task

const url = 'data';
export const getList = () => {
    return AxiosService.get(`http://localhost:5000/${url}`)
}
