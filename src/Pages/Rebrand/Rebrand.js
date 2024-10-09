import '../Rebrand/Rebrand.css';
import Cover from '../../Components/Cover/Cover';
import Content from '../../Components/Content/Content';
import CanonicalCover from "../../Assets/Images/canonicalImage.webp";
import CanonicalCoverBW from "../../Assets/Images/canonicalImageBW.webp";
import rebrandCover from "../../Assets/Images/Cover-Rebrand.webp";
import rebrandCoverBW from "../../Assets/Images/Cover-Rebrand-BW.webp";
import Obi from "../../Assets/Images/obiCover.webp";
import ObiBW from "../../Assets/Images/obiCoverBW.webp";
import CollageContent from '../../Components/Collage-Content/CollageContent';
import NumbersContent from '../../Components/Numbers-Content/NumbersContent';
import Previews from '../../Components/Portfolio-Previews/Portfolio-Previews';
import Color from '../../Assets/Images/Colors.webp';
import Icon1 from '../../Assets/Images/Icon1.webp';
import Icon2 from '../../Assets/Images/Icon2.webp';
import Theming from '../../Assets/Images/Theming.webp';
import Diversity from '../../Assets/Images/Diversity.webp';
import ubuntuPro from '../../Assets/Images/ubuntuPro.webp';
import ubuntuDesktop from '../../Assets/Images/ubuntuDesktop.webp';
import ubuntuServer from '../../Assets/Images/ubuntuServer.webp';

export default function Rebrand(props){
    return(
        <main>
             <Cover
                width={props.width}
                title = {'Canonical Rebranding 2023'}
                content = {'The 2023 Canonical rebrand modernized its website with a clean, intuitive design focused on accessibility and scalability across its diverse product offerings. The revamped site used bold typography, custom iconography, and illustrations to create a cohesive, enterprise-ready aesthetic. Simplified navigation and clearer content presentation made technical information more approachable, appealing to a wider audience. This redesign improved user engagement and reinforced Canonical’s position as a leading tech innovator.'}
                role = {'Visual Designer'}
                collab1 = {'Lyubomir Popov'}
                collab2 = {'Marcus Haslam'}
                collab3 = {'Julia Paluch'}
                image={rebrandCover}
                />

                <Content
                    width={props.width}
                    title={'process'}
                    list={['Audit & Researdch', 'Ideation', 'Documentation', 'Implementation']}
                    />   

                <Content
                    width={props.width}
                    title={'research'}
                    content = {'Internal research, conducted through stakeholder interviews, provided valuable insights into their diverse needs and perspectives. Based on this, we concluded that the new brand should be simple and modular to accommodate the unique requirements of each product.'}
                    />  

                <Content
                    width={props.width}
                    title="Ideation"
                    content={`
                        The ideation phase for the rebranding began with a deep dive into the insights gathered from stakeholder interviews. Recognizing the need for a simple and modular brand to serve diverse products, the design team brainstormed solutions that could unify the brand across various touchpoints while allowing flexibility for each product line.
                        \n
                        Key considerations included creating a visual system that could scale easily, ensuring consistency without sacrificing individuality. Concepts focused on clean, adaptable component layouts and versatile typography sets, allowing for clear differentiation while maintaining a cohesive overall brand identity.
                    `}
                />

                <CollageContent
                        width = {props.width}
                        title = {'Documentation'}
                        content = {`In the documentation phase, all elements from the ideation process were formalized into a comprehensive brand guideline.
                            This included detailed specifications for the different product logos, typography sets, iconography, and illustrations, ensuring that every component aligned with the vision of a simple, modular brand.
                            The guidelines outlined best practices for applying these elements across various mediums—digital platforms, marketing materials, and product interfaces—ensuring consistency while accommodating the unique needs of different products.`}
                        images = {[
                            {pic:Color, alt:'Color Documentation'},
                            {pic:Icon1, alt:'Icon Documentation'},
                            {pic:Icon2, alt:'Icon Documentation Continuation'},
                            {pic:Theming, alt:'Dark and Light Theme Documentation'}
                        ]}
                />

                <CollageContent
                        width = {props.width}
                        title = {'Implementation'}
                        content = {`The implementation phase focused on bringing the new brand elements to life across Canonical’s digital platforms, particularly its website. Following the guidelines from the documentation phase, the website was redesigned with a modular approach, allowing for easy scalability across different product lines. The updated typography and color palette were applied consistently, enhancing readability and visual cohesion while keeping the brand visually dynamic. Custom iconography and imagery were integrated to distinguish each product without deviating from the core brand identity. Navigation was simplified, content was reorganized for clarity, and responsiveness was optimized to ensure a seamless user experience across all devices. This phase ensured that the brand’s new, modern look was fully realized and accessible to users.`}
                        images = {[
                            {pic:ubuntuPro, alt:'Ubuntu Pro Page'},
                            {pic:ubuntuServer, alt:'Ubuntu Server Page'},
                            {pic:ubuntuDesktop, alt:'Ubuntu Desktop Page'},
                            {pic:Diversity, alt:'Canonical Diversity Page'}
                        ]}
                />

                <NumbersContent
                        width={props.width}
                        title={'impact'}
                        number1={`+24%`}
                        text1={`Increase in average sessions on rebranded pages.`}
                        number2={`-46%`}
                        text2={`Reduction in time spent on product page updates.`}
                        number3={`-40%`}
                        text3={`Average bounce rate reduction on redesigned pages compared to previous page`}
                        />

                <Content
                    width={props.width}
                    title="Conclusion"
                    content={`
                       The rebranding of Canonical’s website successfully delivered a modern, cohesive design while addressing diverse product needs. Throughout the implementation, we encountered design challenges, such as maintaining consistency across multiple products while ensuring each had a distinct identity.
                       \n
                       These issues were resolved by refining the modular design system, allowing flexibility in layouts, typography, and iconography without compromising brand unity. We also iteratively tested navigation and responsiveness to ensure a seamless user experience. Ultimately, the rebrand created a visually engaging, user-friendly website that aligns with Canonical’s evolving identity and product portfolio.
                    `} />

                <Previews
                        width={props.width}
                        links={[
                            {
                                link: '/Canonical',
                                image: CanonicalCover,
                                inactive: CanonicalCoverBW,
                                alt: 'Canonical Career Progressions Page',
                                title: 'Canonical'
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