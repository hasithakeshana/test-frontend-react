import { takeLatest, all, put, call } from "redux-saga/effects";
import {
	get_all_categories,
	getAllCategoriesSuccess, getCartSuccess,
	search_product_success,
	update_discount_success
} from "../store/actions";
import * as CONSTANTS from "../common/constants";
import jwt_decode from 'jwt-decode';

import {
	fetchData,
	fetchUsers,
	fetchLogin,
	fetchRatingsAdd,
	getRatingComments,
	getItemDetails,
	getUserWishList,
	removeItemFromWishList,
	addToCartFromWishList,
	addToWishList,
	getAllProducts,
	checkUserRated,
	updateRating,
	deleteRating,
	getAllCategories,
	getSearchProduct, updateDiscount, deductQuantity, getCart, updateCartDb, removeCartDb, removeCartCompletely
} from "../common/apiRoutes";
import * as globalActions from "../common/actions";

function* signUpUserWorker({ payload: { user } }) {
	try {
		const data = yield call(fetchData, { user }) || {};
		if (data) yield put(globalActions.registerSuccessAction(data.user));
	} catch (err) {
		console.log(err);
		yield put(globalActions.registerFailAction(err.message));
	}
}

function* loginUserWorker({ payload: {  email,password } }) {
	try {

		const data = yield call(fetchLogin, {  email,password }) || {};

		if (data.isValidLogin) { // valid user has a isValidLogin : true in 

//response

			
			localStorage.setItem('jwtToken',data.token);

			const decodedUser = jwt_decode(data.token);

			yield put(globalActions.loginSuccessAction(decodedUser));

			//  localStorage.removeItem("jwtToken");

		}
		else{
			yield put(globalActions.loginFailAction());
			
		}
} catch (err) {
		yield put(globalActions.loginFailAction());
	}
}

function* updateUsers() {
	const data = yield call(fetchUsers);
	yield put(globalActions.update_users_success(data));
}

// function* rateAddedWorker({ payload: { data } }){

//

//     console.log('saga RATE ',data.itemId);

//     const ProductId = data.itemId;

//     console.log('item sagaaaaaaa',data);

//      try{
//          const data  = yield call (fetchRatingsAdd ,data) || {};

//          const result = yield call (getRatingComments ,ProductId) || {};

//          console.log('result get',result);

//         // console.log('correct data',data);

//        if (result) yield put(globalActions.GetRatingSuccessAction(result.data));

//      }
//      catch(err){
//          console.log(err);

//      }

//  }

function* rateAddedWorker({ payload: { data } }) {
	//console.log('saga working');


	const ProductId = data.itemId;

	const product = data.itemId;
	const username = data.userName;

	try {
		const datas = yield call(fetchRatingsAdd, { data }) || {};

		const check = yield call(checkUserRated, { product, username }) || {};

		const result = yield call(getRatingComments, ProductId) || {};


		//console.log('correct data',datas);
		if (check) yield put(globalActions.checkUserIsRatedSuccessAction(check));
		if (result) yield put(globalActions.GetRatingSuccessAction(result.data));
	} catch (err) {
		console.log(err);
	}
}


function* getRateCommentsWorker({ payload: { ProductId } }) {
	try {
		const data = yield call(getRatingComments, ProductId) || {};

		if (data) yield put(globalActions.GetRatingSuccessAction(data.data));
	} catch (err) {
		yield put(globalActions.GetRatingFailAction(err));
	}
}

function* getViewItemDetails({ payload: { ProductId } }) {
	try {
		const data = yield call(getItemDetails, ProductId) || {};

		if (data) yield put(globalActions.GetViewItemSuccessAction(data.data.item));
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}

function* getWishListWorker({ payload: { userId } }) {
	try {
		const datas = yield call(getUserWishList, userId) || {};
		if (datas)
			yield put(globalActions.GetUserWishListSuccessAction(datas.data));
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}

function* removeWishListItemWorker({ payload: { userId, wishListOredrId } }) {
	try {
		const data = yield call(removeItemFromWishList, {
			userId,
			wishListOredrId,
		}) || {};

		const datas = yield call(getUserWishList, userId) || {};


		// if (data) yield put(globalActions.GetUserWishListSuccessAction(data.data.wishlist));

		if (datas)
			yield put(
				globalActions.GetUserWishListSuccessAction(datas.data)
			);
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}

function* addToCartFromWishListWorker({ payload: data }) {
	const { userId } = data;
	try {
		const data = yield call(addToCartFromWishList, data) || {};

		//     const datas  = yield call (getUserWishList ,userId) || {};

		//     console.log('correct data',datas.data.wishlist);

		//  if (datas) yield put(globalActions.GetUserWishListSuccessAction(datas.data.wishlist));

		//     console.log('correct data',data.data.wishlist);

		//  if (data) yield put(globalActions.GetUserWishListSuccessAction(data.data.wishlist));
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}


function* addToWishListWorker({ payload: data }) {
	// addToWishList
	const item = { data };

	const { userId } = data;

	try {
		const res = yield call(addToWishList, item) || {};


		const datas = yield call(getUserWishList, userId) || {};

		yield put(globalActions.checkItemIsInTheWishList(res.exists));

		if (datas)
			yield put(
				globalActions.GetUserWishListSuccessAction(datas.data)
			);

		//  if (data) yield put(globalActions.GetUserWishListSuccessAction(data.data.wishlist));
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}


function* getAllProductsWorker({ payload: {} }) {
	try {
		const data = yield call(getAllProducts) || {};

		const products = data.data.item;

		if (data) yield put(globalActions.GetAllProductsSuccessAction(products));
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}

function* getAllCategoriesWorker() {
	try {
		const data = yield call(getAllCategories);
		if (data) yield put(getAllCategoriesSuccess(data));
	} catch (e) {
		console.log(e);
	}
}

// checkUserIsRatedWorker
function* checkUserIsRatedWorker({ payload: product, username }) {
	console.log("saga working", product, username);

	// checkUserRated

	try {
		const data = yield call(checkUserRated, { product, username }) || {};

		console.log("saga data", data);

		//     const products = data.data.item;

		if (data) yield put(globalActions.checkUserIsRatedSuccessAction(data));
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}

function* updateRatingWorker({
	payload: productId,
	username,
	rateId,
	comment,
	rate,
}) {
	console.log("saga working", productId, username, rateId, comment, rate);

	// checkUserRated
	const product = productId;

	try {
		const data = yield call(updateRating, {
			productId,
			username,
			rateId,
			comment,
			rate,
		}) || {};

		const check = yield call(checkUserRated, { product, username }) || {};

		const result = yield call(getRatingComments, product) || {};
		//console.log('correct data',datas);
		if (check) yield put(globalActions.checkUserIsRatedSuccessAction(check));
		if (result) yield put(globalActions.GetRatingSuccessAction(result.data));
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}

function* deleteRatingWorker({ payload: productId, username, rateId }) {
	console.log("saga working", productId, username, rateId);
	// console.log('saga working', productId,username,rateId,comment,rate);

	// checkUserRated
	const product = productId;

	try {
		const data = yield call(deleteRating, { productId, username, rateId }) ||
			{};

		const check = yield call(checkUserRated, { product, username }) || {};

		const result = yield call(getRatingComments, product) || {};

		console.log("result get", result);
		console.log("saga data", data);

		//console.log('correct data',datas);
		if (check) yield put(globalActions.checkUserIsRatedSuccessAction(check));
		if (result) yield put(globalActions.GetRatingSuccessAction(result.data));
	} catch (err) {
		// yield put(globalActions.GetRatingFailAction(err));
		console.log(err);
	}
}

function* searchProduct({payload:productId}) {

try {
	const data = yield call(getSearchProduct,{payload:productId}) ||{};
	if(data !== null){
		yield put(search_product_success(data))
	}
}catch (e) {
	console.log(e);
}

}
function* updateProductWorker({payload : updateObject }){
	try{
		const status = yield  call(updateDiscount,{payload:updateObject});
		if (status){
			yield put(update_discount_success(status));
		}
	}catch (e) {
		console.log(e);
	}

}
function* deductQuantityWorker({payload:cart}) {
	try {
		for(let i = 0 ; i < cart.length  ; i++){

			const data = yield call(deductQuantity,{id:cart[i]._id,color: cart[i].selectedColor,size:cart[i].selectedSize,quantity:cart[i].quantity})

		}

	}catch (e) {
		console.log(e)
	}
}
function* getCartWorker({payload:id}) {

	try{
		const data = yield call(getCart,{payload:id});
		if(data) yield put(getCartSuccess(data.data))
	}catch (e) {
		console.log(e)
	}
}
function *updateCartDbWorker({payload:item,userId}) {
	try {
		const data = yield call(updateCartDb,[{payload:item,userId:userId}])
	}catch (e) {
		console.log(e)
	}
}
function *remove_cart_db_worker({payload:item,userId}) {
	try {
		yield call(removeCartDb,[{payload:item,userId:userId}])
	}catch (e) {
		console.log(e)
	}
}
function *remove_cart_completely_db_worker({payload:userId}) {
	try {
		yield call(removeCartCompletely,{payload:userId})
	}catch (e) {
		console.log(e)
	}
}

export function* rootWatcher() {
	yield all([
		takeLatest(CONSTANTS.ADD_TO_WISHLIST, addToWishListWorker),
		takeLatest(CONSTANTS.USER_SIGN_UP, signUpUserWorker),
		takeLatest(CONSTANTS.USER_LOGIN, loginUserWorker),
		takeLatest(CONSTANTS.ADD_RATE_COMMENT, rateAddedWorker),
		takeLatest(CONSTANTS.GET_RATE_COMMENTS, getRateCommentsWorker),
		takeLatest(CONSTANTS.GET_VIEW_ITEM, getViewItemDetails),
		takeLatest(CONSTANTS.GET_USER_WISHLIST, getWishListWorker),
		takeLatest(CONSTANTS.REMOVE_WISHLIST_ITEM, removeWishListItemWorker),
		takeLatest(
			CONSTANTS.ADD_TO_CART_FROM_WISHLIST,
			addToCartFromWishListWorker
		),
		takeLatest(CONSTANTS.USER_SIGN_UP, signUpUserWorker),
		takeLatest(CONSTANTS.USER_LOGIN, loginUserWorker),
		takeLatest("SIGNUP", updateUsers),
		takeLatest(CONSTANTS.GET_ALL_PRODUCTS, getAllProductsWorker),
		takeLatest("GET_CATEGORIES", getAllCategoriesWorker),
		takeLatest("CHECK_USER_RATED", checkUserIsRatedWorker),
		takeLatest("UPDATE_RATING", updateRatingWorker),
		takeLatest("DELETE_RATING", deleteRatingWorker),
		takeLatest('SEARCH_PRODUCT',searchProduct),
		takeLatest('UPDATE_PRODUCT_DISCOUNT',updateProductWorker),
		takeLatest('DEDUCT_QUANTITY',deductQuantityWorker),
		takeLatest('GET_CART',getCartWorker),
		takeLatest('UPDATE_CART_DB',updateCartDbWorker),
		takeLatest('REMOVE_CART_DB',remove_cart_db_worker),
		takeLatest('REMOVE_CART_COMPLETELY_DB',remove_cart_completely_db_worker)
	]);
}
