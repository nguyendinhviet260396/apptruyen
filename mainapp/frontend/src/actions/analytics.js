import * as analyticsConstants from './../constants/analytics';

/** analytics Fetch List api */
export const fetchListAnalytics = (params={}) => {
    return {
        type: analyticsConstants.ANALYTICS,
        payload:{
            params,
        }
    };
};
export const fetchListAnalyticsFailed = error => {
    return {
        type: analyticsConstants.ANALYTICS_FAILED,
        payload: {
            error,
        }
    };
};
export const fetchListAnalyticsSuccess = data => {
    return {
        type: analyticsConstants.ANALYTICS_SUCCESS,
        payload: {
            data,
        }
    };
};



