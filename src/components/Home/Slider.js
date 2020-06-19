import React from "react";
import "./style.css"
import model3 from './icon/model_6.png'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {fadeInRightBig,fadeIn} from 'react-animations';

function Slider() {
    return (
       <div>
        <ScrollAnimation animateIn="fadeIn"animateOut='fadeOut'>
           <div className="site-blocks-cover" data-aos="fade">
               <div className="container">
                   <div className="row">
                       <div className="col-md-6 ml-auto order-md-2 align-self-start">
                           <div className="site-block-cover-content">
                               <h2 className="sub-title">#New Summer Collection 2019</h2>
                               <h1>Arrivals Sales</h1>
                               <p><a href="#" className="btn btn-dark rounded-0">Shop Now</a></p>
                           </div>
                       </div>
                       <div className="col-md-6 order-1 align-self-end">
                           <img src={model3} alt="Image" className="img-fluid"/>
                       </div>
                   </div>
               </div>
           </div>
        </ScrollAnimation>


       </div>
    )
}

export default Slider
