import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import {setCart} from "../store/actions";


function HomePage(props) {

    useEffect(()=>{
            props.set_cart()

    },[])
    return (
        <div>
            <Header/>
        <NavigationBar> </NavigationBar>
        </div>

    )

}

const mapStateToProps = state => {
    return {
        state : state,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        set_cart : () => dispatch(setCart()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
