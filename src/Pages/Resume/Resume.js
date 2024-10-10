import React from "react";
import './Resume.css';
import Camille from "../../Assets/Images/Camcam.webp";
import TextContent from "../../Components/Text-Content/TextContent";
import { Experience, Education, Skills, Projects } from "./resumeContent";
import ListContent from "../../Components/List-Content/ListContent";

export default function Resume (props){

    return(
        <main className="row">
            <div className={` margin-bottom--med ${props.width < 800 ? 'row--mobile cover--container' : 'row'}`}>
        <div className={`${props.width < 800 ? 'col col-12' : 'col col-4 text-container'}`}> {/* col-5 in total */}
            <h3 className="a--h5 margin-bottom--small">
                Overview
            </h3>
            <p>
                Hi, I’m a UI Designer passionate about crafting beautiful and functional digital experiences. I love blending design, UX, and front-end development to create interfaces that look and feel great. I pay close attention to the details that shape user journeys and enjoy collaborating with teams that bring ideas to life.
                <br/><br/>
                My coding skills help bridge design and development, making sure everything is creative and practical. I’m always exploring new trends and tech, driven by a love for making the web friendlier for everyone!
            </p>

            <a href="https://drive.google.com/file/d/1Mho2FuBw-DogvaF3HUJPvEVS5mbv08BQ/view?usp=sharing" download="Camille Tindogan Resume.pdf" target="_blank" rel="noreferrer">
                 <button className="portfolio-button">Download Resume</button>
            </a>
        </div>
        <div className={`${props.width < 800 ? 'col col-12 margin-bottom--med' : 'col-5 resume-image--container'}`}>
            <img className={`${props.width < 800 ? 'resume-image--mobile':'resume-image'}`} src={Camille} alt="It's me Camille"/>
        {/*<Lottie
         style={style}
         animationData={animationData}
         />*/}
        </div>
        </div>

            <TextContent
                width = {props.width}
                title = 'Experience'
                content = {Experience}
            />

            <TextContent
                width = {props.width}
                title = 'Education'
                content = {Education}
            />

            <ListContent
                width = {props.width}
                title = 'Skills'
                content = {Skills}
            />
            
            <TextContent
                width = {props.width}
                title = 'Projects'
                content = {Projects}
            />
        </main>
    )
}