import React from 'react';
import {useHistory} from "react-router-dom";
import img1 from "../images/addManager.jpg"
import  cat from  "../images/cat.jpg"
import Grid from '@material-ui/core/Grid';
import Inputlabel from '@material-ui/core/InputLabel';
import * as reduxActions from "../common/actions";
import {connect} from "react-redux";

function AdminDash(props) {

    let history = useHistory();

    function redirect() {
        history.push("/AddManager");
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <button className="btn btn-outline-success" type="button" onClick={()=>{props.logOut();history.push("/login")}}>Logout</button>
                </form>
            </nav>

        <div align="center">
            <Grid>
                <img className="mt-5" width="200" height="200" src={img1} onClick={()=>history.push('/addManager')}/>
                <Inputlabel> ADD MANAGER </Inputlabel>
            </Grid>
            <Grid>
                <img className="mt-5" width="200" height="200" src={cat} onClick={()=>history.push("/addCategory")}/>
                <Inputlabel> ADD Category </Inputlabel>
            </Grid>
        </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(reduxActions.logoutAction())
    }
}

export default connect( mapStateToProps,mapDispatchToProps)(AdminDash)
