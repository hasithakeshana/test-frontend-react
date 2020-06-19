import React from 'react';
import {useHistory} from "react-router-dom";
import img1 from "../images/addManager.jpg"
import  cat from  "../images/cat.jpg"
import Grid from '@material-ui/core/Grid';
import Inputlabel from '@material-ui/core/InputLabel';

function AdminDash() {

    let history = useHistory();

    function redirect() {
        history.push("/AddManager");
    }

    return (

        <div align="center">
            <Grid>
                <img className="mt-5" width="200" height="200" src={img1} onClick={redirect}/>
                <Inputlabel> ADD MANAGER </Inputlabel>
            </Grid>
            <Grid>
                <img className="mt-5" width="200" height="200" src={cat} onClick={()=>history.push("/")}/>
                <Inputlabel> ADD Category </Inputlabel>
            </Grid>
        </div>
    );
}


export default (AdminDash);
