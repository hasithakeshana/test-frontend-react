import React from 'react';
import Grid from '@material-ui/core/Grid';
import img1 from '../images/viewManager-04.jpeg';
import img2 from '../images/addCat.jpeg';
import img3 from '../images/additemdf.jpeg';
import img1hover from '../images/viewManager3.jpeg';
import img2hover from '../images/addCat-02.jpeg';
import img3hover from '../images/additemdf-04.jpeg';
import discount from '../images/DISCOUNT.png'
import {useHistory} from 'react-router-dom';
import HoverImage from "react-hover-image"

import { makeStyles } from '@material-ui/core/styles';
import {update_cart_count} from "../store/actions";
import * as reduxActions from "../common/actions";
import {connect} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 20,
    },
  }));

function ManagerDash(props) {

  let history = useHistory();
 

  function redirect() {
    history.push("/AddItem");
  }
  function addCategory() { history.push("/#"); }
  function viewManager() { history.push("/#"); }

  const classes = useStyles();

  return (
      <div>
          <nav className="navbar navbar-light bg-light">
              <form className="form-inline">
                  <button className="btn btn-outline-success" type="button" onClick={()=>{props.logOut();history.push("/login")}}>Logout</button>
              </form>
          </nav>
    <Grid container className={classes.root} spacing={2}>
      <Grid container className={classes.paper} justify="center" spacing={4}>
        <Grid item>
        <HoverImage src={discount} style={{cursor: "pointer", height: "200px", width: "200px"}} hoverSrc={discount} onClick={()=>{history.push("/addDiscount")}} />
        </Grid>
          <Grid item>
        <HoverImage src={img3} style={{cursor: "pointer", height: "200px"}} hoverSrc={img3hover} onClick={redirect} />
        </Grid>
      </Grid>
    </Grid>
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

export default connect( mapStateToProps,mapDispatchToProps)(ManagerDash)
