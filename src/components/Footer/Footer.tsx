import React from 'react';
import Github from '../../assets/img/github.png'
import Twitter from '../../assets/img/twitter.png'
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-content flex">
                <div className="ckb-info">
                    <div> Copyright © Cell Labs</div>
                    <div className="flex mt-6 space-between">
                        <a className="github mr-5" href='https://github.com/cell-labs/cell-script'>
                            <img src={Github} />
                        </a>
                        <a className="twitter mr-5" href='https://twitter.com/'>
                            <img src={Twitter} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
