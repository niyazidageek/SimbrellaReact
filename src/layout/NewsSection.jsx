import { element } from 'prop-types';
import React, {useEffect, useState} from 'react';
import './NewsSection.css'
import { Button } from './SectionCard';

const data = [
    {
        img:'https://www.simbrella.com/site/assets/files/1219/rsz_photo5377316028758995848.jpg',
        text:'Simbrella has donated to forest restoration project to plant 1,000 trees in Albertine Rift, Uganda',
        date:'June 2021'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1213/184960796_557897875191285_5153983276880290253_n.jpg',
        text:'Simbrella receives ISO 27001 certification for succesful implementation of Information Security Management System',
        date:'May 2021'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1195/final.png',
        text:'Simbrella launches "Lajor" - digital micro-lending product for Orange Money mobile wallets in Sierra Leone.',
        date:'September 2020'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1094/40_1.jpg',
        text:'Simbrella announces launch in South-East Asia via microlending partnership with MPT Myanmar.',
        date:'August 2020'
    },

]

const NewsSection = () => {
    const [y, setY] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            setY(prev => prev = window.scrollY)
            })
    },[])
    if(y>=5340){
        var nav3 = document.getElementById("3")
        var nav4 = document.getElementById("4")
        var nav5 = document.getElementById("5")
        nav3.style.color = 'unset'
        nav4.style.color = 'orange'
        nav5.style.color = 'unset'
        return (
            <div id="news" className="news-section container pt-5 pb-5" style={{animationPlayState:'running'}}>
                <div className="row w-100 justify-content-between">
                    <div className="col-3">
                    <h2>Latest news</h2>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                    <Button content="All news" />
                    </div> 
                </div>
                <div className="row w-100 m-0 mt-5">
                {
                    data.map((element, index)=>{
                        const {img, text, date} = element
                        return(
                            <div className="col-3 cards" key={index}>
                                <div className="image-container">
                                <img src={img} alt="" />
                                </div>
                                <h3>{text}</h3>
                                <span>{date}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
    
    else{
        return (
            <div id="news" className="news-section container pt-5 pb-5" style={{visibility:'hidden'}}>
                <div className="row w-100 justify-content-between">
                    <div className="col-3">
                    <h2>Latest news</h2>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                    <Button content="All news" />
                    </div> 
                </div>
                <div className="row w-100 m-0 mt-5">
                {
                    data.map((element, index)=>{
                        const {img, text, date} = element
                        return(
                            <div className="col-3 cards" key={index}>
                                <div className="image-container">
                                <img src={img} alt="" />
                                </div>
                                <h3>{text}</h3>
                                <span>{date}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
    
}

export default NewsSection;
