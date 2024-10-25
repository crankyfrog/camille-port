import React from "react";
import './obi.css';
import Cover from "../../Components/Cover/Cover";
import Content from "../../Components/Content/Content";
import NumbersContent from "../../Components/Numbers-Content/NumbersContent";
import CollageContent from "../../Components/Collage-Content/CollageContent";
import CollageContent2 from "../../Components/Collage-Content-2/CollageContent2";
import researchAnalysis from "../../Assets/Images/researchAnalysis.png"
import flows from "../../Assets/Images/userflows.webp"
import siteMap from "../../Assets/Images/siteMap.webp"
import Previews from "../../Components/Portfolio-Previews/Portfolio-Previews";
import screen1 from "../../Assets/Images/1.0.webp"
import screen2 from "../../Assets/Images/1.1.webp"
import screen3 from "../../Assets/Images/1.2.webp"
import screen4 from "../../Assets/Images/1.3.webp"
import screen5 from "../../Assets/Images/ui1.0.webp"
import screen6 from "../../Assets/Images/ui1.1.webp"
import screen7 from "../../Assets/Images/ui1.2.webp"
import screen8 from "../../Assets/Images/ui1.3.webp"
import obiCover from "../../Assets/Images/obiCover.webp"
import test1 from "../../Assets/Images/test-1.webp"
import Canonical from "../../Assets/Images/canonicalImage.webp"
import CanonicalBW from "../../Assets/Images/canonicalImageBW.webp"
import rebrandCover from "../../Assets/Images/Cover-Rebrand.webp";
import rebrandCoverBW from "../../Assets/Images/Cover-Rebrand-BW.webp";

export default function Obi(props){
    return(
        <main>
            <Cover
                width = {props.width}
                title = {'Obi-Coach'}
                content ={'Working on an MVP for an application designed to connect users with personal fitness and wellness coaches. The project is funded by the government of Qatar with the goal of helping to reduce diabetes rates in the country.'}
                role={'UX/UI Design'}
                collab1={'Phani - Developer'}
                collab2={''}
                image={obiCover}
            />

            <Content
                width={props.width}
                props={props.width}
                title={'process'}
                list = {['Research','Flow Organization','Design','Development']}
            />

            <Content
                width={props.width}
                title={'Research'}
                content={'Obi Coach initially developed a platform based on conceptual ideas, with the early versions released without conducting comprehensive user research or fully understanding the distinct needs of various demographics. The current research process includes:'}
                list={['Identifying user needs through interviews with five participants from each demographic group.','Analyzing these interviews to uncover user pain points within the existing user journey, ensuring the platform better aligns with their expectations and requirements.']}
                images={[{pic: researchAnalysis, alt: 'Thematic Analysis of Interview'}]}
                secondary={'Interview analysis from user interviews.'}
            />

            <NumbersContent //Content needs to be changed
                width={props.width}
                title={'insights'}
                number1={'50%'}
                text1={'have undertaken diets that only work for a short time before they hit a plateaux.'}
                number2={'37%'}
                text2={'were frustrated by lack of results.'}
                number3={'20%'}
                text3={'felt that gyms in Qatar are inaccessible.'}
            />

            <Content
                width={props.width}
                title={'Design architecture and flow'}
                content={'With the research involved it was possible to define the minimum viable product(MVP). The architecture and the flows acts as the blue prints for the UI.'}
                images={[ //Content needs to be changed
                    {pic: siteMap, alt:'Site Map of Obi Coach'},
                    {pic: flows, alt:'Different user status flows'},
                ]}
            />

            <CollageContent
                width={props.width}
                title={'Wireframes Development'}
                content={'Based on the research conducted, the minimum viable product (MVP) was defined. The architecture and flows serve as blueprints for the user interface (UI).'}
                images={[  //Content needs to be changed
                    {pic:screen1, alt:'Programs screen'},
                    {pic:screen2, alt:'Home screen'},
                    {pic:screen3, alt:'Appointment screen'},
                    {pic:screen4, alt:'Coaching screen'}
                ]}
            />

            <CollageContent2
                width={props.width}
                title={'UX Testing'}
                content={'We tested how users interacted with the application by having them use the think-aloud method. They navigated the app on their own while sharing their thoughts out loud. We asked them to find specific screens and watched how long it took for them to get comfortable with the wireframes, which helped us figure out what needed to be improved.'}
                images={[ 
                    {pic: test1, alt:'UX Testing'},
                ]}
            />  


            <CollageContent
                width={props.width}
                title={'UI Development'}
                images={[  //Content needs to be changed
                    {pic:screen5, alt:'Programs screen UI'},
                    {pic:screen6, alt:'Home screen UI'},
                    {pic:screen7, alt:'Appointment screen UI'},
                    {pic:screen8, alt:'Coaching screen UI'}
                ]}
            />  

            <NumbersContent //Content needs to be changed
                width={props.width}
                title={'impact'}
                number1={'+21.5%'}
                text1={'have undertaken diets that only work for a short time before they hit a plateaux.'}
                number2={'37%'}
                text2={'were frustrated by lack of results.'}
                number3={'20%'}
                text3={'felt that gyms in Qatar are inaccessible.'}
            />

            <Content //Content needs to be changed
                width={props.width}
                title={'Conclusion'}
                content={'With the research involved it was possible to define the minimum viable product(MVP). The architecture and the flows acts as the blue prints for the UI.'}
            />

<Previews
        width={props.width}
        links={[
            {
                link: '/Canonical',
                image: Canonical,
                inactive: CanonicalBW,
                alt: 'Canonical Case Study',
                title: 'Canonical'
            },
            {
                link: '/Ubuntu-Rebrand',
                image: rebrandCover,
                inactive: rebrandCoverBW,
                alt: 'Ubuntu rebrand 2023 project',
                title: 'Ubuntu Rebrand 2023'
            }
        ]}
        />

        </main>
    )
}