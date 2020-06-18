import React, {useEffect, useState} from 'react'
import '../../index.css'
import {connect} from "react-redux";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";
import {bounceInDown} from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import {deductQuantity, updateTotal, zeroTotal} from "../../store/actions";

function Cart(props) {

    const history = useHistory();
    useEffect(()=>{
        props.resetTotal(0);
    },[])

    useEffect(() => {

        props.cart.map(item => {
            props.changeTotal(item.price * ((100 - item.discount) / 100));
        })
    }, []);
    const styles = {
        bounce: {
            animation: 'x 1.4s',
            animationName: Radium.keyframes(bounceInDown, 'bounce')
        }
    }
    let paymentElig = false;
    if(props.cartTotal>0){
        paymentElig = true;
    }

    return (
        <div>
            <StyleRoot>
            <table className="tableContainer" style={styles.bounce}>
                <tr>
                    <td>
                        <div>
                            {
                                props.cart.map(item =>
                                    <CartItem
                                        item={item}
                                    > </CartItem>
                                )
                            }
                        </div>

                    </td>

                    <td className="cardStick position-relative" >
                        <div className="card text-dark bg-light mb-3 mt-5   paymentCard">
                            <div className="card-header">Payment</div>
                            <div className="card-body">
                                <h5 className="card-title">Total : {props.cartTotal} LKR</h5>
                                <p className="card-text">We make deliveries around Island.Please make sure you give right details to get a faster delivery  </p>
                                {paymentElig?
                                    <button className=" btn btn-sm btn-outline-pink " onClick={()=>{
                                        props.deductQ(props.cart)
                                        history.push("/Payment")
                                    }}>Proceed to Payment</button> : <div style={{color: "red"}}> No Item in the Cart</div>
                                }

                            </div>
                        </div>
                    </td>



                </tr>
            </table>
        </StyleRoot>

        </div>

    )

}


const mapStateToProps = state => {

    return {
        cart: state.cart,
        selectedItemsArray: state.selectedItemsArray,
        cartTotal: state.cartTotal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTotal : (price) => dispatch(updateTotal(price)),
        resetTotal : (price) => dispatch(zeroTotal(price)),
        deductQ : (cart) => dispatch(deductQuantity(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
