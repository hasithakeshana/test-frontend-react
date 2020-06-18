import React, {useState,useEffect} from "react";
import  image1 from  '../images/ImageSlider/imageSlider1.jpg'
import  image2 from  '../images/ImageSlider/imageSlider2.jpg'
import {connect} from "react-redux";
import ReactLoading from 'react-loading';
import '../index.css'
import jwt_decode from 'jwt-decode';


import * as reduxActions from '../common/actions';
import {getCart} from "../store/actions";

function ImageSlider(props) {

   
  useEffect(() => {

    props.getAllProducts();

    // if (Date.now() >= decodedUser.exp * 1000) { // check token expired or not
    //     console.log('expired');
    //   }
    //   else{
    //     console.log('not expired');
    //   }

    const token = localStorage.getItem('jwtToken');
    if(token === null || token === undefined)
    {
        console.log('guest user');
    }
    else{
        const decodedUser = jwt_decode(token);
        props.setUserDetails(decodedUser); // set user using localstorage
        props.getWishList(decodedUser.id); // set userWishList using localstorage
        props.getCart(decodedUser.id);
    }
    
    },[])

    if(props.items.length !==0 ){

        return(
        <div>

        </div>


        )
    }
    else{

        return(
            <div align="center" className="mt-5">
                <ReactLoading type={"spinningBubbles"} color={"#e75480"} height={'10%'} width={'10%'}/>
            </div>
            )


    }


}

const mapStateToProps = state => {
    return {
        items: state.items,
        selectedItemsArray : state.selectedItemsArray,
        cartCheck : state.cartCheck,
        role : state.auth.role,
        userId : state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts : () => dispatch(reduxActions.GetAllProducts()),
        getWishList : (userId) => dispatch(reduxActions.GetUserWishListAction(userId)),
        getCart : (userId) => dispatch(getCart(userId)),
        setUserDetails : (user) => dispatch(reduxActions.loginSuccessAction(user))

    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ImageSlider)
