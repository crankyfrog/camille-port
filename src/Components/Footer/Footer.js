import React from "react";
import './Footer.css'

export const Footer = (props) => {
    const isMobile = props.width < 800

    return(
        <footer className={`row ${isMobile ? 'footer--mobile' : 'footer row'}`}>
            <hr className={`${isMobile ? 'col-12' : 'col-10'}`}></hr>
            <h6 className="col col-11 margin-top--small">©Camille Tindogan 2024. All rights reserved</h6>
        </footer>
    )
}