import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../Images/img1.png';
import img2 from '../../Images/img2.png';
class Home extends React.Component {
    render() {
        return <div className="home">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-xl-9 d-flex justify-content-center">
                        <div className="row w-100">
                            <div className="col-md-12  text-center">
                                <h1 className="home__name m-auto ">
                                    Get ahead of the pack.
                                </h1>
                                <p className="w-75 m-auto home__text">
                                    Framer is the best way to create interactive designs from start to finish.
                                </p>
                                <div className="d-flex justify-content-center w-100 mb-4">
                                    <input className="form-control shadow-none w-50" type="text" placeholder="Email" required />
                                    <button className="btn btn-primary btn1 shadow-none w-25">Start your free trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn text-primary"><FontAwesomeIcon icon={faPlayCircle} />  Watch intro video</button>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="d-flex justify-content-center mb-4 col-6 col-sm-4 col-md-3 col-lg-2"><img src={img1} alt="" /></div>
                    <div className="d-flex justify-content-center mb-4 col-6 col-sm-4 col-md-3 col-lg-2"><img src={img2} alt="" /></div>
                    <div className="d-flex justify-content-center mb-4 col-6 col-sm-4 col-md-3 col-lg-2"><img src={img1} alt="" /></div>
                    <div className="d-flex justify-content-center mb-4 col-6 col-sm-4 col-md-3 col-lg-2"><img src={img2} alt="" /></div>
                    <div className="d-flex justify-content-center mb-4 col-6 col-sm-4 col-md-3 col-lg-2"><img src={img1} alt="" /></div>
                    <div className="d-flex justify-content-center mb-4 col-6 col-sm-4 col-md-3 col-lg-2"><img src={img2} alt="" /></div>
                </div>
            </div>
        </div>
    }
}

export default Home;