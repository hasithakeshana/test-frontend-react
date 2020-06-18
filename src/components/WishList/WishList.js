import React, { Component } from "react";
import '../../index.css'
import {connect} from "react-redux";
import WishListItem from "./WishListItem";
import * as reduxActions from '../../common/actions';

class WishList extends Component {
    constructor(props){
        super(props);
    }
    state = {
        id : '5eb68be4a37f442020387c0e'
    }

    componentDidMount(){

        const { getWishList , wishList, user} = this.props;

        //console.log('component did mount user',user);
        
        getWishList(user);
      
        //console.log('wishList',wishList);
      }

    //console.log(props)

    render(){
    const { wishList} = this.props;
  //console.log('wwwwwwwwwwwwww',wishList);

  const lists = Array.from(wishList);
  //console.log('lists',lists);

        return(

            <div className="tableContainer" style={{marginLeft:"8%"}}>
                <table className="table" style={{width: "100%"}}>
                    <thead className="table">
                    <tr>
                        <th scope="col" style={{width:"200px"}}>Product</th>
                        <th scope="col" className="tableDataQ">Name</th>
                        <th scope="col" className="tableDataQ">Category</th>
                        <th scope="col" className="tableDataQ">Unit Price</th>
                        <th scope="col" className="tableDataQ">Add To Cart</th>
                        <th scope="col" className="tableDataQ">Remove</th>
                    </tr>
                    </thead>
                </table>
     
                {
                    lists.map(item=>
                        <WishListItem
                            item={item}
                        > </WishListItem>
                    )
                }
     
     
                    <div  ><p className="total mt-3">Total : {this.props.total} LKR</p>
                      
                    </div>
     
     
                </div>
     
         );

    }
    

}


const mapStateToProps = state => {

    return {
        cart: state.cart,
        selectedItemsArray : state.selectedItemsArray,
        cartTotal : state.cartTotal,
        wishList : state.auth.wishList,
        user : state.auth.userId,
        total : state.auth.wishListTotal
    }
}

const mapDispachToProps = (dispach) => {

    return {
     
      removeItemFromWishList : (userId,wishListOredrId) => dispach(reduxActions.RemoveWishListItemAction(userId,wishListOredrId)) ,
      getWishList : (userId) => dispach(reduxActions.GetUserWishListAction(userId)),
      addToCartFromWishList : (data) => dispach(reduxActions.AddToCartFromWishListAction(data)),
  
  
    }
  }

export default connect(mapStateToProps, mapDispachToProps)(WishList)
