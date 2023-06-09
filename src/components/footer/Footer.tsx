import React from 'react';
import './Footer.css'

export const Footer: React.FC = () => {
    return (
        <div className="app-footer--inner">
            <div className="app-footer--first">
                <ul className="d-flex align-items-center">
                    <li className="rounded-sm text-nowrap">
                        <a
                            className="footer-link"
                            target="_blank"
                        >
                            Download now
                        </a>
                    </li>
                    <li className="rounded-sm text-nowrap">
                        <a
                            className="footer-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View PRO Version
                        </a>
                    </li>
                </ul>
            </div>
            <div className="app-footer--second">
                <p>Carolina React Admin Dashboard with Material-UI Free</p>
                © 2020 - crafted with <span className="text-danger px-1">❤</span> by{' '}
                <a
                    className="footer-link"
                    target="_blank"
                    title="UiFort.com"
                >
                    UiFort.com
                </a>
            </div>
        </div>
    );
};

export default Footer;
