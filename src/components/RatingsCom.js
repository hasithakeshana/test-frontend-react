import React,{ useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import * as reduxActions from '../common/actions';
//import Particles from 'react-particles-js';
import RatingList from './RatingsList';
import RatingProgress from './RatingProgress';
// import ParticlesBg from "particles-bg";

import Moment from 'react-moment';
import Button from '@material-ui/core/Button';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});



//npm install @material-ui/lab
const handleSubmit = (evt) => {
  evt.preventDefault();
 
 
  
}




export function RatingsCom({addRating,getRatings,ratingList,userRole,progressRating,avgRating,countRatings}) {

const [itemId, setItemId] = useState("5eb68ab6a37f442020387c0a"); // get from the store
//5eb68ab6a37f442020387c0a
const [userName, setUserName] = useState("nm"); // get from the store
const [userReview, setUserReview] = useState("");
const [modifiedArray, setModifiedArray] = useState("");

useEffect(() => {

getRatings(itemId);

},[])

useEffect(() => {

change(userName,ratingList);
  
},[ratingList])


console.log('userRole',progressRating);





const [comment, setComment] = useState("");

const [userAlreadyRated, setuserAlreadyRated] = useState(false);

//const rated = userRated(userName,returnedArray);

/*


todo - first user has no ratings then he add 2 ratings view - need to correct



*/


const [value, setValue] = React.useState(0);

  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const validate = (itemId,userName,value,comment) =>
  {
    const date = new Date();
    console.log(date);
    addRating(itemId,userName,value,comment,date);
  }
 

  function  change(userName,returnedArray){

    console.log('detaaaaaaaaaaaaaaaaaaaaa',userName,returnedArray);

    const returnedArrays = Array.from(returnedArray);
console.log('returnedArray',returnedArray);

    
     let isRated = false;
     for(const value of returnedArrays) {
       if(value.userName === userName)
       {
         isRated = true;
         setuserAlreadyRated(true);
         setUserReview(value);
         break;
       }
     }

   const someArray = returnedArrays.filter(x => x.userName !== userName);

     console.log('somearry',someArray);
     setModifiedArray(someArray);
   
}

console.log('isRated,user',userAlreadyRated,userReview);
  
return (
      
     
        <div>

<RatingProgress 
    progress={progressRating}
    avgRating={avgRating}
    countRatings={countRatings}
></RatingProgress>


         

    {

userAlreadyRated === true ? 

<div class="alert alert-danger" role="alert">
<Rating name="size-small" defaultValue={userReview.rate} size="small" readOnly={true} />
<h5 class="alert-heading">{userReview.userName} </h5>
       <p><Moment format="YYYY/MM/DD">{userReview.date}</Moment></p>
<hr></hr>
       <p class="mb-0">{ userReview.comment} </p>

       
</div>

:  <form onSubmit={handleSubmit}>

<Rating

 name="hover-feedback"
value={value}
precision={0.5}
onChange={(event, newValue) => {
  setValue(newValue);
            }}
onChangeActive={(event, newHover) => {
setHover(newHover);
    }}
    size="large"

  />

  

{value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}

<textarea class="form-control" onChange={e => setComment(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>


<br></br>

<button type="button"  onClick = {  () => validate(itemId,userName,value,comment)  } class="btn btn-outline-success">Rate Us!</button>

<div className={classes.root}>
</div>
</form>


      }
  

<RatingList 
list={ratingList}
newList={modifiedArray}
 userName={userName} 
 ></RatingList>
  



    </div>
    

    );
}

RatingsCom.propTypes = {
  
  addRating: PropTypes.func,
  getRatings: PropTypes.func,
  ratingList:PropTypes.object,
//  userRole:PropTypes.object,
  progressRating: PropTypes.object,
  avgRating:PropTypes.object,
  countRatings:PropTypes.object
  
};



const mapStateToProps = (state)=> {

  //console.log('ratings',ratingList);
  return{
   
    ratingList : state.item.itemRatingDetails.ratingList,
    userRole : state.auth.currentUser.role,
    progressRating : state.item.itemRatingDetails.ratingCount,
    avgRating : state.item.itemRatingDetails.avgRating, 
    countRatings : state.item.itemRatingDetails.countRatings
    
  }
};


const mapDispachToProps = (dispach) => {

  return {
   
    addRating : (itemId,userName,rate,comment,date) => dispach(reduxActions.AddRatingAction({itemId,userName,rate,comment,date})) ,
    getRatings : (ProductId) => dispach(reduxActions.GetRatingAction(ProductId)),


  }
}

export default connect(mapStateToProps,mapDispachToProps) (RatingsCom);
