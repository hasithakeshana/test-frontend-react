import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {search_product, update_product} from "../../store/actions";
import AlertDiscount from "./AlertDiscount";
import '../../index.css'
import {useHistory} from 'react-router-dom';


function Discount(props) {


    const[productID,setProductID] = useState("");
    const[updateObject,setUpdateObject] = useState({ _id :"", discount : 0});

    useEffect(()=>{
        setUpdateObject({...updateObject,_id:props.product._id});
    },[props.product._id]);

    const history = useHistory();

    function validate() {

    if(updateObject.discount > 99){
            alert("Discount exceeds maximum limit");
        }else{
            props.updateProduct(updateObject);

        }
    }

return(
    <div>
        <button type="button" className="btn btn-primary btn-sm" onClick={()=>{history.push("/managerdash")}}>Go to Dashboard</button>
        <form className="discountForm">
            <input className="form-control" type="text" value={productID} onChange={event => setProductID(event.target.value)} placeholder="Enter Product ID to Search"/>
            <button type="button"  onClick={()=>props.searchProduct(productID)} className="btn btn-primary">Search</button>


            <div className="card mt-4" >
                    <div className="card-body">
                        <h6 className="card-title">Product ID : {props.product.itemID}</h6>
                        <h6 className="card-title">Product Name : {props.product.name}</h6>
                        <h6 className="card-title">Product Price : {props.product.price}</h6>
                        <h6 className="card-title">Product Discount : {props.product.discount}%</h6>
                        <h6> </h6>
                    </div>
            </div>

            <h5> <span className="badge badge-primary mt-5 ml-1">Add Discounts Here</span></h5>
            <input className="form-control" type="Number"  id="discountInput"   onChange={event => setUpdateObject({...updateObject,discount:event.target.value})} placeholder="Enter Or Change Discount Here"/>
            <button type="button"  onClick={()=>{
                validate()
            }} className="btn btn-primary">Update</button>

            <AlertDiscount/>
        </form>
    </div>

);
}

const mapStateToProps = state => {
    return{
        product : state.searchedProduct,
        status : state.discountStatus
    }
}

const mapDispatchToProps = dispatch =>{
    return{

        searchProduct : (productID)=> dispatch(search_product(productID)),
        updateProduct :(updateObject) => dispatch(update_product(updateObject))
     }

}

export default connect (mapStateToProps,mapDispatchToProps)(Discount)
