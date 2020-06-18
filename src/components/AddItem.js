import React, { useState, useEffect }  from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Collapse} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import { useFormik } from 'formik';
import * as Yup from "yup";



const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',   
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  section: {
    margin: theme.spacing(4, 0)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

const validationSchema = Yup.object({
  itemId: Yup.number("Please enter a number").required("Please fill the field"),
  title: Yup.string().required("Please fill the field"),
  category: Yup.string().required("Please select a category"),
  subCategory: Yup.string().required("Please select a sub category"),
  description: Yup.string().required("Please fill the field"),
  price: Yup.number("Please enter a valid price").min(1).required("Please fill the field"),
  discount: Yup.number("Please enter a valid discount").default(0).max(99),
  sRed: Yup.number("Please enter a valid quantity"),
  sBlack: Yup.number("Please enter a valid quantity"),
  sWhite: Yup.number("Please enter a valid quantity"),
  sGreen: Yup.number("Please enter a valid quantity"),
  sPink: Yup.number("Please enter a valid quantity"),
  sBlue: Yup.number("Please enter a valid quantity"),
  sMulti: Yup.number("Please enter a valid quantity"),
  mRed: Yup.number("Please enter a valid quantity"),
  mBlack: Yup.number("Please enter a valid quantity"),
  mWhite: Yup.number("Please enter a valid quantity"),
  mGreen: Yup.number("Please enter a valid quantity"),
  mPink: Yup.number("Please enter a valid quantity"),
  mBlue: Yup.number("Please enter a valid quantity"),
  mMulti: Yup.number("Please enter a valid quantity"),
  lRed: Yup.number("Please enter a valid quantity"),
  lBlack: Yup.number("Please enter a valid quantity"),
  lWhite: Yup.number("Please enter a valid quantity"),
  lGreen: Yup.number("Please enter a valid quantity"),
  lPink: Yup.number("Please enter a valid quantity"),
  lBlue: Yup.number("Please enter a valid quantity"),
  lMulti: Yup.number("Please enter a valid quantity"),
  xlRed: Yup.number("Please enter a valid quantity"),
  xlBlack: Yup.number("Please enter a valid quantity"),
  xlWhite: Yup.number("Please enter a valid quantity"),
  xlGreen: Yup.number("Please enter a valid quantity"),
  xlPink: Yup.number("Please enter a valid quantity"),
  xlBlue: Yup.number("Please enter a valid quantity"),
  xlMulti: Yup.number("Please enter a valid quantity"),
});


  

  




function AddItem({addItem}) {
  
    const [msg, setMsg] = useState(); 
    const [show, setShow] = useState(false);
    const [severity, setSeverity] = useState();

    const [productImage, setData] = useState({});
 
    const [data, setCat] = useState( []  );

    const [subs, setSub] = useState( []  );

    const [subCategory, setSubCat] = useState( []  );

    const [qty, setQty] = useState({  qtys:[] });

    const [small, setSmall] = useState(false);
    const [medium, setMedium] = useState(false);
    const [large, setLarge] = useState(false);
    const [xLarge, setXlarge] = useState(false);



    useEffect(async () => {
      const result = await axios.get('https://fashion-store-backend.herokuapp.com/api/getCategoriesToNav');
      const length = Object.keys(result.data[0]).length - 2 
      const arr = Object.keys(result.data[0]).slice(0, length)
      setCat(arr)
      setSub(result.data)
      }, []);    

    function onChangeSubCat(cat)  {

      const data1 = cat.target.value;
      var sub = subs[0]
      var subs1 = sub[data1]
      setSubCat(subs1)
    }

    const handleSmall = (event) => {
      setSmall(event.target.checked);
    };
    const handleMedium = (event) => {
      setMedium(event.target.checked);
    };
    const handleLarge = (event) => {
      setLarge(event.target.checked);
    };
    const handleXlarge = (event) => {
      setXlarge(event.target.checked);
    };

    //onChange function for images  
    function onChangeHandler(data)  {
      console.log(data[0])
      setData(data[0])
     console.log(productImage)
    }

    let history = useHistory();
    
    function redirect() {
      history.push("/AddItem");
    }

    //api route for adding  items
    const fetchItemData = async (item) =>{
    try{
    const data1 = item ;
    console.log('api data = ',data1);

      const correctData = item[""];
      let formData = new FormData();
      formData.append('itemId',item.itemId);
      formData.append('title',item.title);
      formData.append('description',item.description);
      formData.append('category',item.category);
      formData.append('subCategory',item.subCategory);
      formData.append('price',item.price);
      formData.append('discount',item.discount);
      formData.append('sRed', item.sRed);
      formData.append('sBlack', item.sBlack);
      formData.append('sWhite', item.sWhite);
      formData.append('sGreen', item.sGreen);
      formData.append('sPink', item.sPink);
      formData.append('sBlue', item.sBlue);
      formData.append('sMulti', item.sMulti);
      formData.append('mRed', item.mRed);
      formData.append('mBlack', item.mBlack);
      formData.append('mWhite', item.mWhite);
      formData.append('mGreen', item.mGreen);
      formData.append('mPink', item.mPink);
      formData.append('mBlue', item.mBlue);
      formData.append('mMulti', item.mMulti);
      formData.append('lRed', item.lRed);
      formData.append('lBlack', item.lBlack);
      formData.append('lWhite', item.lWhite);
      formData.append('lGreen', item.lGreen);
      formData.append('lPink', item.lPink);
      formData.append('lBlue', item.lBlue);
      formData.append('lMulti', item.lMulti);
      formData.append('xlRed', item.xlRed);
      formData.append('xlBlack', item.xlBlack);
      formData.append('xlWhite', item.xlWhite);
      formData.append('xlGreen', item.xlGreen);
      formData.append('xlPink', item.xlPink);
      formData.append('xlBlue', item.xlBlue);
      formData.append('xlMulti', item.xlMulti);
      formData.append('productImage', item.productImage);
      console.log(formData)

    const response = await axios.request({
        method: 'POST',
        url: "https://fashion-store-backend.herokuapp.com/api/items",
        headers: {
          'content-type' : 'multipart/form-data'
        },
        data: formData,
        
        }).then((res) => {
          if (res.data.code == "item"){
            setShow(true);
            setSeverity("success")
            setMsg(res.data.success);
            setTimeout(() => { redirect()}, 4000);  
          }
        });
    
      const resData = await response;
      

      return resData;
    }
    catch(e){
      console.log(e);
    }
  }

    
    
    const { handleSubmit, handleChange, values, errors } = useFormik({
      initialValues: {
        itemId: 0,
        title: "",
        category: "",
        description: "",
        size: "",
        color: "",
        price: 0,
        discount: 0,
        sRed: 0,
        sBlack: 0,
        sWhite: 0,
        sGreen: 0,
        sPink: 0,
        sBlue: 0,
        sMulti: 0,
        mRed: 0,
        mBlack: 0,
        mWhite: 0,
        mGreen: 0,
        mPink: 0,
        mBlue: 0,
        mMulti: 0,
        lRed: 0,
        lBlack: 0,
        lWhite: 0,
        lGreen: 0,
        lPink: 0,
        lBlue: 0,
        lMulti: 0,
        xlRed: 0,
        xlBlack: 0,
        xlWhite: 0,
        xlGreen: 0,
        xlPink: 0,
        xlBlue: 0,
        xlMulti: 0,
      },
      validationSchema,
      onSubmit(values) {
          console.log(values);
          const itemObject = {
            "itemId" : values.itemId,
            "title": values.title,
            "category": values.category,
            "subCategory": values.subCategory,
            "description": values.description,
            "size": values.size,
            "price": values.price,
            "discount": values.discount,
            "sRed": values.sRed,
            "sBlack": values.sBlack,
            "sWhite": values.sWhite,
            "sGreen": values.sGreen,
            "sPink": values.sPink,
            "sBlue": values.sBlue,
            "sMulti": values.sMulti,
            "mRed": values.mRed,
            "mBlack": values.mBlack,
            "mWhite": values.mWhite,
            "mGreen": values.mGreen,
            "mPink": values.mPink,
            "mBlue": values.mBlue,
            "mMulti": values.mMulti,
            "lRed": values.lRed,
            "lBlack": values.lBlack,
            "lWhite": values.lWhite,
            "lGreen": values.lGreen,
            "lPink": values.lPink,
            "lBlue": values.lBlue,
            "lMulti": values.lMulti,
            "xlRed": values.xlRed,
            "xlBlack": values.xlBlack,
            "xlWhite": values.xlWhite,
            "xlGreen": values.xlGreen,
            "xlPink": values.xlPink,
            "xlBlue": values.xlBlue,
            "xlMulti": values.xlMulti,
            "productImage" : productImage
          }  
          fetchItemData(itemObject) 
      }
    });
    
    const isDisabled = Object.keys(errors).some(x => errors[x]);


  const classes = useStyles();

  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Item
          </Typography>

        <form className={classes.form} id="itemForm" noValidate onSubmit={handleSubmit}>
        <Collapse in={show}>
          <Alert severity={severity} variant="filled" action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShow(false)
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>}>{msg}</Alert>
          </Collapse>
          <br></br>
          <Grid className={ classes.section} item xs={12}>
              <TextField
                name="itemId"
                variant="outlined"
                fullWidth
                id="itemId"
                label="Item Id"
                autoFocus
                onChange={handleChange}
              />{errors.itemId}
            </Grid>

            <Grid className={ classes.section} item xs={12}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                fullWidth
                id="title"
                label="Name"
                autoFocus
                onChange={handleChange}
              />{errors.title}
            </Grid>
            
            <Grid className={ classes.section} item xs={12}>
              <InputLabel id="category">Category of Item</InputLabel> 
              <Select 
                id="category"
                labelId="category"
                name="category"
                fullWidth
                autoFocus
                variant="outlined"
                onChange={handleChange}
                onClick={onChangeSubCat}
                >
                {data.map(item => (
                  <MenuItem
                  value={item}>
                  {item}
                  </MenuItem>
                ))} 
              </Select>
              {errors.category}
            </Grid>

            <Grid className={ classes.section} item xs={12}>
            <InputLabel id="subCategory">SubCategory of Item</InputLabel> 
              <Select 
                id="subCategory"
                labelId="subCategory"
                name="subCategory"
                fullWidth
                autoFocus
                variant="outlined"
                onChange={handleChange}>            
                {subCategory.map(item => (
                  <MenuItem 
                  value={item}>
                  {item}
                  </MenuItem>
                ))}
              </Select>
              {errors.subcategory}
            </Grid>
              
            
            <Grid className={ classes.section} item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="description"
                label="Brief Description of Item"
                name="description"
                autoComplete="description"
                onChange={handleChange}
              />
            </Grid>
            {errors.description}
            
            <Grid className={ classes.section} item xs={12}>
            <Grid item xs={12}>
            <InputLabel id="color">Size of Item</InputLabel> 
              <FormControlLabel
                control={<Checkbox  checked={small} onChange={handleSmall} color="primary" />}
                label="Small"
              />
              <FormControlLabel
                control={<Checkbox  checked={medium} onChange={handleMedium} color="primary" />}
                label="Medium"
              />
              <FormControlLabel
                control={<Checkbox  checked={large} onChange={handleLarge} color="primary" />}
                label="Large"
              />
              <FormControlLabel
                control={<Checkbox  checked={xLarge} onChange={handleXlarge} color="primary" />}
                label="Extra-Large"
              />
            </Grid>
            {errors.size}
            </Grid>

            <Grid container spacing={2}>
            <Grid className={ classes.section} item xs={3}>
            <InputLabel id="color" hidden = {!small}>Quantity of Item</InputLabel> 
            {errors.sRed}
            <TextField
              hidden ={!small}
              variant="outlined"
              name="sRed"
              label="red"
              id="red"
              onChange={handleChange}
            />
            <TextField
              hidden ={!small}
              variant="outlined"
              name="sBlack"
              label="black"
              id="black"
              onChange={handleChange}
            />
            <TextField
              hidden ={!small}
              variant="outlined"
              name="sWhite"
              label="white"
              id="white"
              onChange={handleChange}
            />
            <TextField
            hidden ={!small}
            variant="outlined"
            name="sGreen"
            label="green"
            id="green"
            onChange={handleChange}
            />
            <TextField
            hidden ={!small}
              variant="outlined"
              name="sPink"
              label="pink"
              id="pink"
              onChange={handleChange}
            />
            <TextField
            hidden ={!small}
              variant="outlined"
              name="sBlue"
              label="blue"
              id="blue"
              onChange={handleChange}
            />
            <TextField
            hidden ={!small}
              variant="outlined"
              name="sMulti"
              label="multi"
              id="multi"
              onChange={handleChange}
            />
            </Grid>
            <Grid className={ classes.section} item xs={3}>
            <InputLabel id="color" hidden = {!medium}>Quantity of Item</InputLabel> 
            {errors.qty}
            <TextField
              hidden ={!medium}
              variant="outlined"
              name="mRed"
              label="red"
              id="red"
              hi
              onChange={handleChange}
            />
            <TextField
              hidden ={!medium}
              variant="outlined"
              name="mBlack"
              label="black"
              id="black"
              onChange={handleChange}
            />
            <TextField
              hidden ={!medium}
              variant="outlined"
              name="mWhite"
              label="white"
              id="white"
              onChange={handleChange}
            />
            <TextField
            hidden ={!medium}
            variant="outlined"
            name="mGreen"
            label="green"
            id="green"
            onChange={handleChange}
            />
            <TextField
            hidden ={!medium}
              variant="outlined"
              name="mPink"
              label="pink"
              id="pink"
              onChange={handleChange}
            />
            <TextField
            hidden ={!medium}
              variant="outlined"
              name="mBlue"
              label="blue"
              id="blue"
              onChange={handleChange}
            />
            <TextField
            hidden ={!medium}
              variant="outlined"
              name="mMulti"
              label="multi"
              id="multi"
              onChange={handleChange}
            />
            </Grid>
            <Grid className={ classes.section} item xs={3}>
            <InputLabel id="color" hidden = {!large}>Quantity of Item</InputLabel> 
            {errors.qty}
            <TextField
              hidden ={!large}
              variant="outlined"
              name="lRed"
              label="red"
              id="red"
              hi
              onChange={handleChange}
            />
            <TextField
              hidden ={!large}
              variant="outlined"
              name="lBlack"
              label="black"
              id="black"
              onChange={handleChange}
            />
            <TextField
              hidden ={!large}
              variant="outlined"
              name="lWhite"
              label="white"
              id="white"
              onChange={handleChange}
            />
            <TextField
            hidden ={!large}
            variant="outlined"
            name="lGreen"
            label="green"
            id="green"
            onChange={handleChange}
            />
            <TextField
            hidden ={!large}
              variant="outlined"
              name="lPink"
              label="pink"
              id="pink"
              onChange={handleChange}
            />
            <TextField
            hidden ={!large}
              variant="outlined"
              name="lBlue"
              label="blue"
              id="blue"
              onChange={handleChange}
            />
            <TextField
            hidden ={!large}
              variant="outlined"
              name="lMulti"
              label="multi"
              id="multi"
              onChange={handleChange}
            />
            </Grid>
            <Grid className={ classes.section} item xs={3}>
            <InputLabel id="color" hidden = {!xLarge}>Quantity of Item</InputLabel> 
            {errors.qty}
            <TextField
              hidden ={!xLarge}
              variant="outlined"
              name="xlRed"
              label="red"
              id="red"
              hi
              onChange={handleChange}
            />
            <TextField
              hidden ={!xLarge}
              variant="outlined"
              name="xlBlack"
              label="black"
              id="black"
              onChange={handleChange}
            />
            <TextField
              hidden ={!xLarge}
              variant="outlined"
              name="xlWhite"
              label="white"
              id="white"
              onChange={handleChange}
            />
            <TextField
            hidden ={!xLarge}
            variant="outlined"
            name="xlGreen"
            label="green"
            id="green"
            onChange={handleChange}
            />
            <TextField
            hidden ={!xLarge}
              variant="outlined"
              name="xlPink"
              label="pink"
              id="pink"
              onChange={handleChange}
            />
            <TextField
            hidden ={!xLarge}
              variant="outlined"
              name="xlBlue"
              label="blue"
              id="blue"
              onChange={handleChange}
            />
            <TextField
            hidden ={!xLarge}
              variant="outlined"
              name="xlMulti"
              label="multi"
              id="multi"
              onChange={handleChange}
            />
            </Grid>
            </Grid>

            <Grid className={ classes.section} item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="price"
                label="Price"
                id="price"
                onChange={handleChange}
              />
            </Grid>
            {errors.price}

            <Grid className={ classes.section} item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="discount"
                label="Discount"
                id="discount"
                onChange={handleChange}
              />
            </Grid>
            {errors.discount}

            <Grid className={ classes.section} item xs={12}>
            <ImageUploader
              name="productImage"
              withIcon={true} 
              withPreview={true}
              singleImage={true}
              buttonText="Choose Image"
              label="Images of .jpg .png .jpeg formats are accepted"
              imgExtension={[".jpg", ".png", ".jpeg"]}
              maxFileSize={1048576}
              onChange = {onChangeHandler}
            />
            </Grid>  
          
          <Button
            type="reset"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isDisabled}
            onClick={handleSubmit}>
            Add Item
          </Button>

        </form>
      </div>
    </Grid>
  </Grid>
  );
}
 

export default  (AddItem);
