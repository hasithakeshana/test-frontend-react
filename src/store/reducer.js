import * as ACTIONS from '../common/constants';
import {forEach} from "react-bootstrap/cjs/ElementChildren";


export const initialState = {

    usernames: "user20",
    userIs: "guest",
    rateUserDeatils: "",
    user: {
        cart: [],
        cartTotal: 0
    },
    products: [],
    item: {
        currentSelectedItem: {},
        itemRatingDetails: {
            countRatings: {},
            avgRating: 0,
            ratingCount: {},
            ratingList: {},
        }

    },

    auth: {
        isAuthenticated: false,
        isTokenChecked: false,
        wishList : {},
        wishListCount : 0,
        wishListTotal : 0,
        role : "guest",
        user : {},
        userId : "",
        email : "",
        },
    items: [],

    menCategories: [],
    womenCategories: [],
    kidsCategories: [],
    sportsCategories: [],
    discountCategories: [],
    selectedMainCategory: "All",
    selectedSubCategory: "All",
    selectedItemsArray: [],
    itemInCartCount:0,
    cartTotal: 0,
    searchedProduct :{},
    discountStatus : 0,
    cartCheck: false,
    cart: [],
    cartCount : 0,
    loggedIn : false

};

const reducer = (state = initialState, {type, payload}) => {

    const newState = {...state};


    if (type === 'SIGNUP') {
        newState.auth.currentUser = payload.user;
    }
    if (type === 'UPDATE_MAIN_CATEGORY') {
        newState.selectedMainCategory = payload;
    }
    if (type === 'UPDATE_SUB_CATEGORY') {
        newState.selectedSubCategory = payload;
    }
    if (type === 'UPDATE_SELECTED_ITEMS_ARRAY') {
        newState.selectedItemsArray = payload;
    }
    if (type === 'UPDATE_CART') {
        newState.cart.push(payload)
    }
    if (type === 'UPDATE_CART_COUNT') {
        newState.itemInCartCount = newState.cart.length;
    }
    if (type === 'UP_COUNT_IN_CART') {


        let index = state.cart.findIndex(x => x.itemID === payload);
       /* newState.cart[index].quantityInCart = newState.cart[index].quantityInCart + 1;
        newState.cartTotal = newState.cartTotal + newState.cart[index].price;*/

    }
    if (type === 'DOWN_COUNT_IN_CART') {

        let index = state.cart.findIndex(x => x.itemID === payload);
      /*  newState.cart[index].quantityInCart = newState.cart[index].quantityInCart - 1;
        newState.cartTotal = newState.cartTotal - newState.cart[index].price;*/

    }
    if (type === 'ADD_TO_TOTAL') {

        newState.cartTotal = newState.cartTotal + payload;


    }
    if (type === 'CART_CHECK_TRUE') {
        newState.cartCheck = !newState.cartCheck;
    }
    if (type === 'CART_CHECK_FALSE') {
        newState.cartCheck = false;
    }
    if (type === 'CHECK_CART') {
        let index = newState.items.findIndex(x => x.itemID === payload.itemID);
        newState.items[index].cartIn = true;

    }
    if (type === ACTIONS.GET_RATE_COMMENTS_SUCCESS) {

        // console.log(payload.data);

        newState.item.itemRatingDetails.countRatings = payload.data.countRatings;

        newState.item.itemRatingDetails.avgRating = payload.data.avg;

        newState.item.itemRatingDetails.ratingCount = payload.data.noOfRatings;

        newState.item.itemRatingDetails.ratingList = payload.data.ratings

    }

    if (type === ACTIONS.GET_VIEW_ITEM_SUCCESS) {

        newState.item.currentSelectedItem = payload.data;

    }

    if(type === ACTIONS.GET_USER_WISHLIST_SUCCESS){

       newState.auth.wishList = payload.wishlist;

        const count = payload.wishlist.length;
        
       newState.auth.wishListCount = count;

       //wishListTotal
       newState.auth.wishListTotal = payload.total;



    }
    // GET_ALL_PRODUCTS_SUCCESS
    if (type === ACTIONS.GET_ALL_PRODUCTS_SUCCESS) {

        newState.items = payload;
        // const count = payload.data.length;
        // console.log('count',count); // wishListCount
        // newState.auth.wishListCount = count;
        // action = login success -> currentUser = payload.user/ isauthenticated = true
        // action logout -> isauthenticated / false
        // register success -> isregistered = success
        // toekn checked -> tokenchecked = true

    }
    if (type === 'GET_CATEGORIES_SUCCESS') {

        newState.menCategories = payload.data[0].menCategories;
        newState.womenCategories = payload.data[0].womenCategories;
        newState.kidsCategories = payload.data[0].kidsCategories;
        newState.sportsCategories = payload.data[0].sportsCategories;
        newState.discountCategories = payload.data[0].discountCategories;
    }

    if (type === "CHECK_USER_RATED_SUCCESS") {

        newState.rateUserDeatils = payload;

    }if(type==="ZERO_TOTAL"){

        newState.cartTotal=0;
    }if(type==="REMOVE_FROM_CART"){

        let arr = newState.cart;
        newState.cart = [];
        newState.user.cart=[];
        arr.map(item=>{
            if(item.uuid !== payload.uuid){
                newState.cart.push(item);
                newState.user.cart.push(item)
            }
        })
        newState.cartTotal=0;
        newState.cart.map(item=>{
            newState.cartTotal = newState.cartTotal+(item.price * ((100 - item.discount) / 100));
        });
        newState.itemInCartCount--;

    }if(type === 'SEARCH_PRODUCT_SUCCESS'){

        newState.searchedProduct = payload;
    }if(type==='UPDATE_PRODUCT_DISCOUNT_SUCCESS'){
        newState.discountStatus = payload;
    }if(type==='SET_CART'){

        newState.cart = newState.user.cart;

    }
    if(type === "CHECK_ITEM_IN_WISHLIST"){
        newState.item.checkItemIsInWishList = payload;
    }
    if(type === ACTIONS.USER_LOGIN_SUCCESS){
       
    
        newState.auth.userId = payload.id;
        newState.auth.email = payload.name;
        newState.auth.role = payload.role;
        newState.auth.isAuthenticated = true;
        newState.loggedIn = true;
    }
    if(type === ACTIONS.USER_LOGIN_FAILED){
       
    
        newState.auth.userId = '';
        newState.auth.email = '';
        newState.auth.isAuthenticated = false;
        newState.loggedIn = false;
    }
    if(type === "LOG_OUT"){
       
            
        localStorage.removeItem("jwtToken");
        newState.auth.userId = '';
        newState.auth.email = '';
        newState.auth.role = "guest";
        newState.auth.isAuthenticated = false;
        newState.auth.wishListCount = 0;
        newState.cartCount = 0;
        newState.cart=[];
        newState.user.cart =[];
        newState.loggedIn=false;
    }
    if(type === "IS_TOKEN_CHECKED"){
       
        newState.auth.isTokenChecked = true;
    }if(type=="GET_CART_SUCCESS"){

       newState.user.cart = payload[0].cart;
       newState.cart = payload[0].cart;
       newState.itemInCartCount = payload[0].cart.length;
       let total=0;
       payload[0].cart.map(x=>{
           total = x.price*( (100 - x.discount)/100)
       })
       newState.cartTotal = total;

    }if(type === "REMOVE_CART_COMPLETELY"){
        newState.cart=[];
        newState.user.cart =[];
    }
    

    return newState;

}


export default reducer;
