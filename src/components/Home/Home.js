import React from "react";
import icon1 from './icon/icon-1.png'
import icon2 from './icon/icon-2.png'
import icon3 from './icon/icon-3.png'
import banner1 from './icon/banner-1.jpg'
import banner2 from './icon/banner-2.jpg'
import banner3 from './icon/banner-3.jpg'
import insta1 from './icon/insta-1.jpg'
import insta2 from './icon/insta-2.jpg'
import insta3 from './icon/insta-3.jpg'
import insta4 from './icon/insta-4.jpg'
import insta5 from './icon/insta-5.jpg'
import insta6 from './icon/insta-6.jpg'
import latest1 from './icon/latest-1.jpg'
import latest2 from './icon/latest-2.jpg'
import latest3 from './icon/latest-3.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import {fadeInRightBig,fadeIn,slideInRight} from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import "animate.css/animate.min.css";

import './style.css'
import image1 from "../../images/ImageSlider/imageSlider1.jpg";
import image2 from "../../images/ImageSlider/imageSlider2.jpg";
import SmallCategories from "./SmallCategories";
import Slider from "./Slider";

function Home() {
    const styles = {
        bounce: {
            animation: 'x 4s',
            animationName: Radium.keyframes(fadeIn , 'bounce')
        }
    }

    const style2 = {
        bounce: {
            animation: 'x 2s',
            animationName: Radium.keyframes(fadeInRightBig, 'bounce')
        }
    }
    return (
        <div>

            <ScrollAnimation animateIn="fadeIn"animateOut='fadeOut'>
                <div className="benefit-items  mt-5" style={styles.bounce}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-benefit">
                                <div className="sb-icon">
                                    <img src={icon1} alt=""/>
                                </div>
                                <div className="sb-text">
                                    <h6>Free Shipping</h6>
                                    <p>For all Products</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-benefit">
                                <div className="sb-icon">
                                    <img src={icon2} alt=""/>
                                </div>
                                <div className="sb-text">
                                    <h6>Delivery On Time</h6>
                                    <p>We Promise You!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-benefit">
                                <div className="sb-icon">
                                    <img src={icon3} alt=""/>
                                </div>
                                <div className="sb-text">
                                    <h6>Secure Payment</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>


            <ScrollAnimation animateIn="slideInRight"animateOut='fadeOut'>
            <div class="banner-section spad" style={style2.bounce}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src={banner1} alt=""/>
                                <div class="inner-text">
                                    <h4>Men’s</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src={banner2} alt=""/>
                                <div class="inner-text">
                                    <h4>Women’s</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="single-banner">
                                <img src={banner3} alt=""/>
                                <div class="inner-text">
                                    <h4>Kid’s</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn"animateOut='fadeOut'>
            <SmallCategories/>
            </ScrollAnimation>
            <div className="mt-3">
                <Slider/>
            </div>

          {/*  <center>
                <div>
                    <div className="imageSlider">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={image2} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={image1} alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={image2} alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"> </span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"> </span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </center>*/}
            <ScrollAnimation animateIn="fadeIn"animateOut='fadeIn'>
            <div className="instagram-photo mt-5">
                <div className="insta-item set-bg">
                    <img src={insta1} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta2} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta3} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta4} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta5} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta6} alt=""/>
                </div>

            </div>
            <div className="instagram-photo mb-5">
                <div className="insta-item set-bg">
                    <img src={insta5} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta4} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta2} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta1} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta3} alt=""/>
                </div>
                <div className="insta-item set-bg">
                    <img src={insta1} alt=""/>
                </div>

            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight"animateOut='bounceOutLeft'>
            <section className="latest-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Few Fashion Posts</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src={latest1} alt=""/>
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item"><i className="fab fa-twitter-square"></i>
                                            May 4,2019
                                        </div>
                                    </div>
                                    <a href="#">
                                        <h4>The Best Street Style From London Fashion Week</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src={latest2} alt=""/>
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fab fa-twitter-square"></i>
                                            May 4,2019
                                        </div>

                                    </div>
                                    <a href="#">
                                        <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src={latest3} alt=""/>
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fab fa-twitter-square"></i>
                                            May 4,2019
                                        </div>
                                    </div>
                                    <a href="#">
                                        <h4>How To Brighten Your Wardrobe With A Dash</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                                        quaerat </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </ScrollAnimation>
        </div>
    )


}

export default Home
