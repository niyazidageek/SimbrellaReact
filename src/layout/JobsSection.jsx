import React, {useState, useEffect} from 'react';
import './JobsSection.css'
import { Button } from './SectionCard';

const JobsSection = () => {
    const [y, setY] = useState(0);
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            setY(prev => prev = window.scrollY)
            })
    },[])
    if(y>4380){
        return (
            <div className="job-container" id="jobs">
                <div className="container jobs-section" style={{animationPlayState:'running'}}>
                <div className="row">
                    <h2>Work with us</h2>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <img src="https://www.simbrella.com/site/assets/files/1089/advantage_icon_1.svg?v=5" alt="" />
                        <h4>Growth And Development</h4>
                    </div>
                    <div className="col-4">
                        <img src="https://www.simbrella.com/site/assets/files/1090/advantage_icon_2.svg?v=5" alt="" />
                        <h4>Smart And Motivated Team</h4>
                    </div>
                    <div className="col-4">
                        <img src="https://www.simbrella.com/site/assets/files/1091/advantage_icon_3.svg?v=5" alt="" />
                        <h4>Care About Values</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="image-container">
                    <img src="https://www.simbrella.com/site/assets/files/1087/advantage_image-1.jpg" alt="" />
                    <div className="vacancies">
                        <h3>Become part of our team</h3>
                        <p>We are looking for passionate and talented people to join our growing team. If you want to find out your highest heart rate and fill up your life with passion, then welcome to Simbrella.</p>
                        <Button content='All vacancies'/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
    // else if(isReturned==true){
    //     return (
    //         <div className="job-container" id="jobs">
    //             <div className="container jobs-section" style={{animationPlayState:'paused'}}>
    //             <div className="row">
    //                 <h2>Work with us</h2>
    //             </div>
    //             <div className="row mt-3">
    //                 <div className="col-4">
    //                     <img src="https://www.simbrella.com/site/assets/files/1089/advantage_icon_1.svg?v=5" alt="" />
    //                     <h4>Growth And Development</h4>
    //                 </div>
    //                 <div className="col-4">
    //                     <img src="https://www.simbrella.com/site/assets/files/1090/advantage_icon_2.svg?v=5" alt="" />
    //                     <h4>Smart And Motivated Team</h4>
    //                 </div>
    //                 <div className="col-4">
    //                     <img src="https://www.simbrella.com/site/assets/files/1091/advantage_icon_3.svg?v=5" alt="" />
    //                     <h4>Care About Values</h4>
    //                 </div>
    //             </div>
    //             <div className="row mt-5">
    //                 <div className="image-container">
    //                 <img src="https://www.simbrella.com/site/assets/files/1087/advantage_image-1.jpg" alt="" />
    //                 <div className="vacancies">
    //                     <h3>Become part of our team</h3>
    //                     <p>We are looking for passionate and talented people to join our growing team. If you want to find out your highest heart rate and fill up your life with passion, then welcome to Simbrella.</p>
    //                     <Button content='All vacancies'/>
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //         </div>
    //     );
    // }
    else{
        return (
            <div className="job-container" id="jobs">
                <div className="container jobs-section" style={{visibility:'hidden'}}>
                <div className="row">
                    <h2>Work with us</h2>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <img src="https://www.simbrella.com/site/assets/files/1089/advantage_icon_1.svg?v=5" alt="" />
                        <h4>Growth And Development</h4>
                    </div>
                    <div className="col-4">
                        <img src="https://www.simbrella.com/site/assets/files/1090/advantage_icon_2.svg?v=5" alt="" />
                        <h4>Smart And Motivated Team</h4>
                    </div>
                    <div className="col-4">
                        <img src="https://www.simbrella.com/site/assets/files/1091/advantage_icon_3.svg?v=5" alt="" />
                        <h4>Care About Values</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="image-container">
                    <img src="https://www.simbrella.com/site/assets/files/1087/advantage_image-1.jpg" alt="" />
                    <div className="vacancies">
                        <h3>Become part of our team</h3>
                        <p>We are looking for passionate and talented people to join our growing team. If you want to find out your highest heart rate and fill up your life with passion, then welcome to Simbrella.</p>
                        <Button content='All vacancies'/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
    
}

export default JobsSection;
