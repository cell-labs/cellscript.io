import React from 'react';
import logo from '../../assets/img/logo.png';
import './Header.scss'
const Header: React.FC = () => {
    return (
        <header className="flex justify-between header-wrapper items-center">
            <div>
                <img src={logo} alt="logo" className="header-logo" />
                <div className="header-text">Cell Script</div>
            </div>
        </header>
    );
};

export default Header;
