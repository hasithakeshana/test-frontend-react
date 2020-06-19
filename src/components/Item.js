import React, {useEffect, useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBCol, MDBMask, MDBView, MDBBtn } from "mdbreact";
import '../index.css'
import {connect} from "react-redux";
import {add_to_total, cart_check_true, check_cart, update_cart, update_cart_count} from "../store/actions";
import  * as ACTIONS from "../common/actions";
import { useHistory } from 'react-router-dom'
import WishListModal from '../components/WishList/WishListModal';
import AddToWishListModal from '../components/WishList/AddWishListModal';


function Item(props) {


    const history = useHistory();
    const handleClick = (item) => {

        history.push("/wishlist");
    }
    const [modalShow, setModalShow] = useState(false);
    const [addToWishModal, setAddToWishModal] = useState(false);
   /* const {id,images,description,price,name,selectedcategory,selectedSubCategory} = props;*/
    const{item,userId} = props;
    const [inCart , setIncart] = useState(false);
    //const [userId , setUserId] = useState("5eb68be4a37f442020387c0e");
    const[discountAvailable,setDiscountAvailable] = useState(false);
        const[discountedPrice,setDiscountedPrice] = useState(0.0);
    if(item.discount>0 && discountAvailable === false){
      setDiscountedPrice(item.price*((100-item.discount)/100.00));
        setDiscountAvailable(true);
    }
     const allIn =(item) => {
        if(item.cartIn===false) {
            props.updateCart(item);

        }else{
            props.updateCartCheckTrue();
            return (
                <diV> </diV>
            )
        }

    }
    // const addWish = (item) =>{

    //     props.addToWishList({userId,item});
    // }
    const addWish = (item) =>{

        if(props.isAuthenticated && props.role === "user")
        {
            props.addToWishList({userId,item});
            setAddToWishModal(true);

        }
        else{
            
            setModalShow(true);
        }

    }

    const checkUser = () =>{

        if(props.isAuthenticated && props.role === "user")
        {
            history.push("/viewItem?"+"productId="+item._id);
        }
        else{
            
            setModalShow(true);
        }

    }



    return (

        <MDBCol lg="3" md="1" className="" >
        
        <WishListModal
        show={modalShow}
        onHide={() => setModalShow(false)}
    />
    <AddToWishListModal
    show={addToWishModal}
    onHide={() => setAddToWishModal(false)}
/>
         <div onClick={()=> checkUser()} >
        <MDBView hover className="rounded z-depth-4 mb-3 item" waves>

              <img
                className="img-fluid"
                src= {"https://fashion-store-backend.herokuapp.com/uploads/"+item.images[0].productImage}
                alt=""
               
              />

          <MDBMask overlay="white-slight" />
        </MDBView>
         </div>
          <h6 className=" mb-2 itemIcons" >
              {item.name}
          </h6>
            {discountAvailable ? <h6 className=" mb-2 itemIcons" >
                Price :   LKR {item.price}.00
                <br/>
                    <span style={{color:"red"}}> {item.discount}% OFF</span>

            </h6> :
                <div>
               <h6 className=" mb-3 itemIcons" >
                        Price :   LKR {item.price}.00
               </h6>
                </div>
            }

            <button className="btn btn-light-pink fas fa-heart fa-2x itemIcons   mb-3"

            onClick={()=>{
                addWish(item)
             }}
            />
          {  <button className="btn btn-light-pink  fa-2x mb-3" onClick={()=>{

          }}><i className="fab fa-amazon-pay "></i></button>
          }
       </MDBCol>

    )
}
const mapStateToProps = state => {
    return {
        items: state.items,
        cart :state.cart,
        selectedItemsArray : state.selectedItemsArray,
        userId : state.auth.userId,
        isAuthenticated : state.auth.isAuthenticated,
        role : state.auth.role,
    }
}

const mapDispatchToProps = dispatch => {
    return {

        updateCart : (item)=>dispatch( update_cart(item)),
        updateCartCount : () =>dispatch(update_cart_count()),
        updateTotalInCart : (item) => dispatch(add_to_total(item)),
        updateCartCheckTrue : () => dispatch(cart_check_true()),
        checkCart :(item) => dispatch(check_cart(item)),
        addToWishList : (item) => dispatch(ACTIONS.itemAddToWishlist(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)

// itemAddToWishlist
