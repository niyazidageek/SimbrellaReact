import React from 'react';
import './Footer.css'
import { Button } from './SectionCard';

const Footer = () => {
    return (
        <div className="footer" id="contacts">
            <div className="container footer-container d-flex flex-column">
                <header>
                    <h2>Contacts</h2>
                    <nav className="d-flex align-items-center">
                    <ul>
                        <li>AMSTERDAM</li>
                        <li>BAKU</li>
                        <li>SINGAPORE</li>
                    </ul>
                    <Button content="Our branches" />
                    </nav>
                    
                </header>
               <footer className="d-flex justify-content-between flex-column">
               <div className="top d-flex justify-content-end w-100">
                <div className="right">
                    <article>
                    <div className="box">
                        <span>Headquarters</span>
                        <p>Teleportboulevard 130, Scalehub, Unit number 1.08, 1043 EJ Amsterdam, Netherlands</p>
                    </div>
                    <div className="box">
                        <span>E-mail</span>
                        <p>amsterdam@simbrella.com</p>
                    </div>
                    </article>
                </div>
               </div>
               <div className="bottom d-flex justify-content-between">
                   <div className="left">
                       <span>Site by Niyazi Babayev</span>
                   </div>
                   <div className="right">
                       <span>Copyright © 2021. All rights reserved.</span>
                   </div>
               </div>
               </footer>
            </div>
        </div>
    );
}

export default Footer;
