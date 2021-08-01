import React, {useState, useEffect, useRef} from 'react';
import './CitySection.css'


const CitySection = () => {  
    const [y, setY] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            setY(prev => prev = window.scrollY)
        })
    },[])


    if(y>=600){
        return (
            <div className="citysection position-relative" style={{animationPlayState:'running'}}>
                <div className="blur-bg" style={{animationPlayState:'running'}}></div>
                <div className="row m-0">
                <div className="left col-6 d-flex justify-content-center align-items-center m-0">
                    <h1 style={{animationPlayState:'running'}}>Tech-Powered Financial Solutions</h1>
                </div>
                <div className="right col-6 d-flex justify-content-center align-items-center m-0">
                    <ul>
                        <li><h5 style={{animationPlayState:'running'}}>AI and ML based scoring engine</h5></li>
                        <li><h5 style={{animationPlayState:'running'}}>End-to-end lending technology</h5></li>
                        <li><h5 style={{animationPlayState:'running'}}>High-performing and secure operating platform</h5></li>
                        <li><h5 style={{animationPlayState:'running'}}>Fast and consistent decision making</h5></li>
                        <li><h5 style={{animationPlayState:'running'}}>Flexible customizable solution</h5></li>
                    </ul>
                </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="citysection position-relative" style={{visibility:'hidden'}}>
                <div className="blur-bg" style={{animationPlayState:'paused'}}></div>
                <div className="row m-0">
                <div className="left col-6 d-flex justify-content-center align-items-center m-0">
                    <h1 style={{animationPlayState:'paused'}}>Tech-Powered Financial Solutions</h1>
                </div>
                <div className="right col-6 d-flex justify-content-center align-items-center m-0">
                    <ul>
                        <li><h5 style={{animationPlayState:'paused'}}>AI and ML based scoring engine</h5></li>
                        <li><h5 style={{animationPlayState:'paused'}}>End-to-end lending technology</h5></li>
                        <li><h5 style={{animationPlayState:'paused'}}>High-performing and secure operating platform</h5></li>
                        <li><h5 style={{animationPlayState:'paused'}}>Fast and consistent decision making</h5></li>
                        <li><h5 style={{animationPlayState:'paused'}}>Flexible customizable solution</h5></li>
                    </ul>
                </div>
                </div>
            </div>
        );
    }
    
}

export default CitySection;
