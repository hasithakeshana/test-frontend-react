import React , { useState , useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as reduxActions from '../../common/actions';

import {LoginAsStoreManager} from '../../common/apiRoutes';

import jwt_decode from 'jwt-decode';

import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/tCICLJ5ktBE/1600x900)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function StoreManagerLogin({loginUser,loginSuccess}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLog, setIsLog] = useState("");
  


  const history = useHistory();

  useEffect(() => {
  
   
  }, []);

 
  const classes = useStyles();

  const handleSubmit = (evt) => {
    evt.preventDefault();
   

}

const login = async(email,password) => {
  
 
 const res = await LoginAsStoreManager({email,password});
 console.log('res in login AS Store Manager',res);

 if (res.isValidLogin) { 

        localStorage.setItem('jwtToken',res.token);
  
        const decodedUser = jwt_decode(res.token);
        console.log('decodeUser login',decodedUser);

        setMessage(res.message);
        setIsLog(true);

        loginSuccess(decodedUser);

        history.push("/ManagerDash"); // redirects to storemanager dashboard
        
  
      
  }
      else{
     

      setMessage(res.message);
      setIsLog(false);
      setEmail('');
      setPassword('');
      console.log('invalid user');

        
      }
}

const loginAsAdmin = () => {

  history.push("/adminLogin");

}


  return (

 

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          <h1>StoreManager Login</h1>
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
           

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {  () => login(email,password)  }
            >
              Sign In
            </Button>

            <p style={{color: "red"}}>{message}</p> 

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            <Button
            type="submit"
           
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {  () => loginAsAdmin()  }
          >
            Login as Admin
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
         

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );


 
}

StoreManagerLogin.propTypes = {
  
  loginUser: PropTypes.func,
};



const mapStateToProps = (state)=> {

  console.log('state',state);
  return{
    state : state
  }
};


const mapDispachToProps = (dispach) => {

  return {
    loginUser : (email,password) => dispach(reduxActions.loginAction({email,password})),
    loginSuccess : (decodedUser) => dispach(reduxActions.loginSuccessAction(decodedUser))
  }
}

export default connect(mapStateToProps,mapDispachToProps) (StoreManagerLogin);
