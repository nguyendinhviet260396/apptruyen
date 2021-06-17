import * as priceConstants from './../constants/prices';

/** add price list api */
export const addprice = (params = {}) => {
  return {
    type: priceConstants.ADD_PRICE,
    payload: {
      params,
    },
  };
};
export const addpriceFailed = error => {
  return {
    type: priceConstants.ADD_PRICE_FAILED,
    payload: {
      error,
    },
  };
};
export const addpriceSuccess = data => {
  return {
    type: priceConstants.ADD_PRICE_SUCCESS,
    payload: {
      data,
    },
  };
};

/** refesh price list api */
export const refeshprice = (params = {}) => {
  return {
    type: priceConstants.REFESH_PRICE,
    payload: {
      params,
    },
  };
};
export const refeshpriceFailed = error => {
  return {
    type: priceConstants.REFESH_PRICE_FAILED,
    payload: {
      error,
    },
  };
};
export const refeshpriceSuccess = data => {
  return {
    type: priceConstants.REFESH_PRICE_SUCCESS,
    payload: {
      data,
    },
  };
};


/** refesh price list api */
export const filterPriceNew = (params = {}) => {
  return {
    type: priceConstants.FILTER_FRICE_NEW,
    payload: {
      params,
    },
  };
};
export const filterPriceNewFailed = error => {
  return {
    type: priceConstants.FILTER_FRICE_NEW_FAILED,
    payload: {
      error,
    },
  };
};
export const filterPriceNewSuccess = data => {
  return {
    type: priceConstants.FILTER_FRICE_NEW_SUCCESS,
    payload: {
      data,
    },
  };
};