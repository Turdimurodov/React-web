import React from 'react';
import './About.css';
import Snap from '../../Images/snap.png';
import Xero from '../../Images/xero.png';
import Ali from '../../Images/ali.png';

class About extends React.Component {
    render() {
        return <div className="about d-flex justify-content-center mt-5">

            <div className="w-100 d-flex justify-content-center">
                <div className="w-100">
                    <div className="row w-100 justify-content-center m-0">
                        <div className="col-md-6 col__left d-flex justify-content-center align-items-center">
                            <div className="about__card w-50 text-center">
                                <h3>Why Framer</h3>
                                <p>Easily bring designs to life with code, then share them with teammates.</p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-light me-1">See Features</button>
                                    <button className="btn btn-primary ms-1">Get started</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col__right d-flex justify-content-center align-items-center">
                            <div className="about__card w-50 text-center text-white">
                                <h3>Subscribe Today</h3>
                                <p>Get 20% off when you choose our yearly subscription plan. </p>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-dark">View pricing</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center w-100 m-0 p-5 content">
                        <div className="col-xl-9 d-flex justify-content-center">
                            <div className="row w-100">
                                <div className="col-md-12 text-center">
                                    <h1 className="about__name m-auto "> Framer is for teams, too.</h1>
                                    <p className="w-75 m-auto about__text"> Join a growing list of companies who use Framer to make all the products you know and love.</p>
                                    <div className="text-center">
                                        <button className="btn btn-light text-dark mt-3">Learn about Enterprise</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="d-flex justify-content-between mt-5 flex-wrap">
                        <img className="about__img" src={Snap} alt="" />
                        <img className="about__img" src={Xero} alt="" />
                        <img className="about__img" src={Ali} alt="" />
                        <img className="about__img" src={Snap} alt="" />
                        <img className="about__img" src={Xero} alt="" />
                        <img className="about__img" src={Ali} alt="" />
                        <img className="about__img" src={Snap} alt="" />
                        <img className="about__img" src={Xero} alt="" />
                        <img className="about__img" src={Ali} alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    }
}

export default About;