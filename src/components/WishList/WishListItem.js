import React, { Component } from "react";
import '../../index.css'
import {connect} from "react-redux";
import {down_count_in_cart, up_count_in_cart} from "../../store/actions";
import * as reduxActions from '../../common/actions';
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, 

    MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import { useHistory } from 'react-router-dom';


function WishListItem(props){

    const { removeItemFromWishList , user} = props;

    const history = useHistory();
   

   

      const addToCart = (productID,wishListItemId) => {
        
      // console.log('add to cart wishlist',productID);
       removeItemFromWishList(user,wishListItemId);
       history.push("/viewItem?"+"productId="+productID);
      }
    

       const handleDelete = (id) => { 

       // console.log('id',id);
        
        
       
        removeItemFromWishList(user,id);
       }

    
        return (
            <div>
                <tr>
                    <td className="tableDataPrice"><img  className="border border-success rounded" src={"https://fashion-store-backend.herokuapp.com/uploads/"+props.item.image} style={{width: "150px"}}/></td>
                    <td className="tableDataQ">{props.item.itemName}</td>
                    <td className="tableDataQ">{props.item.mainCategory}</td>
                    <td className="tableDataQ">{props.item.price}</td>
                    <td className="tableDataQ">  <MDBBtn className=" fal fa-shopping-cart btn mb-1 mt-3  btn-pink"
                    
                    onClick={()=> addToCart(props.item.itemID,props.item._id)}
                    />
                    
                    </td>
                    <td className="tableDataQ"> <MDBBtn className=" fal fa-trash btn mb-1 mt-3  btn-pink" 
                    
                    onClick={() => handleDelete

                        (props.item._id)}
                    />
                            
                    </td>
                   
                </tr>
                <br/>
            </div>
    
    
        );
    

   


}

const mapStateToProps = state => {
    return {

        user : state.auth.userId
        
    }
};

const mapDispachToProps = (dispach) => {

    return {
     
      removeItemFromWishList : (userId,wishListOredrId) => dispach(reduxActions.RemoveWishListItemAction(userId,wishListOredrId)) ,
      getWishList : (userId) => dispach(reduxActions.GetUserWishListAction(userId)),
      addToCartFromWishList : (data) => dispach(reduxActions.AddToCartFromWishListAction(data)),
  
  
    }
  }

export default connect(mapStateToProps, mapDispachToProps)(WishListItem)
