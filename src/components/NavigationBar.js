import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    get_all_categories,
    update_buildSelectedItemsArray,
    update_selected_main_category,
    update_selected_sub_category
} from "../store/actions";
import {Link} from 'react-router-dom'


function NavigationBar(props) {


    useEffect(() => {

        props.getAllCategories();
        props.selectedItemsArray(props.state.items);


    }, []);

    function buildSelectedItemsArray(mainCategory, subCategory) {
        let selectedItemsArray = []
        props.state.items.map(item => {
            if ((item.mainCategory === mainCategory && item.subCategory === subCategory) || mainCategory === 'All' ) {
                selectedItemsArray.push(item)
            }

        });

        props.selectedItemsArray(selectedItemsArray);
    }

    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark navColor" >

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> n</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link to='/'>
                            <li className="nav-item ">
                                <a className="nav-link" >Home </a>
                            </li>
                        </Link>

                        <Link to="/products">
                        <li className="nav-item " onClick={()=>{

                            props.selectSub("All");
                            props.selectMain("All")
                            buildSelectedItemsArray("All", "All")

                        }}>
                            <a className="nav-link" href=" ">All Products </a>
                        </li>
                        </Link>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Men
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.menCategories.map(subCategory =>
                                    <Link to='/products'>
                                        <li className="dropdown-item"  onClick={() => {
                                            props.selectSub(subCategory);
                                            props.selectMain("Men")
                                            buildSelectedItemsArray("Men", subCategory)

                                        }} key={subCategory}>{subCategory}</li>
                                    </Link>
                                )}
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Women
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.womenCategories.map(subCategory =>
                                    <Link to='/products'>
                                        <li className="dropdown-item" onClick={() => {
                                            props.selectSub(subCategory);
                                            props.selectMain("Women");
                                            buildSelectedItemsArray("Women", subCategory);

                                        }} key={subCategory}>{subCategory}</li>
                                    </Link>
                                )}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kids
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.kidsCategories.map(subCategory =>
                                    <Link to='/products'>
                                        <li className="dropdown-item" onClick={() => {
                                            props.selectSub(subCategory);
                                            props.selectMain("Kids");
                                            buildSelectedItemsArray("Kids", subCategory);
                                        }} key={subCategory}>{subCategory}</li>
                                    </Link>
                                )}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sports
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.sportsCategories.map(subCategory =>
                                    <Link to='/products'>
                                        <li className="dropdown-item" onClick={() => {
                                            props.selectSub(subCategory);
                                            props.selectMain("Sports")
                                            buildSelectedItemsArray("Sports", subCategory)
                                        }} key={subCategory}>{subCategory}</li>
                                    </Link>
                                )}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Special discounts
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {props.state.discountCategories.map(subCategory =>
                                    <Link to='/products'>
                                        <li className="dropdown-item" onClick={() => {
                                            props.selectSub(subCategory);
                                            props.selectMain("SpecialDiscounts")
                                            buildSelectedItemsArray("SpecialDiscounts", subCategory)
                                        }} key={subCategory}>{subCategory}</li>
                                    </Link>
                                )}
                            </div>
                        </li>
                        <li className="nav-item nav-item mr-5">
                            <a className="nav-link active" href="/#">Contact Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    </form>
                </div>


            </nav>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        state: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        selectMain: (mainCategory) => dispatch(update_selected_main_category(mainCategory)),
        selectSub: (subCategory) => dispatch(update_selected_sub_category(subCategory)),
        selectedItemsArray: (selectedItemsArray) => dispatch(update_buildSelectedItemsArray(selectedItemsArray)),
        getAllCategories : () => dispatch(get_all_categories())

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
