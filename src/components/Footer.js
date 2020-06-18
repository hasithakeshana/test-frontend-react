import React from "react";
import '../index.css'
import {colors} from "@material-ui/core";
function Footer() {

    return(
        <div className="footer">


            <footer className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h5>Important Links</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#"></a></li>
                                        <li><a href="#">Payment Center</a></li>
                                        <li><a href="#">Contact Directory</a></li>
                                        <li><a href="#">Forms</a></li>
                                        <li><a href="#">News and Updates</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h5>Legal Bounds</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#">Website Tutorial</a></li>
                                        <li><a href="#">Accessibility</a></li>
                                        <li><a href="#">Disclaimer</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-pad">
                                    <h5>Visit Us</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="#">No.15 </a></li>
                                        <li><a href="#">Highlevel Rd</a></li>
                                        <li><a href="#">Polica Park</a></li>
                                        <li><a href="#">Colombo 05</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4 className="ml-4">Follow Us</h4>
                                <ul className="social-network social-circle">
                                    <li><a href="#" className="icoFacebook" title="Facebook"><i
                                        className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" className="icoLinkedin" title="Linkedin"><i
                                        className="fab fa-linkedin"></i></a></li>
                                    <li><a href="#" className="icoLinkedin" title="Linkedin"><i
                                        className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="icoLinkedin" title="Linkedin"><i
                                        className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 copy">
                                <p className="text-center">&copy; Copyright 2018 - Elephant SriLanka All rights
                                    reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>


        </div>


    )

}

export default Footer;
