import React, {useEffect, useState} from 'react'
import '../../index.css'
import {connect} from "react-redux";
import {down_count_in_cart, remove_item, remove_item_DB, up_count_in_cart} from "../../store/actions";
import {MDBBtn} from "mdbreact";



function CartItem(props) {

    const {item} = props;

    return (
        <div>
            <table className="mt-2">
                <tr className="trDesign border border-white rounded p-2 shadow-lg p-3 mb-5 bg-white rounded">
                    <td className="tableDataPrice "><img className="border border-success mt-2 mb-2 rounded cartImage"
                                                         src={"https://fashion-store-backend.herokuapp.com/uploads/"+item.images[0].productImage}/>
                    </td>
                    <td className="cartDes">
                        <tr> Product ID : Men 2010 </tr>
                        <tr>Color :{item.selectedColor}</tr>
                        <tr>Size :{item.selectedSize}</tr>
                    </td>
                    <td>
                    </td>
                    <td className="cartPrice ">
                        <tr> Price was LKR {item.price}.00</tr>
                        <tr>You get {item.discount}% OFF</tr>
                        <tr> Price now LKR {(item.price*((100-item.discount)/100))}.00</tr>

                    </td>
                    <td>
                        <MDBBtn className="far fa-trash-alt btn btn-pink"
                       onClick={()=>{
                           props.remove(item);
                           props.removeDb(item,props.userId)

                       }}/>
                    </td>
                </tr>
            </table>


            {/*    <tr>
                <td className="tableDataPrice"><img  className="border border-success rounded" src={"http://localhost:4000/uploads/"+item.images[0].productImage} style={{width: "80px"}}/></td>
                <td className="tableDataQ">{props.item.price}LKR</td>
                <td className="tableDataTotal">
                    <i onClick={() => props.upCount(props.item.itemID)}
                       className="fas fa-plus-circle cartButton"/> {props.item.itemID}
                    <i onClick={() => props.downCount(props.item.itemID)}
                       className="fas fa-minus-circle cartButton"/></td>
                <td className="tableData">{props.item.price * props.item.quantityInCart}</td>
            </tr>
            <br/>*/}
        </div>


    )


}

const mapStateToProps = state => {
    return {

        state: state,
        userId : state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {

        upCount: (itemId) => dispatch(up_count_in_cart(itemId)),
        downCount: (itemId) => dispatch(down_count_in_cart(itemId)),
        remove :(item) => dispatch(remove_item(item)),
        removeDb : (item,userId) => dispatch(remove_item_DB(item,userId))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
