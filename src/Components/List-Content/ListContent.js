import React from "react";
import './ListContent.css';

export default function ListContent(props){
    let isMobile = props.width < 800;
    const isArray = x => Array.isArray(x);


   const ListContent = (x) =>{
    if(isArray(x.content)){
        return(
                x.content.map((item, index)=>{
                   return(
                    <div className={`${isMobile?'col-12 text-content--container-mobile':'col-4 text-content--container'}`} key={index}>
                        <h4 className="text-item">{item.title}</h4>
                        {
                            item.list.map((listItem,index)=>{
                                return(
                                    <p className="text-item" key={index}>{listItem}</p>
                                )
                            })
                        }
                    </div>
                    )
                })
        )
    } else {
        return null;
    }
   }
    

    return(
            <div className={`text-content--container ${isMobile ? 'row--mobile margin-bottom--med' : 'row flex-end margin-bottom--med'}`}>
            <hr className={`margin-bottom--small${isMobile ? 'col col-12':'col col-10'}`}/>
            <div className="text--container row col col-10">
            <h3 className={`col small-caps margin-bottom--small ${isMobile ? 'col-12' : 'col-2'}`}>{props.title}</h3>
            <div className="text-content--outer-container col-8">
                {ListContent(props)}
            </div>
            </div>
        </div>
    )
}