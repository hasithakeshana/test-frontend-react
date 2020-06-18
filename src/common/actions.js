//import {USER_SIGN_UP , USER_REGISTER_SUCCESS , USER_REGISTER_FAILED } from './constants';

import * as ACTIONS from "../common/constants";

export function signUpAction(user) {
	return {
		type: "SIGNUP",
		payload: {
			user,
		},
	};
}
export function registerSuccessAction(user) {
	return {
		type: ACTIONS.USER_REGISTER_SUCCESS,
		payload: {
			user,
		},
	};
}

export function registerFailAction(error) {
	return {
		type: ACTIONS.USER_REGISTER_FAILED,
		payload: {
			error,
		},
	};
}


export function loginAction(email,password){

    return{
        type : ACTIONS.USER_LOGIN,
        payload: 
          email,password
                 
    };
}

export function loginSuccessAction(user) {
    return {
      type: ACTIONS.USER_LOGIN_SUCCESS,
      payload: user
    };
  }


export function loginFailAction() {
    return {
      type: ACTIONS.USER_LOGIN_FAILED,
      payload: {},
    };
}


export function update_name(name) {
	return {
		type: "UPDATE_NAME",
		payload: name,
	};
}
export function update_name_success(name) {
	return {
		type: "UPDATE_NAME_SUCCESS",
		payload: name,
	};
}

export function update_users(name) {
	return {
		type: "UPDATE_USERS",
		payload: name,
	};
}

export function update_users_success(data) {
	return {
		type: "UPDATE_USERS_SUCCESS",
		payload: data,
	};
}

export function AddRatingAction(data) {
	return {
		type: ACTIONS.ADD_RATE_COMMENT,
		payload: {
			data,
		},
	};
}

export function AddRatingSuccessAction(data) {
	return {
		type: ACTIONS.ADD_RATE_COMMENT_SUCCESS,
		payload: {
			data,
		},
	};
}

export function AddRatingFailAction(error) {
	return {
		type: ACTIONS.ADD_RATE_COMMENT_FAILED,
		payload: {
			error,
		},
	};
}

export function GetRatingAction(ProductId) {
	return {
		type: ACTIONS.GET_RATE_COMMENTS,
		payload: {
			ProductId,
		},
	};
}

export function GetRatingSuccessAction(data) {
	return {
		type: ACTIONS.GET_RATE_COMMENTS_SUCCESS,
		payload: {
			data,
		},
	};
}

export function GetRatingFailAction(error) {
	return {
		type: ACTIONS.GET_RATE_COMMENTS_FAILED,
		payload: {
			error,
		},
	};
}

export function GetViewItemAction(ProductId) {
	return {
		type: ACTIONS.GET_VIEW_ITEM,
		payload: {
			ProductId,
		},
	};
}

export function GetViewItemSuccessAction(data) {
	return {
		type: ACTIONS.GET_VIEW_ITEM_SUCCESS,
		payload: {
			data,
		},
	};
}

export function GetViewItemFailAction(error) {
	return {
		type: ACTIONS.GET_VIEW_ITEM_SUCCESS,
		payload: {
			error,
		},
	};
}

export function GetUserWishListAction(userId) {
	return {
		type: ACTIONS.GET_USER_WISHLIST,
		payload: {
			userId,
		},
	};
}

export function GetUserWishListSuccessAction(data) {
	return {
		type: ACTIONS.GET_USER_WISHLIST_SUCCESS,
		payload: data,

	};
}

export function GetUserWishListFailAction(error) {
	return {
		type: ACTIONS.GET_USER_WISHLIST_FAILED,
		payload: {
			error,
		},
	};
}

export function RemoveWishListItemAction(userId, wishListOredrId) {
	return {
		type: ACTIONS.REMOVE_WISHLIST_ITEM,
		payload: {
			userId,
			wishListOredrId,
		},
	};
}

export function AddToCartFromWishListAction(data) {
	return {
		type: ACTIONS.ADD_TO_CART_FROM_WISHLIST,
		payload: data,
	};
}

export function AddToCartFromWishListSuccessAction(data) {
	return {
		type: ACTIONS.ADD_TO_CART_FROM_WISHLIST_SUCCESS,
		payload: {
			data,
		},
	};
}

export function AddToCartFromWishListFailAction(error) {
	return {
		type: ACTIONS.ADD_TO_CART_FROM_WISHLIST_FAILED,
		payload: {
			error,
		},
	};
}

export function itemAddToWishlist(data) {
	return {
		type: ACTIONS.ADD_TO_WISHLIST,
		payload: data,
	};
}

export function GetAllProducts() {
	return {
		type: ACTIONS.GET_ALL_PRODUCTS,
		payload: {},
	};
}

export function GetAllProductsSuccessAction(data) {
	return {
		type: ACTIONS.GET_ALL_PRODUCTS_SUCCESS,
		payload: data,
	};
}

export function GetAllProductsFailedAction(error) {
	return {
		type: ACTIONS.GET_ALL_PRODUCTS_FAILED,
		payload: {
			error,
		},
	};
}

export function checkUserIsRatedAction(product, username) {
	return {
		type: "CHECK_USER_RATED",
		payload: product,
		username,
	};
}

export function checkUserIsRatedSuccessAction(data) {
	return {
		type: "CHECK_USER_RATED_SUCCESS",
		payload: data,
	};
}

export function updateRatingAction(productId, username, rateId, comment, rate) {
	return {
		type: "UPDATE_RATING",
		payload: productId,
		username,
		rateId,
		comment,
		rate,
	};
}

export function updateRatingSuccessAction(data) {
	return {
		type: "UPDATE_RATING_SUCCESS",
		payload: data,
	};
}

export function deleteRatingAction(productId, username, rateId) {
	return {
		type: "DELETE_RATING",
		payload: productId,
		username,
		rateId,
	};
}

export function deleteRatingSuccessAction(data) {
	return {
		type: "DELETE_RATING_SUCCESS",
		payload: data,
	};
}

export function checkItemIsInTheWishList(data){

	return{
		type : 'CHECK_ITEM_IN_WISHLIST',
		payload: data
			  
	};
  }


export function logoutAction() {
  return {
    type: 'LOG_OUT',
    payload: {},
  };
}

export function tokenChecked(status) {
  return {
    type: 'IS_TOKEN_CHECKED',
    payload: status,
  };
}
