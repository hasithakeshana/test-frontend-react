import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as reduxActions from '../../common/actions';
import queryString from 'query-string';
import ReactLoading from 'react-loading';
import '../../index.css';
import '../../imagegallery.scss'
import ImageGallery from 'react-image-gallery';
import {MDBBtn, MDBCol} from "mdbreact";
import {fadeInRight} from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import uuid from 'react-uuid'
import {
    add_to_total,
    cart_check_true,
    check_cart,
    update_cart,
    update_cart_count,
    update_cart_DB
} from "../../store/actions";
import CartModal from './CartModal';
import Ratings from "../Ratings/RatingsCom";
import fadd from "./icon/f-add-4.jpg"
import fadd2 from "./icon/f-add-5.jpg"
import  fadd3 from "./icon/f-add-6.jpg"



function ViewItem({getItemDetails,userId,item,history,updateCart,updateCartCount,addToCartDb,updateTotalInCart,checkCart,updateCartCheckTrue}) {

    let images = [];
    const[selectedColor,setselectedColor] = useState(" Pick a Color");
    const[selectedSize,setselectedSize] = useState(" Pick a Size");
    const[stockAvailable,setstockAvailable] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const[isColorSelected,setColorSelceted] = useState(false);
    const [displayAvailability,setDisplayAvailability] = useState("Click here Check Availability");
    const[disAvailable,setDisAvailable] = useState(true);

    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeInRight , 'bounce')
        }
    }
    const styles1 = {
        bounce: {
            animation: 'x 1.5s',
            animationName: Radium.keyframes(fadeInRight , 'bounce')
        }
    }
    const styles2 = {
        bounce: {
            animation: 'x 2.0s',
            animationName: Radium.keyframes(fadeInRight , 'bounce')
        }
    }
    const styles3 = {
        bounce: {
            animation: 'x 2.5s',
            animationName: Radium.keyframes(fadeInRight , 'bounce')
        }
    }

     useEffect(() => {
        const values = queryString.parse(window.location.search);
        getItemDetails(values.productId);
    }, [window.location]);

     const allIn =(item) => {
         if(selectedSize==="Small"){
             if(selectedColor==="Black"){
                 if(item.quantity.sQuantity.black>0){
                    setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="White"){
                 if(item.quantity.sQuantity.white>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Green"){
                 if(item.quantity.sQuantity.green>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Pink"){
                 if(item.quantity.sQuantity.pink>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Blue"){
                 if(item.quantity.sQuantity.blue>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else{
                 if(item.quantity.sQuantity.red>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }
         }else if(selectedSize==="Medium"){

             if(selectedColor==="Black"){
                 if(item.quantity.mQuantity.black>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="White"){
                 if(item.quantity.mQuantity.white>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Green"){
                 if(item.quantity.mQuantity.green>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Pink"){
                 if(item.quantity.mQuantity.pink>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Blue"){
                 if(item.quantity.mQuantity.blue>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else{
                 if(item.quantity.mQuantity.red>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }

         }else if(selectedSize==="Large"){
             if(selectedColor==="Black"){
                 if(item.quantity.lQuantity.black>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="White"){
                 if(item.quantity.lQuantity.white>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Green"){
                 if(item.quantity.lQuantity.green>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Pink"){
                 if(item.quantity.lQuantity.pink>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Blue"){
                 if(item.quantity.lQuantity.blue>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else{
                 if(item.quantity.lQuantity.red>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }
         }else {
             if(selectedColor==="Black"){
                 if(item.quantity.xlQuantity.black>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="White"){
                 if(item.quantity.xlQuantity.white>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Green"){
                 if(item.quantity.xlQuantity.green>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Pink"){
                 if(item.quantity.xlQuantity.pink>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else if(selectedColor==="Blue"){
                 if(item.quantity.xlQuantity.blue>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }else{
                 if(item.quantity.xlQuantity.red>0){
                     setstockAvailable(true);
                 }else{
                     setstockAvailable(false);
                     setDisplayAvailability("Sorry! Out of Stock  ");
                 }

             }

         }


        if (item.cartIn === false) {
          //  updateCart(item);
            updateTotalInCart(item);

        } else {
            updateCartCheckTrue();
            return (
                <diV></diV>
            )
        }
    }

        if (Object.entries(item).length !== 0) {        item.images.map(item=>{
           // setImages([...images,{original:item.productImage,thumbnail:item.productImage}])
            images.push({original:"https://fashion-store-backend.herokuapp.com/uploads/"+ item.productImage,thumbnail:"https://fashion-store-backend.herokuapp.com/uploads/"+ item.productImage})

        });
        return (

            <div className=" viewItemTable" >
            <div className="row">
            <div className="col">
                <table className="" >
                    <tr>
                        <td>
                            <div className="viewItemCarousel">
                                <ImageGallery items={images}/>
                            </div>
                        </td>
                        <td style={{width:"20%"}} >
                            <div className="card viewItemCard" style={{width: "auto"}}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    {disAvailable ?
                                        <div>
                                            <h6> Enjoy Your {item.discount}% OFF</h6>
                                            <h6 className="card-subtitle text-muted"> <strike>LKR {item.price}.00</strike> </h6>
                                            <h6>LKR  { item.price * (((100-item.discount)/100)) }.00</h6>
                                            <h6></h6>
                                        </div>

                                        :
                                        <h6 className="card-subtitle text-muted">Price : LKR {item.price}</h6>
                                    }

                                    <p className="card-text">{item.description}</p>
                                    <h6>Size</h6>
                                    <p><div className=" btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-outline-pink"  onClick={()=>{setselectedSize("Small");setstockAvailable(false);}}>S</button>
                                        <button type="button" className="btn btn-outline-pink" onClick={()=>{setselectedSize("Medium");setstockAvailable(false);}}>M</button>
                                        <button type="button" className="btn btn-outline-pink" onClick={()=>{setselectedSize("Large");setstockAvailable(false);}}>L</button>
                                        <button type="button" className="btn btn-outline-pink" onClick={()=>{setselectedSize("Extra Large");setstockAvailable(false);}}>XL</button>
                                    </div></p>
                                    <h6>Colour</h6>
                                    <p><div className=" btn-group-sm" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-black" onClick={()=>{setselectedColor("Black");setColorSelceted(true);setstockAvailable(false);}}/>
                                        <button type="button" className="btn btn-white"  onClick={()=>{setselectedColor("White");setColorSelceted(true);setstockAvailable(false);}}/>
                                        <button type="button" className="btn btn-green" onClick={()=>{setselectedColor("Green");setColorSelceted(true);setstockAvailable(false);}}/>
                                        <button type="button" className="btn btn-pink"  onClick={()=>{setselectedColor("Pink");setColorSelceted(true);setstockAvailable(false);}}/>
                                        <button type="button" className="btn btn-blue" onClick={()=>{setselectedColor("Blue");setColorSelceted(true);setstockAvailable(false);}}/>
                                        <button type="button" className="btn btn-red"  onClick={()=>{setselectedColor("Red");setColorSelceted(true);setstockAvailable(false);}}/>

                                    </div></p>
                                    <p>Free Shipping <i className="fas fa-shipping-fast"></i></p>
                                    <p>Island Wide Delivery <i className="fas fa-republican"></i></p>
                                    <hr/>
                                    <h6 > Size :    {selectedSize}</h6>
                                    <h6> Color : {selectedColor}</h6>

                                    <MDBBtn className=" fal fa-check-circle btn mb-1 mt-3  btn-pink"  onClick={()=>{
                                        allIn(item)
                                    }}/>

                                    {
                                        isColorSelected?
                                        stockAvailable?
                                            <MDBBtn className="fal fa-shopping-bag fa-2x mb-1 mt-3 btn btn-pink"  onClick={()=>{
                                                Object.assign(item,{selectedColor:selectedColor});
                                                Object.assign(item,{selectedSize:selectedSize});
                                                Object.assign(item,{uuid:uuid()});
                                            updateCart(item);
                                            updateCartCount();
                                            addToCartDb(item,userId);
                                            setModalShow(true);
                                        }}> </MDBBtn>

                                        : <p>{displayAvailability}</p>
                                            : console.log("color not selected")
                                    }

                                    <CartModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            </div>
                        </td>

                        <td className="viewItemHot" >

                            <section className="feature_add_area ml-5">

                                <StyleRoot>
                                <div className="container ml-5" style={styles.bounce} >
                                    <div className  ="row feature_inner">
                                        <div className="col-lg-6">
                                            <div className="f_add_item">
                                                <div className="f_add_img"><img className="img-fluid"
                                                                                src={fadd}
                                                                                alt=""/></div>
                                                <div className="f_add_hover">
                                                    <h4>Best Summer <br/>Collection</h4>
                                                    <a className="add_btn" href="#">Shop Now
                                                        <i className="arrow_right"></i></a>
                                                </div>
                                                <div className="sale">Sale</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </StyleRoot>
                                <StyleRoot>
                                <div className="container mt-2 ml-5" style={styles1.bounce}>
                                    <div className="row feature_inner">
                                        <div className="col-lg-6">
                                            <div className="f_add_item">
                                                <div className="f_add_img"><img className="img-fluid"
                                                                                src={fadd2}
                                                                                alt=""/></div>
                                                <div className="f_add_hover">
                                                    <h4>Best Summer <br/>Collection</h4>
                                                    <a className="add_btn" href="#">Shop Now
                                                        <i className="arrow_right"></i></a>
                                                </div>
                                                <div className="sale">Sale</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </StyleRoot>
                                <StyleRoot>
                                <div className="container mt-2 ml-5" style={styles2.bounce}>
                                    <div className="row feature_inner">
                                        <div className="col-lg-6">
                                            <div className="f_add_item">
                                                <div className="f_add_img"><img className="img-fluid"
                                                                                src={fadd3}
                                                                                alt=""/></div>
                                                <div className="f_add_hover">
                                                    <h4>Best Summer <br/>Collection</h4>
                                                    <a className="add_btn" href="#">Shop Now
                                                        <i className="arrow_right"></i></a>
                                                </div>
                                                <div className="sale">Sale</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </StyleRoot>
                                <StyleRoot>
                                <div className="container mt-2 ml-5" style={styles3.bounce}>
                                    <div className="row feature_inner">
                                        <div className="col-lg-6">
                                            <div className="f_add_item">
                                                <div className="f_add_img"><img className="img-fluid"
                                                                                src={fadd2}
                                                                                alt=""/></div>
                                                <div className="f_add_hover">
                                                    <h4>Best Summer <br/>Collection</h4>
                                                    <a className="add_btn" href="#">Shop Now
                                                        <i className="arrow_right"></i></a>
                                                </div>
                                                <div className="sale">Sale</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </StyleRoot>
                            </section>
                        </td>
                    </tr>
                </table>
                <div className="col">
                  <Ratings product={item._id} ></Ratings>
                </div>
            </div>

            </div>
        </div>
        )

    } else {

        return (
            <div align="center" className="mt-5">
            <ReactLoading type={"spinningBubbles"} color={"#e75480"} height={'10%'} width={'10%'}/>
            </div>
        );

    }

}const mapStateToProps = (state) => {    return {

        item: state.item.currentSelectedItem,
        userId : state.auth.userId,

    }
};const mapDispatchToProps = dispatch => {

    return {

        updateCart : (item)=>dispatch( update_cart(item)),
        addToCartDb : (item,userId) => dispatch(update_cart_DB(item,userId)),
        updateCartCount : () =>dispatch(update_cart_count()),
        updateTotalInCart : (item) => dispatch(add_to_total(item)),
        updateCartCheckTrue : () => dispatch(cart_check_true()),
        checkCart :(item) => dispatch(check_cart(item)),
        getItemDetails: (ProductId) => dispatch(reduxActions.GetViewItemAction(ProductId)),    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewItem);
