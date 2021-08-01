import React, {useState, useEffect} from 'react';
import './NumberSection.css'
import CountUp from 'react-countup'

const NumberSection = () => {
    const [y, setY] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            setY(prev => prev = window.scrollY)
            })
    },[])
    if(y>=1000){
        var nav1 = document.getElementById("1")
        var nav2 = document.getElementById("2")
        var nav3 = document.getElementById("3")
        nav3.style.color = 'unset'
        nav2.style.color = 'orange'
        nav1.style.color = 'unset'
        return (
            <div className="container numbers pt-5 pb-5" id="whoweare"  style={{animationPlayState:'running'}}>
                <div className="row">
                    <div className="col-12">
                        <h2>Enhance your opportunities with us</h2>
                    </div>
                    <div className="col-12 d-flex justify-content-between bottom">
                        <div className="number col-2">
                        <CountUp end={220} duration={2} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Million</h2>
                        <p>END USERS SERVED GLOBALLY</p>
                        </div>
                        <div className="number col-2">
                        <CountUp end={20} duration={2} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Years</h2>
                        <p>OF PROFESSIONAL EXPERIENCE</p>
                        </div>
                        <div className="number col-2">
                        <CountUp end={3.3} duration={2} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Billion$</h2>
                        <p>WORTH OF TOTAL LOANS DISBURSED TO DATE</p>
                        </div>
                        
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                    <div className="number col-2">
                        <CountUp end={30} duration={2} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Million</h2>
                        <p>TRANSACTIONS PER DAY</p>
                    </div>
                    <div className="number col-2">
                        <CountUp end={25} duration={2} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Countries</h2>
                        <p>OUR GLOBAL PRESENCE</p>
                        </div>
                        <div className="number col-2">
                        <CountUp end={11} duration={2} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Billion</h2>
                        <p>TOTAL LOANS PROVIDED TO DATE</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="container numbers pt-5 pb-5" id="whoweare"  style={{visibility:'hidden'}}>
                <div className="row">
                    <div className="col-12">
                        <h2>Enhance your opportunities with us</h2>
                    </div>
                    <div className="col-12 d-flex justify-content-between bottom">
                        <div className="number col-2">
                        <CountUp end={220}  style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Million</h2>
                        <p>END USERS SERVED GLOBALLY</p>
                        </div>
                        <div className="number col-2">
                        <CountUp end={20}  style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Years</h2>
                        <p>OF PROFESSIONAL EXPERIENCE</p>
                        </div>
                        <div className="number col-2">
                        <CountUp end={3.3}  style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Billion$</h2>
                        <p>WORTH OF TOTAL LOANS DISBURSED TO DATE</p>
                        </div>
                        
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                    <div className="number col-2">
                        <CountUp end={30} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Million</h2>
                        <p>TRANSACTIONS PER DAY</p>
                    </div>
                    <div className="number col-2">
                        <CountUp end={25} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Countries</h2>
                        <p>OUR GLOBAL PRESENCE</p>
                        </div>
                        <div className="number col-2">
                        <CountUp end={11} style={{color:'orange', fontSize:'xx-large', fontWeight:'bold'}}/>
                        <h2>Billion</h2>
                        <p>TOTAL LOANS PROVIDED TO DATE</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default NumberSection;
