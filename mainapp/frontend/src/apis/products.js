import AxiosService from '../services/axiosService';
import { API_ENDPOINT } from '../constants/index';

//https://5ed9beef4378690016c6b2f5.mockapi.io/api/products

const url = 'products';
export const getList = () => {
    return AxiosService.get(`${API_ENDPOINT}/${url}`)
}
