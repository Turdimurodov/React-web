import React from 'react';
import './Footer.css';
import img from "../../Images/footerimg.png";

class Footer extends React.Component {
    render() {
        return <div className="footer py-5">
            <div className="container">
                <div className="row">

                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <h3 className="footer__title">Framer</h3>
                        <ul className="footer__menu">
                            <li className="footer__item"><a className="footer__link" href="#">Pricing</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Enterprise</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Education</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Updates</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Beta</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <h3 className="footer__title">Features</h3>
                        <ul className="footer__menu">
                            <li className="footer__item"><a className="footer__link" href="#">Overview</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Design</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Code</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Collaborate</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <h3 className="footer__title">Get Started</h3>
                        <ul className="footer__menu">
                            <li className="footer__item"><a className="footer__link" href="#">Tutorials</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Resources</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Guides</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Examples</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Docs</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <h3 className="footer__title">About</h3>
                        <ul className="footer__menu">
                            <li className="footer__item"><a className="footer__link" href="#">Pricing</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Enterprise</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Education</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Updates</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Beta</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <h3 className="footer__title">Platforms</h3>
                        <ul className="footer__menu">
                            <li className="footer__item"><a className="footer__link" href="#">Pricing</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Enterprise</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Education</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Updates</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Beta</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mb-4">
                        <h3 className="footer__title">UI Kits</h3>
                        <ul className="footer__menu">
                            <li className="footer__item"><a className="footer__link" href="#">Pricing</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Enterprise</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Education</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Updates</a></li>
                            <li className="footer__item"><a className="footer__link" href="#">Beta</a></li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        <img src={img} alt="" />
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Footer;