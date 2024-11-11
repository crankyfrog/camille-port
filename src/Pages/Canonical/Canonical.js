import React from "react";
import './Canonical.css';
import Obi from "../../Assets/Images/obiCover.webp"
import wireframe from "../../Assets/Images/wireframes.webp"
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
import carousel from "../../Assets/video/carousel.webm"
import cssText from "../../Assets/video/cssText.webm"
import '../../Components/Cover/Cover.css';


export default function Canonical(props){
    return(
        <main>
        <div className={`${props.isMobile ? 'row--mobile cover--container' : 'row margin-bottom--med'}`}>
        <div className={`${props.isMobile ? 'col col-12' : 'col col-4 text-container'}`}> {/* col-5 in total */}
            <h2 className="cover-title margin-bottom--med">
            Canonical career <br/> progression page
            </h2>
            <h3 className="a--h5 margin-bottom--small">
                Overview
            </h3>
            <p>
            This project aimed to both attract new talent and support internal growth at Canonical by providing an engaging, dynamic view of career paths, celebrating the company’s culture, and illustrating available development opportunities. By highlighting how Canonical supports employees at every stage of their journey, the page was designed to reflect a culture of growth, learning, and collaboration.
            </p>
            <h3 className="a--h5 margin-bottom--small">
                Role
            </h3>
            <p>
            Visual Design
            </p>
            <h3 className="a--h5 margin-bottom--small">
                Collaborators
            </h3>
            <p className="margin-bottom--med">
            Carlos Wu Fei - Development
            <br/>
            Lyubomir Popov - Feedback
            </p>
        </div>
        <div className={`${props.isMobile ? 'cover-image--container--mobile col col-12 margin-bottom--med' : 'col col-5 cover-image--container'}`}>
            <img className='cover-image' src={CanonicalCover} alt="Canonical"/>
        </div>
        </div>

        {/* Challenges & Solution */}
        <div className={`text-content--container ${props.isMobile ? 'row--mobile margin-bottom--med' : 'row flex-end margin-bottom--med'}`}>
            <hr className={`margin-bottom--small${props.isMobile ? 'col col-12':'col col-10'}`}/>
            <div className="text--container row col col-10">
                <h3 className={`col small-caps margin-bottom--small ${props.isMobile ? 'col-12' : 'col-2'}`}>CHALLENGES & SOLUTIONS</h3>
                <div className={`a--no-margin-right col ${props.isMobile? 'col-12' : 'col-8'}`}>
                <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>One of the unique challenges in designing Canonical’s career progression page was aligning it with the brand’s predominantly static visual identity while introducing interactive animations. Given Canonical’s existing static component library, I had to evaluate the feasibility of adding animations within the project’s timeline.</p>
                <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>To ensure the page remained both informative and visually appealing, I broke the content into digestible, bite-sized sections. This helped create a well-balanced, user-friendly layout, which made the information more accessible while boosting user engagement.
                </p>
                </div>
            </div>    
        </div>

        {/* Methodology */}
        <div className={`text-content--container ${props.isMobile ? 'row--mobile margin-bottom--med' : 'row flex-end margin-bottom--med'}`}>
            <hr className={`margin-bottom--small${props.isMobile ? 'col col-12':'col col-10'}`}/>
            <div className="text--container row col col-10">
                <h3 className={`col small-caps margin-bottom--small ${props.isMobile ? 'col-12' : 'col-2'}`}>METHODOLOGY</h3>
                <div className={`a--no-margin-right col ${props.isMobile? 'col-12' : 'col-8'}`}>
                    <h5>Research & Discovery</h5>
                    <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>The design process began with research to understand user needs and analyze industry trends. I looked at similar career pages and recruitment websites to identify effective layouts and interactive elements. I also reviewed Canonical’s current brand guidelines to ensure consistency throughout the page.</p>
                    <div className={`margin-bottom--img ${props.isMobile? 'image-mobile' : 'image-desktop'}`}>
                        <img className='image-content' src={benchmark} alt="research into industry trends"/>
                    </div>

                    <h5>Wireframes & Initial Concepts</h5>
                    <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>I created wireframes to define the structure and flow of the page. The wireframes focused on a clean, modular layout that prioritized usability while maintaining a visually appealing design. The sections were organized into clear categories, such as career paths, company values, and growth opportunities.
                    </p>
                    <div className={`margin-bottom--img ${props.isMobile ? 'image-mobile' : 'image-desktop'}`}>
                        <img className='image-content' src={wireframe} alt="page wireframe"/>
                    </div>

                    <h5>Prototyping & Design</h5>
                    <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                    For prototyping and design, I used Figma for its flexibility, allowing for rapid iteration and easy collaboration with stakeholders. I developed interactive prototypes to showcase animations and transitions, ensuring the design aligned with Canonical’s brand while adding engaging, interactive elements to enhance the user experience.
                    </p>
                    <div className={`margin-bottom--img ${props.isMobile ? 'image-mobile' : 'image-desktop'}`}>
                        <img className='image-content' src={ideation} alt="different ideations"/>
                    </div>

                    <h5>User Testing & Feedback</h5>
                    <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                    To validate the design, I conducted usability testing with a small group of Canonical employees and prospective candidates. Their feedback was invaluable in refining both the layout and content structure, ensuring that the page was not only visually appealing but also intuitive and easy to navigate.
                    </p>
                    <CollageContent
                        width = {props.width}
                        images = {[
                            {pic:iteration1, alt:'first iteration'},
                            {pic:iteration2, alt:'second iteration'},
                            {pic:iteration3, alt:'third iteration'},
                            {pic:iteration4, alt:'fourth iteration'}
                        ]}
                        />
                </div>
            </div>    
        </div>

        {/* Collaboration*/}
        <div className={`text-content--container ${props.isMobile ? 'row--mobile margin-bottom--med' : 'row flex-end margin-bottom--med'}`}>
            <hr className={`margin-bottom--small${props.isMobile ? 'col col-12':'col col-10'}`}/>
            <div className="text--container row col col-10">
                <h3 className={`col small-caps margin-bottom--small ${props.isMobile ? 'col-12' : 'col-2'}`}>COLLABORATION</h3>
                <div className={`a--no-margin-right col ${props.isMobile? 'col-12' : 'col-8'}`}>
                <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                    I worked closely with HR and copywriters to gather content for the career progression page. HR provided insights into Canonical’s growth paths and employee development, while the copywriters helped craft messaging that was clear, engaging, and aligned with the company’s tone and voice.
                </p>
                <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                    Additionally, I collaborated with the marketing team to ensure the design was in line with Canonical’s recruitment goals. Their feedback helped ensure the page would resonate with potential candidates, making it appealing and reflective of Canonical’s brand values.
                </p>
                </div>
            </div>    
        </div>

        {/* Unique Visuals*/}
        <div className={`text-content--container ${props.isMobile ? 'row--mobile margin-bottom--med' : 'row flex-end margin-bottom--med'}`}>
            <hr className={`margin-bottom--small${props.isMobile ? 'col col-12':'col col-10'}`}/>
            <div className="text--container row col col-10">
                <h3 className={`col small-caps margin-bottom--small ${props.isMobile ? 'col-12' : 'col-2'}`}>Visuals & Animations</h3>
                <div className={`a--no-margin-right col ${props.isMobile? 'col-12' : 'col-8'}`}>
                <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                    To make the page more engaging and dynamic, I designed several unique visuals and animations:
                </p>
                <ul>
                    <li className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                        Employee Testimonial Carousel: A carousel showcasing different employee testimonials, allowing users to easily browse through personal stories about career growth and experiences at Canonical.
                        <video className="margin-top--small margin-bottom--img" width="100%" height="100%" autoPlay muted loop>
                            <source src={carousel} type="video/webm"/>
                        </video>
                    </li>
                    <li className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                        Custom CSS Text Animations: These animations highlighted key pieces of content, drawing users' attention to important information without overwhelming the page’s design.
                        <video className="margin-top--small margin-bottom--img" width="100%" height="100%" autoPlay muted loop>
                            <source src={cssText} type="video/webm"/>
                        </video>
                    </li>
                </ul>
                <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                    These elements were designed to be both visually appealing and aligned with accessibility standards, ensuring that the page was user-friendly and inclusive.
                </p>
                </div>
            </div>    
        </div>

        {/* Impact */}
        <NumbersContent //Content needs to be changed
                width={props.width}
                title={'impact'}
                number1={'+21.5%'}
                text1={'Active time compared to previous page'}
                number2={'23%'}
                text2={'Leads to open positions in the company directly from the page'}
                number3={'-13%'}
                text3={'Exits compared to previous page'}
            />

        {/* Conclussions */}
        <div className={`text-content--container ${props.isMobile ? 'row--mobile margin-bottom--med' : 'row flex-end margin-bottom--med'}`}>
            <hr className={`margin-bottom--small${props.isMobile ? 'col col-12':'col col-10'}`}/>
            <div className="text--container row col col-10">
                <h3 className={`col small-caps margin-bottom--small ${props.isMobile ? 'col-12' : 'col-2'}`}>CONCLUSIONS</h3>
                <div className={`a--no-margin-right col ${props.isMobile? 'col-12' : 'col-8'}`}>
                <p className={`${props.isMobile? 'col-12' : 'paragraph'}`}>
                Reflecting on the project, additional time for quality assurance would have been ideal, but other pages took priority. There are opportunities for improvement in the development process, such as using pre-existing interaction frameworks rather than manually animating every component. Despite these challenges, the page delivered positive results, demonstrating its success in engaging users and aligning with Canonical’s growth objectives.
                </p>
                </div>
            </div>    
        </div>

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