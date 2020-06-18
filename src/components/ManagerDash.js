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


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: 20,
    },
  }));

function ManagerDash() {

  let history = useHistory();
 

  function redirect() {
    history.push("/AddItem");
  }
  function addCategory() { history.push("/#"); }
  function viewManager() { history.push("/#"); }

  const classes = useStyles();

  return (
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
  );
}


export default  (ManagerDash);
