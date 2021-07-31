import React from 'react';
import './ExecutiveSection.css'

const row1 = [
    {
        img:'https://www.simbrella.com/site/assets/files/1069/seymur_mammadov-1.png',
        name:'Seymur Mammadov',
        pos:'Chief Executive Officer'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1070/ramiz_lyapin-1.png',
        name:'Ramiz Lyapin',
        pos:'Advisor to the Chief Executive Officer'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1071/tamerlan-gamidzadeh-1.png',
        name:'Tamerlan Gamidzadeh',
        pos:'Financial Advisor to the Chief Executive Officer'
    }
]

const row2 = [
    {
        img:'https://www.simbrella.com/site/assets/files/1072/shamsiyya_ismayilova-1.png',
        name:'Shamsiya Ismayilova',
        pos:'Chief HR & Administrative Officer'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1073/ali_akbar_mammadov-1.png',
        name:'Ali Akbar Mammadov',
        pos:'Advisor to the Chief Executive Officer'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1074/elman-talybov-1.png',
        name:'Elman Talybov',
        pos:'Chief Strategy Officer'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1075/rauf_ismayilov-1.png',
        name:'Rauf Ismayilov',
        pos:'Chief Technology Officer'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1076/anar-aliyev-1.png',
        name:'Anar Aliyev',
        pos:'Chief Data Science & Analytics Officer'
    }

]

const row3 = [
    {
        img:'https://www.simbrella.com/site/assets/files/1077/farhad-huseynov-1.png',
        name:'Farhad Huseynov',
        pos:'Chief Financial Officer'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1078/natiq_alasgarzade-1.png',
        name:'Natiq Alasgarzade',
        pos:'Project Management Office Director'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1079/bendeguz_seres-1.png',
        name:'Bendeguz Seres',
        pos:'Sales & Accounts Head'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1080/eldar_novruzov-1.png',
        name:'Eldar Novruzov',
        pos:'Regional Sales & Accounts Management Director'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1081/elnur_rzazade-1.png',
        name:'Elnur Rzazade',
        pos:'Regional Sales & Accounts Management Director'
    }

]

const row4 = [
    {
        img:'https://www.simbrella.com/site/assets/files/1082/selbin-alakbarova-1.png',
        name:'Selbin Alakbarova',
        pos:'Chief Product Officer FinTech'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1083/fuad-musayev-1.png',
        name:'Fuad Musayev',
        pos:'Advisor to the Chief Executive Officer'
    },
    {
        img:'https://www.simbrella.com/site/assets/files/1084/murad-jalilzadeh-1.png',
        name:'Murad Jalilzadeh',
        pos:'Senior Product Owner FinTech'
    }
]
const ExecutiveSection = () => {
    return (
        <div className="container executive-section">
            <h2>Executive team</h2>
            <div className="row justify-content-center">
                {
                    row1.map((element, index)=>{
                        const {img, name, pos} = element
                        return(
                            <div className="col-2" key={index}>
                                <div className="box text-center">
                                    <div className="img-container">
                                        <img src={img} alt="" />
                                    </div>
                                    <h4>{name}</h4>
                                    <p>{pos}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="row justify-content-center">
                {
                    row2.map((element, index)=>{
                        const {img, name, pos} = element
                        return(
                            <div className="col-2" key={index}>
                                <div className="box text-center">
                                    <div className="img-container">
                                        <img src={img} alt="" />
                                    </div>
                                    <h4>{name}</h4>
                                    <p>{pos}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="row justify-content-center">
                {
                    row3.map((element, index)=>{
                        const {img, name, pos} = element
                        return(
                            <div className="col-2" key={index}>
                                <div className="box text-center">
                                    <div className="img-container">
                                        <img src={img} alt="" />
                                    </div>
                                    <h4>{name}</h4>
                                    <p>{pos}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="row justify-content-center">
                {
                    row4.map((element, index)=>{
                        const {img, name, pos} = element
                        return(
                            <div className="col-2" key={index}>
                                <div className="box text-center">
                                    <div className="img-container">
                                        <img src={img} alt="" />
                                    </div>
                                    <h4>{name}</h4>
                                    <p>{pos}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    );
}

export default ExecutiveSection;
