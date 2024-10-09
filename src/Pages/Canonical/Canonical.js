import React from "react";
import './Canonical.css';
import Cover from "../../Components/Cover/Cover";
import Obi from "../../Assets/Images/obiCover.webp"
import Content from "../../Components/Content/Content";
import image from "../../image-sample.jpg";
import rebrandCover from "../../Assets/Images/Cover-Rebrand.webp";
import rebrandCoverBW from "../../Assets/Images/Cover-Rebrand-BW.webp";
import benchmark from "../../Assets/Images/Benchmarking.jpg";
import ideation from "../../Assets/Images/Ideation.jpg";
import iteration1 from "../../Assets/Images/iteration-1.jpg";
import iteration2 from "../../Assets/Images/iteration-2.jpg";
import iteration3 from "../../Assets/Images/iteration-3.jpg";
import iteration4 from "../../Assets/Images/iteration-4.jpg";
import CollageContent from "../../Components/Collage-Content/CollageContent";
import NumbersContent from "../../Components/Numbers-Content/NumbersContent";
import Previews from "../../Components/Portfolio-Previews/Portfolio-Previews";
import CanonicalCover from "../../Assets/Images/canonicalImage.webp";
import ObiBW from "../../Assets/Images/obiCoverBW.webp";


export default function Canonical(props){
    return(
        <main>
        <Cover
        width={props.width}
        title = {'Canonical career progression page'}
        content = {'In 2022 Canonical was scaling one part of this was hiring more people. The career progression page was part of this effort. The goal was to create an interactive page that shows off how Canonical supports, values, and helps their employee’s within the company.'}
        role = {'Visual Designer'}
        collab1 = {'Carlos Wu - Development'}
        collab2 = {'Lyubomir Popov - Feedback'}
        image={CanonicalCover}
        />
        <Content
        width={props.width}
        title={'process'}
        content={'The process for this project is iterative and collaborative, involving cross-departmental efforts with the UX, UX research, and UI teams. The workflow includes:'}
        list={['Research', 'Benchmarking', 'Ideation', 'Iteration', 'Development']}/>

        <Content
        width={props.width}
        title={'research'}
        content={'The UX team initiated research for this page by conducting brainstorming sessions and utilizing anonymized questions gathered from applicants during their interviews as key sources of insight.'}
        />

        <Content
        width={props.width}
        title={'benchmarking'}
        images = {[{pic:benchmark, alt:'Benchmarked websites'}]}
        content={`This phase involved working closely with the UX team to define our visual direction through structured brainstorming sessions and benchmarking activities on Miro.`}
        />

        <Content
        width={props.width}
        title={'ideation'}
        content = {`The ideation stage focused on exploring various layouts and potential components for the page’s content. A pre-existing design system, actively utilized during this phase, guided the development of these concepts.`}
        image = {[{pic:ideation, alt:'Process of visual exploration'}]}
        />
        <CollageContent
        width = {props.width}
        title = {'iteration'}
        content = {`Multiple iterations were developed based on feedback from both UX and UI colleagues. Adjustments were made in response to research-driven UX evaluations and visual design reviews. Due to the page’s unique interactive nature, it required more in-depth feedback beyond the standard levels typically provided.`}
        images = {[
            {pic:iteration1, alt:'first iteration'},
            {pic:iteration2, alt:'second iteration'},
            {pic:iteration3, alt:'third iteration'},
            {pic:iteration4, alt:'fourth iteration'}
        ]}
        />

        <NumbersContent
        width={props.width}
        title={'impact'}
        number1={`+21%`}
        text1={`Active time compared to previous page`}
        number2={`+23%`}
        text2={`Leads to open positions in the company directly from the page`}
        number3={`-13%`}
        text3={`Exits compared to previous page`}
        />

        <Content
        width={props.width}
        title={'conclusion'}
        content = {'Looking back, it would be great to have had time for a proper quality assurance although there were other pages that were more urgent, There’s a lot of points that could be improved in development and using pre-existing interaction frameworks rather than manually animating every interaction instead. Overall the impact has shown positive results despite the downsides. '}
        />  

        <Previews
        width={props.width}
        links={[
            {
                link: '/Ubuntu-Rebrand',
                image: rebrandCover,
                inactive:rebrandCoverBW,
                alt: 'Ubuntu Rebrand Project 2023',
                title: 'Ubuntu Rebrand 2023'
            },
            {
                link: '/Obi',
                image: Obi,
                inactive:ObiBW,
                alt: 'Obi Project',
                title: 'Obi'
            },
        ]}
        />
        </main>
    )
}