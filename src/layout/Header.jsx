import React, {useEffect, useState}from 'react';
import './Header.css'
import { Link } from 'react-scroll';
import SectionCard from './SectionCard';

const data = [
    {
        title:'What we do',
        id:'whatwedo'
    },
    {
        title:'Who we are',
        id:'whoweare'
    },
    {
        title:'Jobs',
        id:'jobs'
    },
    {
        title:'News',
        id:'news'
    },
    {
        title:'Contacts',
        id:'contacts'
    }
]


const Image = ({logo}) => {
    if(logo=='uncolored'){
        return(
            <img src="https://www.simbrella.com/site/templates/img/logo.svg" alt=""/>
        )
    }
    else{
        return(
            <img src="https://www.simbrella.com/site/templates/img/logo_colored.svg" alt="" />
        )
    }
    
}

const NavList = ({fontcolor}) => {
    return(
        <ul className="d-flex m-0 p-0" style={{listStyle:'none'}}>
            {
                data.map((element, index)=>{
                    return(
                        <li key = {index} style={{margin:'1rem', padding:'0px'}}>
                            <Link style={{color:`${fontcolor}`}} className="Link" to={element.id}>{element.title}</Link>
                        </li>
                    )
                 })
            }
        </ul>
    )
}

const NavHeader = ({height, bgcolor, logo, fontcolor}) => {
    console.log(height)
    console.log(bgcolor)
    return(
            <div className="d-flex justify-content-between align-items-center" style={{height:`${height}`, backgroundColor:`${bgcolor}`, position:'fixed', transition:'150ms all linear', width:'100%', zIndex:'2'}}>
                <div className="container d-flex justify-content-between align-items-center" >
                <Image logo={logo}/>
                <NavList fontcolor={fontcolor}/>
                
                </div>
            </div>
           
    )
}


const Container = () => {
    const [y, setY] = useState(0)
    window.addEventListener('scroll', ()=>{
      setY(prev=>prev = window.scrollY)
    })
    
    if(y>0){
        return(
            <div className="Header">
            
            <NavHeader height='60px' bgcolor='white' logo='colored' fontcolor='black' />
            
            </div>
        ) 
    }
    else{
        return(
            <div className="Header">
            
            <NavHeader height='72px' bgcolor='unset' logo='uncolored' fontcolor='white' />     
       
            </div>
        )
    }

}

const H2Item = ({state}) => {
    return(
        <h2 style={{animationPlayState:`${state}`}} className="float-text">First Company in the world to launch Mobile Fintech Services</h2>
    )
}
const PItem = ({state}) => {
    return(
        <p style={{animationPlayState:`${state}`}}>We are serving over 25 companies in 20 countries worldwide and this number is growing with new launches every quarter.</p>      
    )
    
}

const FloatingText = () => {
    return(
        <>
        <H2Item state='running'/>
        <PItem state='running'/>
        </>
    )
}


const ScrollItem = () => {

    return(
        <>
        <Link id="scroll" to="whatwedo" style={{position:'absolute', textDecoration:'none', color:'white', display:'flex', alignItems:'center',  bottom:'3%'}}>
            <img src="https://www.simbrella.com/site/templates/img/mouse_icon.svg" alt="" />
            <span style={{paddingLeft:'1rem ', paddingTop:'0.5rem'}}>Scroll to discover us!</span>
        </Link>
        </>
    )
}

const Header = () => {

    
    return(
        <>
        <Container />
        <div className="container container-float" >
        <FloatingText className="FloatingText" />   
        </div>      
        <ScrollItem />
        </>
    )
}


export default Header;
