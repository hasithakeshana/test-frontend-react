import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import axios from "axios";
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';



import { useFormik } from 'formik';
import * as Yup from "yup";
import { Collapse, IconButton } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

const validationSchema = Yup.object({
  category: Yup.string().required("Please fill the field"),
  subCategory: Yup.string().required("Please fill the field"),
});



function AddCategory() {

  const[msg, setMsg] = useState();
  const[show, setShow] = useState(false);
  const[severity,setSeverity] = useState();
  

  let history = useHistory();

  function redirect() { history.push("/login"); }

  const fetchData = async (manager) =>{
 
    try{
    
    const data = manager ;
    
       const correctData = manager["manager"];
    
    
    const response = await axios.request({
        method: 'POST',
        url: "https://fashion-store-backend.herokuapp.com/api/addCategories",
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify(data),
        
        }).then((res) => {
    
        const result =  res.data;
        console.log(result);

       if (res.data.ok == 1){
        setMsg("Category Added Successfully");
        setShow(true);
        setSeverity("success");
      }
        //return result;
        });
    
      const resData = await response;
       
      console.log('responsee api',resData);
       return resData;
       
    
    
    }
    catch(e){
      console.log(e);
    }
    
    
    }


  

    const { handleSubmit, handleChange, values, errors } = useFormik({
      initialValues: {
        category: "",
        subCategory: "",
      },
      validationSchema,
      onSubmit(values) {
          const catObject = {
            "category": values.category,
            "subCategory": values.subCategory,
          }
          fetchData(catObject);
        
      }
    });

    
    
    const isDisabled = Object.keys(errors).some(x => errors[x]);


  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Category
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
         
         <Collapse in={show}>

           <Alert severity={severity} variant="filled" action={
             <IconButton 
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  
                  setShow(false);

                }}><CloseIcon fontSize="inherit"/>
                </IconButton>}>{msg}</Alert>
           


         </Collapse>
          
          
          <br></br>

          <Grid className={ classes.section} item xs={12}>
            <InputLabel id="category">Category of Item</InputLabel> 
              <Select 
                id="category"
                labelId="category"
                name="category"
                fullWidth
                autoFocus
                variant="outlined"
                onChange={handleChange}>            
                  <MenuItem value="menCategories">Men</MenuItem>
                  <MenuItem value="womenCategories">Women</MenuItem>
                  <MenuItem value="kidsCategories">Kids</MenuItem>
                  <MenuItem value="sportsCategories">Sports</MenuItem>
                  <MenuItem value="discountCategories">Discount</MenuItem>
              </Select>
              {errors.category}
            </Grid>

            <br/>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="subCategory"
                label="Sub Category"
                name="subCategory"
                onChange={handleChange}
              />{errors.subCategory}
            </Grid>
            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isDisabled}
            onClick = {  handleSubmit  }>
            Add Category
          </Button>
        </form>
      </div>

      <Box mt={5}>
      </Box>
    </Container>
  );
}



  export default  (AddCategory);