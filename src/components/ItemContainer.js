    import React, {useState,useEffect} from "react";
import {MDBRow} from "mdbreact";
import '../index.css'
import Item from './Item';
import {connect} from "react-redux";

import * as reduxActions from '../common/actions';

function ItemContainer(props) {

    useEffect(() => {

      //  props.getAllProducts();
        
        },[])

        return (
        <div>


            <MDBRow className="itemContainer">

                {props.selectedItemsArray.length === 0 ?
                    <div>
                        <h5 className="noItems">Currently No Items Available </h5>
                    </div>
                    :
                    props.selectedItemsArray.map(item =>

                        <Item
                            key={item._id}
                            item ={item}
                            /*id={item.id}
                            images={item.images}
                            description={item.description}
                            price={item.price}
                            name={item.name}
                            selectedcategory={item.selectedMainCategory}
                            selectedSubCategory={item.selectedSubCategory}*/
                        > </Item>
                    )
                }
            </MDBRow>

        </div>
    )

}

const mapStateToProps = state => {
    return {
        items: state.items,
        selectedItemsArray : state.selectedItemsArray,
        cartCheck : state.cartCheck
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts : () => dispatch(reduxActions.GetAllProducts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
