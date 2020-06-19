import React, {useEffect, useState} from 'react'
import logo from '../images/logo.png'
import '../index.css'
import {connect} from "react-redux";
import {Link, useHistory} from 'react-router-dom'
import {bounce} from 'react-animations'
import Radium from 'radium';
import {update_cart_count} from "../store/actions";
import * as reduxActions from '../common/actions';

const styles = {
    bounce: {
        animation: 'x 3s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}
function Header(props) {

    const history = useHistory();
    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
        props.cart.map(item => {
            props.count()
        })

    }, [])
    useEffect(() => {
        setCartCount(props.cart.length);
    }, [props.cart, props.cartDb])

    const logout = () => {

        props.logOut();
        setCartCount(0);
        history.push('/');

    }
    return (
        <div>


            <nav class="navbar navbar-light bg-light center" style={{"height": "90px"}}>
                <span className="badge badge-pill badge-light">HOTLINE - 077 000 0001</span>

                <img src={logo} alt="" class="imageCenter"/>
                <Link to="/cart" style={{textDecoration: 'none'}}>
                    <i className=" nav-link active fas fa-shopping-bag fa-lg "
                       style={{color: "#7CFC00 ", fontSize: '4'}}> <sup> <span style={{color: "#628C07 "}} class="badge badge-pill badge-light"> {cartCount}</span></sup></i>
                </Link>
                <Link to="/wishlist" style={{textDecoration: 'none'}}>
                    <i className=" nav-link active fas fa-heart fa-lg " style={{color: " #7CFC00 ", fontSize: "8"}}>
                        <sup><span class="badge badge-pill badge-light"
                                   style={{color: "#628C07 "}}> {props.wishlistCount}</span></sup></i>
                </Link>
                {props.auth.isAuthenticated?
                    <div>

                    <button type="button" className="btn btn-outline-blue-dark btn-sm" onClick={() => logout()}><i className="far fa-user-circle"/> Logout
                    </button>
                    </div>
                   :
                    <button type="button" className="btn btn-outline-blue-dark btn-sm" onClick={() => {
                        history.push("/login")
                    }}><i className="far fa-user-circle"/>Login
                    </button>
                }
            </nav>


        </div>


    )
}

const mapStateToProps = state => {
    return {
        cartCount: state.itemInCartCount,
        wishlistCount: state.auth.wishListCount,
        cart: state.cart,
        cartDb: state.user.cart,
        auth : state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        count: () => dispatch(update_cart_count()),
        logOut: () => dispatch(reduxActions.logoutAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
