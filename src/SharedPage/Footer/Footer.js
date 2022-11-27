import React from 'react';
import logo from '../../images/banner/logo22222.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content rounded-md">
            <div>
                <img src={logo} alt="" className='border rounded-md' />
                <p className="font-bold">
                    AI IT Shop Ltd. <br />Providing used products since 2018
                </p>
                <p>Copyright © 2023 - All right reserved || <span className='text-orange-400'>SHOFIK</span> </p>
            </div>
        </footer>
    );
};

export default Footer;