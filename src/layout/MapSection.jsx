import React, {useState, useEffect} from 'react';
import './MapSection.css'

const MapSection = () => {
    // const [isReturned, setIsReturned] = useState(false)
    const [y, setY] = useState(0);
    function myFunc(){
        setY(prev => prev = window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener('scroll', myFunc)
    },[])
    
    // useEffect(()=>{
    //     if(y>1550){
            
    //         setIsReturned(prev=>prev=true)
    //         console.log('render')
    //     }
    // })
    if(y>=1550){
        return (
            <div className="mapsection container" style={{animationPlayState:'running'}}>
                <div className="operations">
                <p className='orange'>
                    <div className="box"></div>
                    <span>Current Operations</span>
                </p>
                <p className='blue'>
                    <div className="box"></div>
                    <span>Project Pipeline</span>
                </p>
                <p className='both'>
                    <div className="box"></div>
                    <span>Both</span>
                </p>
    
                </div>
                <h2>Simbrella Geography</h2>
                <img src="https://www.simbrella.com/site/templates/img/map_image.png" alt="" />
            </div>
        );
    }
    // else if(isReturned==true){
    //     return (
    //         <div className="mapsection container" style={{animationPlayState:'paused'}}>
    //             <div className="operations">
    //             <p className='orange'>
    //                 <div className="box"></div>
    //                 <span>Current Operations</span>
    //             </p>
    //             <p className='blue'>
    //                 <div className="box"></div>
    //                 <span>Project Pipeline</span>
    //             </p>
    //             <p className='both'>
    //                 <div className="box"></div>
    //                 <span>Both</span>
    //             </p>
    
    //             </div>
    //             <h2>Simbrella Geography</h2>
    //             <img src="https://www.simbrella.com/site/templates/img/map_image.png" alt="" />
    //         </div>
    //     );
    // }   
    else{
        return(
            <div className="mapsection container" style={{visibility:'hidden'}}>
                <div className="operations">
                <p className='orange'>
                    <div className="box"></div>
                    <span>Current Operations</span>
                </p>
                <p className='blue'>
                    <div className="box"></div>
                    <span>Project Pipeline</span>
                </p>
                <p className='both'>
                    <div className="box"></div>
                    <span>Both</span>
                </p>
    
                </div>
                <h2>Simbrella Geography</h2>
                <img src="https://www.simbrella.com/site/templates/img/map_image.png" alt="" />
            </div>
        )
    }
    
}

export default MapSection;
