import React, {Component, useEffect, useState} from "react";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import ItemContainer from './components/ItemContainer';
import ImageSlider from "./components/ImagSlider";
import viewItem from "./components/ViewItem/ViewItem"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import Discount from "./components/Discount/Discount";
import SelectedProducts from "./components/SelectedProducts";
import login from "./components/SignInSide";
import signup from "./components/SignUp";
import AddItem from "./components/AddItem";
import ManagerDash from "./components/ManagerDash";
import { Redirect } from 'react-router-dom';
// import NotFound from './components/NotFound/PageNotFound';
import PrivateRoute from './PrivateRoutes/PrivateRouter';
import PrivateStoreManagerRoute from "./PrivateRoutes/PrivateRouerForStoreManager";
import jwt_decode from 'jwt-decode';
import {connect} from "react-redux";
import * as reduxActions from './common/actions';
import wishList from "./components/WishList/WishList";
import {getCart} from "./store/actions";
import AddManager from "./components/managerSignup";
import AdminDash from "./components/adminDash";
import Payment from "./components/Payment/Payment";
import Home from "./components/Home/Home";
import StoreManagerLogin from "./components/Login/StoreManagerLogin";
import AddCategory from "./components/addCategory";
import AdminLogin from "./components/Login/AdminLogin";
// import addCatergory from "./components/addCategory";
import Header from "./components/Header";



function App (props) {

    const [User, setUser] = useState(false);
    const [a, seta] = useState(1);
    let decodedUser;
    useEffect(() => {

        props.getAllProducts();
        const token = localStorage.getItem('jwtToken');
        if (token === null || token === undefined) {
            console.log('guest user');
        } else {
            decodedUser = jwt_decode(token);
            //console.log(decodedUser);
            props.setUserDetails(decodedUser); // set user using localstorage
            props.getWishList(decodedUser.id); // set userWishList using localstorage
            props.getCart(decodedUser.id)

        }

    },[]);

    if (props.loggedIn) {

        return (
            <Router>
                {
                    <div>
                        <switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/viewItem" exact component={HomePage}/>
                            <Route path="/products" exact component={HomePage}/>
                            <Route path="/wishlist" exact component={HomePage}/>
                            <Route path="/cart" exact component={HomePage}/>
                            <Route path="/payment" exact component={HomePage}/>
                            <Route path="/" exact component={Home}/>
                            <Route path="/" exact component={ImageSlider}/>
                            <Route path="/s" exact component={SelectedProducts}/>
                            <Route path="/products" exact component={ItemContainer}/>
                            <Route path="/viewItem" exact component={viewItem}/>
                            <PrivateRoute exact path="/cart" component={Cart}></PrivateRoute>
                            <PrivateRoute exact path="/wishlist" component={wishList}></PrivateRoute>
                            <Route path="/login" exact component={login}/>
                            <Route path="/signup" exact component={signup}/>
                            <Route path="/AddDiscount" exact component={Discount}/>
                            <Route path="/AddItem" exact component={AddItem}/>
                            <Route path="/ManagerDash" exact component={ManagerDash}/>
                            <Route path="/AddManager" exact component={AddManager}/>
                            <Route path="/adminDash" exact component={AdminDash}/>
                            <Route path='/payment' exact component={Payment}/>
                            <Route path='/stManagerLogin' exact component={StoreManagerLogin}/>
                            <Route path='/adminLogin' exact component={AdminLogin}/>
                            <Route path='/addCategory' exact component={AddCategory}/>
                        </switch>
                        <Footer/>
                    </div>
                }
            </Router>
        );
    } else {

        return (
            <Router>
                {
                    <div>
                        <switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/viewItem" exact component={HomePage}/>
                            <Route path="/products" exact component={HomePage}/>
                            <Route path="/" exact component={Home}/>
                            <Route path="/s" exact component={SelectedProducts}/>
                            <Route path="/products" exact component={ItemContainer}/>
                            <Route path="/wishlist" exact component={login}/>
                            <Route path="/login" exact component={login}/>
                            <Route path="/signup" exact component={signup}/>
                            <Route path="/" exact component={Footer}/>
                            <Route path="/cart" exact component={login}/>
                            <Route path='/stManagerLogin' exact component={StoreManagerLogin}/>
                            <Route path='/adminLogin' exact component={AdminLogin}/>
                            <Route path="/products" exact component={Footer}/>
                        </switch>

                    </div>
                }
            </Router>
        );

    }

}

const mapStateToProps = state => {
    return {
       auth : state.auth,
        loggedIn  :state.loggedIn,
        cart : state.cart
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
       
      getAllProducts : () => dispatch(reduxActions.GetAllProducts()),
      getWishList : (userId) => dispatch(reduxActions.GetUserWishListAction(userId)),
      setUserDetails : (user) => dispatch(reduxActions.loginSuccessAction(user)), getCart : (userId) => dispatch(getCart(userId))
    }
  }
  
  export default  connect(mapStateToProps, mapDispatchToProps)(App)
  
  
