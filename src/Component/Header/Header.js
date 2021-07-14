import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../../Images/logo.jpg';
class Header extends React.Component {
    state = { hideHeader: false }

    toggleHeader = () => {
        this.setState((state) => {
            console.log(state);
            return { hideHeader: !state.hideHeader }
        })
    }
    render() {
        return <div>
            <header className="header d-flex justify-content-between">
                <img src={logo} className="logo" alt="" />
                <div className="navigation__menu d-flex align-items-center" >
                    <div className={`nav__menu ${this.state.hideHeader && "show__nav-menu" || ""} `}>
                        <a href="#" onClick={this.toggleHeader} className="nav__link">Features</a>
                        <a href="#" onClick={this.toggleHeader} className="nav__link">Get Started</a>
                        <a href="#" onClick={this.toggleHeader} className="nav__link">Community</a>
                        <a href="#" onClick={this.toggleHeader} className="nav__link">blog</a>
                        <a href="#" onClick={this.toggleHeader} className="nav__link">Enterprice</a>
                        <a href="#" onClick={this.toggleHeader} className="nav__link">Pricing</a>
                        <button className="btn btn__close" onClick={this.toggleHeader}><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                    <button className="btn btn-primary header__btn">
                        Free trial
                    </button>
                    <button className="btn btn__show" onClick={this.toggleHeader}><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </header>
        </div>
    }
}

export default Header;