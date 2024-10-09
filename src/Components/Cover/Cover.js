import React from "react";
import './Cover.css';

export default function Cover(props){
    return(
        <div className={`${props.width < 800 ? 'row--mobile cover--container' : 'row margin-bottom--med'}`}>
        <div className={`${props.width < 800 ? 'col col-12' : 'col col-4 text-container'}`}> {/* col-5 in total */}
            <h2 className="cover-title margin-bottom--med">
                {props.title}
            </h2>
            <h3 className="a--h5 margin-bottom--small">
                Overview
            </h3>
            <p>
                {props.content}
            </p>
            <h3 className="a--h5 margin-bottom--small">
                Role
            </h3>
            <p>
                {props.role}
            </p>
            <h3 className="a--h5 margin-bottom--small">
                Collaborators
            </h3>
            <p className="margin-bottom--med">
                {props.collab1}<br/>
                {props.collab2}
            </p>
        </div>
        <div className={`${props.width < 800 ? 'cover-image--container--mobile col col-12 margin-bottom--med' : 'col col-5 cover-image--container'}`}>
            <img className='cover-image' src={props.image} alt="Canonical"/>
        </div>
        </div>
    )
}