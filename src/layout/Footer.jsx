import React from 'react';
import './Footer.css'
import { Button } from './SectionCard';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer-container d-flex justify-content-between">
                <div className="row flex-column">
                <h3>Contacts</h3>
                <h2>sasas</h2>
                </div>
                <div className="row flex-column">
                    <div className="row">
                    <header className="d-flex">
                    <ul className="d-flex">
                        <li>AMSTERDAM</li>
                        <li>BAKU</li>
                        <li>SINGAPORE</li>
                    </ul>                    
                    <Button content="Our branches" />
                    </header>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
