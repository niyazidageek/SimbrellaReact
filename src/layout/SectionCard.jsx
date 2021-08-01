import React, { useState, useEffect } from 'react';
import './SectionCard.css';

const data = [
    {
        img: 'https://www.simbrella.com/site/assets/files/1043/1.svg',
        text: 'We determine the credit-worthiness of each client, using behavioral scoring model.',
        title: 'AI & ML based scoring',
    },
    {
        img: 'https://www.simbrella.com/site/assets/files/1044/2_1.svg',
        text: 'We deliver microlending solution which includes processing, disbursement, repayment, recovery and management of loans.',
        title: 'Micro-lending technology',
    },
    {
        img: 'https://www.simbrella.com/site/assets/files/1045/3-1.svg',
        text: 'We use latest advancements in Artificial Intelligence and Machine Learning to maximize our value proposition.',
        title: 'Big data engine',
    }
]

export const Button = ({content}) => {
    return (
        <button className='btn btn-light d-flex justify-content-around align-items-center'>
            <span style={{ paddingRight: '3rem' }}>{content}</span>
            <img src="https://www.simbrella.com/site/templates/img/link_orange_icon.svg" alt="" />
        </button>
    )
}

const Cards = () => {
    return (
        <div className="row justify-content-between pt-5 pb-5">
            {
                data.map((element, index) => {
                    const { title, text, img } = element
                    return (
                        <div className="col-3 d-flex justify-content-center" key={index}>
                            <div className="card text-center d-flex align-items-center" style={{ width: "18rem", height: '90%', padding: '2rem' }}>
                                <img src={img} alt="" style={{ width: "50%" }} />
                                <div className="card-body">
                                    <h3>{title}</h3>
                                    <p className="card-text">{text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const SectionCard = () => {
    const [y, setY] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            setY(prev => prev = window.scrollY)
            })
    },[])
    if (y >= 110) {
        
        return (
            <div className='container card-container' id="whatwedo" style={{ animationPlayState: 'running' }}>
                <header>
                    <h2>What we do</h2>
                    <Button content='Read more'/>
                </header>
                <Cards />
            </div>
        );
    }
    
    else{
        return <div className='container card-container' id="whatwedo" style={{ visibility: 'hidden' }}>
        <header>
            <h2>What we do</h2>
            <Button content='Read more'/>
        </header>
        <Cards />
    </div>
    }

}

export default SectionCard;
