import React,{useEffect,useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

const PrivateRoueForStoreManager = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        jwt_decode(localStorage.getItem('jwtToken')).role === 'Manager'  ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
);

const mapStateToProps = state => {
    console.log('private router state',state.auth);
    return {

        //isAuthenticate : state.auth.isAuthenticated,
        
    }
};

export default connect(mapStateToProps)(PrivateRoueForStoreManager);
