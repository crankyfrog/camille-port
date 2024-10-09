import React from "react";
import './Content.css'

export default function Content(props) {

    let isMobile = props.width < 800

    const isArray = x => Array.isArray(x);
    let isString = x => typeof x === 'string' || x instanceof String;

    const firstContent = (x) =>{
        if(isString(x.content)){
            return <p className={`${ isMobile ? '' : 'paragraph'}`}>{x.content}</p>
        } else {
            return null;
        }
    }

    const secondContent = (x) =>{
        if(isString(x.secondary)){
            return <p className={`${isMobile ? '' : 'paragraph'}`}>{x.secondary}</p>
        } else {
            return null;
        }
    }

    const List  = (x) =>{
        if (isArray(x.list)) {
            return <ul className={`${props.list ? isMobile ? '' : 'paragraph' : 'a--display-none'}`}>
                {x.list.map((item, index) => (
                <li className='list-item' key={index}>{item}</li>
            ))}
            </ul>
        } else {
            return null;
        }
    }
    
    const Images = (z) =>{
        if (isArray(z.images)) {
            return z.images.map((pic, index) => (
                <img className='image-content' src={pic.pic} key={index} alt={pic.alt}/>
            ));
        } else {
            return null;
        }
    }

    return(
        <div className={`text-content--container ${isMobile ? 'row--mobile margin-bottom--med' : 'row flex-end margin-bottom--med'}`}>
            <hr className={`margin-bottom--small${isMobile ? 'col col-12':'col col-10'}`}/>
            <div className="text--container row col col-10">
                <h3 className={`col small-caps margin-bottom--small ${isMobile ? 'col-12' : 'col-2'}`}>{props.title}</h3>
                <div className={`a--no-margin-right col ${isMobile ? 'col-12' : 'col-8'}`}>
                    {firstContent(props)}
                    {List(props)}
                    <div className={`${isMobile ? 'image-mobile' : 'image-desktop'}`}>
                    {Images(props)}
                    </div>
                    {secondContent(props)}
                </div>
            </div>
        </div>
    )
}