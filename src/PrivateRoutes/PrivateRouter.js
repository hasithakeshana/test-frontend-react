import React,{useEffect,useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import * as reduxActions from '../common/actions';

// const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => (
  
//   <Route
//     {...rest}  // correct but refresh not woks
//     render={props =>
//         isAuthenticate  ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
//  );

 const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => (
  
    <Route
      {...rest}
      render={props =>
        jwt_decode(localStorage.getItem('jwtToken')).role === 'user'  ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
     />
);


// const PrivateRoute = ({ component: Component, isAuthenticate,...rest }) => {
    
//   return (
//       <Route {...rest} render={props =>
//         isAuthenticate ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to="/login" />
//         )}
//         />
//       );
// };



const mapStateToProps = state => {
    return {

        isAuthenticate : state.auth.isAuthenticated,
        
    }
};

const mapDispatchToProps = dispatch => {
    return {
       
      getAllProducts : () => dispatch(reduxActions.GetAllProducts()),
      getWishList : (userId) => dispatch(reduxActions.GetUserWishListAction(userId)),
      setUserDetails : (user) => dispatch(reduxActions.loginSuccessAction(user))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute);
