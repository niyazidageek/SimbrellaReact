import React,{useState, useEffect} from 'react';
import './ClientsSection.css'

const row1=[
    {
        img: "https://www.simbrella.com/site/assets/files/1/20.svg"
    },
    {
        img: "https://www.simbrella.com/site/assets/files/1/28.svg"
    },
    {
        img: "https://www.simbrella.com/site/assets/files/1/23.svg"
    },
    {
        img: "https://www.simbrella.com/site/assets/files/1/22.svg"
    },
]

const row2=[
    {
        img: "https://www.simbrella.com/site/assets/files/1/880px-vodafone_2017_logo_svg.png"
    },
    {
        img: "https://www.simbrella.com/site/assets/files/1/32.svg"
    },
    {
        img: "https://www.simbrella.com/site/assets/files/1/31.svg"
    },
    {
        img: "https://www.simbrella.com/site/assets/files/1/30.svg"
    }
]

const row3=[
    {
        img: "https://www.simbrella.com/site/assets/files/1/36.png"
    },
    {
        img: "https://www.simbrella.com/site/assets/files/1/35.svg"
    },
    {
        img: "https://www.simbrella.com/site/assets/files/1/34.svg"
    }
]

const ClientsSection = () => {
    const [isReturned, setIsReturned] = useState(false)
    const [y, setY] = useState(0);
    window.addEventListener('scroll', () => {
    setY(prev => prev = window.scrollY)
    })
    useEffect(()=>{
        if(y>2310){
            
            setIsReturned(prev=>prev=true)
        }
    })
    if(y>=2310){
        return (
            <div className="clients-bg">    
            <div className="container client-section pt-5 pb-5" style={{animationPlayState:'running'}}>
                <h2>Our clients</h2>
                <div className="row mb-5">
                    {
                        row1.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                </div>
    
                <div className="row mb-5">
                {
                        row2.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                </div>
    
                <div className="row">
                {
                        row3.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                    <div className="col-3">
                        <div className="box">
                            <span>& over 15 more clients</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
    else if(isReturned==true){
        return (
            <div className="clients-bg">    
            <div className="container client-section pt-5 pb-5" style={{animationPlayState:'paused'}}>
                <h2>Our clients</h2>
                <div className="row mb-5">
                    {
                        row1.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                </div>
    
                <div className="row mb-5">
                {
                        row2.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                </div>
    
                <div className="row">
                {
                        row3.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                    <div className="col-3">
                        <div className="box">
                            <span>& over 15 more clients</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
    else{
        return (
            <div className="clients-bg">    
            <div className="container client-section pt-5 pb-5" style={{visibility:'hidden'}}>
                <h2>Our clients</h2>
                <div className="row mb-5">
                    {
                        row1.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                </div>
    
                <div className="row mb-5">
                {
                        row2.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                </div>
    
                <div className="row">
                {
                        row3.map((element, index)=>{
                            return(
                                <div className="col-3"  key={index}>
                                    <div className="box">
                                    <img src={element.img} alt=""></img>
                                </div>
                                </div>
                                
                            )
                        })
                    }
                    <div className="col-3">
                        <div className="box">
                            <span>& over 15 more clients</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
    
}

export default ClientsSection;

{/* <div className="col-3">
                    <div className="box">
                        <img src="https://www.simbrella.com/site/assets/files/1/20.svg" alt="" />
                    </div>
                </div> */}