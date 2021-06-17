import * as types from './../constants/analytics';
 const inittialState ={
     listAnalytics:[],
 };

 const reducer = (state=inittialState,action)=>{
     switch (action.type) {
        case types.ANALYTICS:{
             return {
                 ...state,
             };
        }
        case types.ANALYTICS_SUCCESS: {
             const {data} = action.payload;
             return {
                 ...state,
                 listAnalytics:data,
             };
        }
        case types.ANALYTICS_FAILED: {
             return {
                 ...state,
             };
        }
        default:
            return state;
     }
 }
 export default reducer;