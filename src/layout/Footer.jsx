import React, {useState, useEffect} from 'react';
import './Footer.css'
import { Button } from './SectionCard';


const Footer = () => {
    const [span, setSpan] = useState('Headquarters')
    const [p, setP] = useState('Teleportboulevard 130, Scalehub, Unit number 1.08, 1043 EJ Amsterdam, Netherlands')
    const [email, setEmail] = useState('amsterdam@simbrella.com')
    const [number, setNumber] = useState('')
    const [text, setText] = useState('')
    const [y, setY] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            setY(prev => prev = window.scrollY)
            })
    },[])
    if(y>=6200){
        var nav4 =document.getElementById("4")
        var nav5 = document.getElementById("5")
        nav4.style.color = "unset"
        nav5.style.color = "orange"
    }
    return (
        <div className="footer" id="contacts">
            <div className="container footer-container d-flex flex-column">
                <header>
                    <h2>Contacts</h2>
                    <nav className="d-flex align-items-center">
                    <ul>
                        <li onClick={()=>{setSpan(prev=>prev="Headquarters"); setP(prev=>prev="Teleportboulevard 130, Scalehub, Unit number 1.08, 1043 EJ Amsterdam, Netherlands"); setEmail(prev=>prev="amsterdam@simbrella.com"); setNumber(prev=>prev="");setText(prev=>prev="")}}>AMSTERDAM</li>
                        <li onClick={()=>{setSpan(prev=>prev="Main Operations Office"); setP(prev=>prev="Jalil Mammadguluzadeh st. 102 A, City Point Business Centre, AZ1022, Baku, Azerbaijan"); setEmail(prev=>prev="baku@simbrella.com"); setNumber(prev=>prev="+994 12 404 31 32"); setText(prev=>prev="Contact number")}}>BAKU</li>
                        <li onClick={()=>{setSpan(prev=>prev="APAC Region Office"); setP(prev=>prev="163 Tras Street, #07-02, Lian Huat Building, 079024, Singapore"); setEmail(prev=>prev="singapore@simbrella.com");setNumber(prev=>prev="");setText(prev=>prev="")}}>SINGAPORE</li>
                    </ul>
                    <Button content="Our branches" />
                    </nav>
                    
                </header>
               <footer className="d-flex justify-content-between flex-column">
               <div className="top d-flex justify-content-end w-100">
                <div className="right position-relative">
                    <article>
                    <div className="box">
                        <span>{span}</span>
                        <p>{p}</p>
                    </div>
                    <div className="box">
                        <span>E-mail</span>
                        <p>{email}</p>
                    </div>
                    <div className="box number-box">
                        <span>{text}</span>
                        <p>{number}</p>
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
