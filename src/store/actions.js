
export function update_selected_main_category(selectedMainCategory){
    return{
        type : 'UPDATE_MAIN_CATEGORY',
        payload : selectedMainCategory
    }

}
export function update_selected_sub_category(selectedSubCategory){
    return{
        type : 'UPDATE_SUB_CATEGORY',
        payload : selectedSubCategory
    }

}

export function update_buildSelectedItemsArray(selectedItemsArray){
    return{
        type : 'UPDATE_SELECTED_ITEMS_ARRAY',
        payload : selectedItemsArray
    }

}
export function update_cart(item) {
    return {
        type: 'UPDATE_CART',
        payload: item
    }
}
export function update_cart_count() {

    return {
        type: 'UPDATE_CART_COUNT',
        payload: 1
    }
}
export  function update_cart_DB(item,userId) {
    return{
        type: 'UPDATE_CART_DB',
        payload : item,userId
    }
}
export  function  up_count_in_cart(itemId){
    return {
        type: '',
        payload: itemId
    }

}
export  function  down_count_in_cart(itemId){
    return {
        type: 'DOWN_COUNT_IN_CART',
        payload: itemId
    }

}

//This function is called when user clicking cart icon of an item and when clicking it Total in the cart is also updated
export function add_to_total(item) {
    return{
        type: 'ADD_TO_TOTAL',
        payload:item
    }
}

export function cart_check_true() {
    return{
        type: 'CART_CHECK_TRUE',
        payload:1
    }
}
export function cart_check_false() {
    console.log('false')
    return{
        type: 'CART_CHECK_FALSE',
        payload:1
    }
}
export function check_cart(item) {
    return{
        type: 'CHECK_CART',
        payload:item
    }
}

export function get_all_categories(data) {
    return{
        type:'GET_CATEGORIES',
        payload:data
    }
}
export function getAllCategoriesSuccess(data) {
    return {
        type: 'GET_CATEGORIES_SUCCESS',
        payload: data
    }
}
export function updateTotal(data) {
    return {
        type: 'ADD_TO_TOTAL',
        payload: data
    }
}
export function zeroTotal(data) {
    return {
        type: 'ZERO_TOTAL',
        payload: data
    }
}
export function remove_item(item) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}
export function search_product(productId) {
    return {
        type: 'SEARCH_PRODUCT',
        payload: productId
    }
}
export function search_product_success(data) {
    return {
        type: 'SEARCH_PRODUCT_SUCCESS',
        payload: data
    }
}
export function update_product(updateObject) {
    return {
        type: 'UPDATE_PRODUCT_DISCOUNT',
        payload: updateObject
    }
}
export function update_discount_success(status) {
    return {
        type: 'UPDATE_PRODUCT_DISCOUNT_SUCCESS',
        payload: status
    }
}

export function deductQuantity(cart){
    return{
        type:'DEDUCT_QUANTITY',
        payload: cart
    }
}
export function setCart(){
    return{
        type:'SET_CART',
        payload: 0
    }
}

export function getCart(data) {
    return {
        type:'GET_CART',
        payload: data,

    };
}
export function getCartSuccess(data) {

    return {
        type:'GET_CART_SUCCESS',
        payload: data,

    };
}

export function remove_item_DB(item,userId) {

    return{
        type:'REMOVE_CART_DB',
        payload : item,userId
    }
}

export  function removeCartCompletely() {
    return{
        type:'REMOVE_CART_COMPLETELY',

    }
}
export  function removeCartCompletelyDb(userId) {
    return{
        type:'REMOVE_CART_COMPLETELY_DB',
        payload : userId
    }
}
