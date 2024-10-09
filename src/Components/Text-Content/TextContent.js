import React from "react";
import './TextContent.css';

export default function TextContent(props){
    let isMobile = props.width < 800;
    const isArray = x => Array.isArray(x);


   const TextContent = (x) =>{
    if(isArray(x.content)){
        return(
                x.content.map((item, index)=>{
                   return(
                    <div className={`lol ${isMobile ? 'col-12 margin-bottom--small':'col-4 text-content--container'}`} key={index}>
                        <hr className={`hr-light ${isMobile ? '':'a--display-none'}`}></hr>
                        <h4 className="text-item">{item.title}</h4>
                        <p className="text-item">{item.text1}</p>
                        <p className="text-item">{item.text2}</p>
                        <p className="text-item">{item.text3}</p>
                        {item.text4 && <p className="text-item">{item.text4}</p>}
                    </div>
                    )
                })
        )
    } else {
        return null;
    }
   }
    

    return(
            <div className={`text-content--container ${isMobile ? 'row--mobile margin-bottom--med col-12' : 'row flex-end margin-bottom--med'}`}>
            <hr className={`margin-bottom--small${isMobile ? 'col-12' : 'col col-10'}`}/>
            <div className={`text--container row ${isMobile ? 'col-12' : 'col col-10'}`}>
            <h3 className={`col small-caps margin-bottom--small ${isMobile ? 'col-12' : 'col-2'}`}>{props.title}</h3>
            <div className={`${isMobile?'col-12':'text-content--outer-container col-8'}`}>
                {TextContent(props)}
            </div>
            </div>
        </div>
    )
}