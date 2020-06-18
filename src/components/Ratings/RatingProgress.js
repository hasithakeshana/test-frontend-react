import React from 'react'
import '../Ratings/ratings.css';
import { Progress } from 'reactstrap';


function RatingProgress(props) {

  const {progress,avgRating,countRatings} = props;

    return (
        <div>
           

            <button type="button" class="btn btn-primary">
  Reviews <span class="badge badge-light">{countRatings.noOfRatings}</span>
</button>

    <p>{avgRating.avg} average based on {countRatings.noOfRatings} reviews</p>

<div class="row">
  <div class="side">
    <div>5 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
     
    <Progress multi>
     <Progress bar animated color="warning"  value={progress.five} max={100}>{progress.five}</Progress>
      
    </Progress>
   

  
    </div>
  </div>
  <div class="side right">
    <div>{progress.five}</div>
  </div>
  <div class="side">
    <div>4 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      
    <Progress multi>
      <Progress bar animated color="danger" value={progress.four} max={100}>{progress.four}</Progress>
      
    </Progress>

    </div>
  </div>
  <div class="side right">
    <div>{progress.four}</div>
  </div>
  <div class="side">
    <div>3 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
    
    <Progress multi>
    <Progress bar animated color="info" value={progress.three} max={100}>{progress.three}</Progress>
      
    </Progress>


    </div>
  </div>
  <div class="side right">
    <div>{progress.three}</div>
  </div>
  <div class="side">
    <div>2 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
    
<Progress multi>
<Progress bar animated color="success" value={progress.two} max={100}>{progress.two}</Progress>
</Progress>


    </div>
  </div>
  <div class="side right">
    <div>{progress.two}</div>
  </div>
  <div class="side">
    <div>1 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
     

    <Progress multi>
       <Progress bar animated  value={progress.one} max={100}>{progress.one}</Progress>
      
    </Progress>
    </div>
  </div>
  <div class="side right">
    <div>{progress.one}</div>
  </div>
</div>

            
        </div>
    )
}

export default RatingProgress;
