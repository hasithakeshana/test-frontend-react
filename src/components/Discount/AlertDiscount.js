import React from "react";
import {connect} from "react-redux";
import {search_product, update_product} from "../../store/actions";

function AlertDiscount(props){

   if(props.status === 200){

       return(
           <div className="alert alert-warning alert-dismissible fade show" role="alert">
               <strong>Update Success!</strong>
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
               </button>
           </div>
       )
   }else if(props.status === 500){
       return(
           <div className="alert alert-warning alert-dismissible fade show" role="alert">
               <strong>Update Failed</strong>
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
               </button>
           </div>
       )
   }else{
       return (
           <div></div>
       )
   }



}
const mapStateToProps = state => {
    return{

        status : state.discountStatus
    }
}

const mapDispatchToProps = dispatch =>{
    return{

    }

}

export default  connect(mapStateToProps,mapDispatchToProps)(AlertDiscount)
