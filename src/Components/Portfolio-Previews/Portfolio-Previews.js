import './Portfolio-Previews.css'
import { useState } from 'react';


export default function Previews(props){

    const [activeId, setActiveId] = useState('1')

    const handleMouseEnter = id =>{
        setActiveId(id);
    }

    return(
        <div className='preview--outer-container row margin-bottom--big'>
            <div className={`${props.width < 800 ? '' : 'featured-title flex-end container col col-1 a--align-right'}`}>
            <p className={`${props.width < 800 ? '':'a--rotate-left-text a--no-margin'}`}>More Case Studies</p>
            </div>
            <div className={`${props.width < 800 ? 'col-12':'preview-images--container col-10'}`}>
            <a href={props.links[0].link} id='1' className={`preview--container ${props.width < 800 ? 'col-12' : activeId === '1' ? 'col portfolio-item col-6' : 'col portfolio-item col-4'}`} onMouseEnter={() => handleMouseEnter('1')}>
                <img className='preview-image' src={props.width < 800 ? props.links[0].image : activeId === '1' ? props.links[0].image : props.links[0].inactive} alt={props.links[0].alt}/>
                <h5 className='preview-title'>{props.links[0].title}</h5>
            </a>
            
            <a href={props.links[1].link} id='2' className={`preview--container ${props.width < 800 ? 'col-12' : activeId === '2' ? 'portfolio-item col-6' : ' portfolio-item col-4'}`} onMouseEnter={() => handleMouseEnter('2')}>
                <img className='preview-image' src={props.width < 800 ? props.links[1].image : activeId === '2' ? props.links[1].image : props.links[1].inactive} alt={props.links[1].alt}/>
                <h5 className='preview-title'>{props.links[1].title}</h5>
            </a>
            </div>
        </div>
    )
}

/*

<div
            className={`${ props.width < 800 ? 'portfolio-item--mobile' : props.isActive ? 'col box portfolio-item col-6' : 'col-3 col box portfolio-item '}
            `}
            onMouseEnter={() => props.onMouseEnter(props.id)}
            >
                <a className='link--container' href={props.link}>
                <div className='image--container'>
                    <img className={` ${props.width < 800 ? 'image--mobile': 'image'}
                        `}
                        src={props.width <800 ? props.image : props.isActive? props.image : props.inactive} alt={props.name}/>
                </div>
                <div className={`${props.width < 800 ? 'gradiation--mobile' : props.isActive ? 'gradiation active':'gradiation inactive'}`}></div>
                <div className={`
                        ${props.width < 800 ? 'title--mobile' : props.isActive ? 'title a--rotate-vertical' : 'title a--rotate-left'}
                    `}>
                    <h2 className={`
                        ${props.width < 800 ? 'margin-bottom--small' : ''}
                    `}>
                        {props.name}
                    </h2>
                    <form action={props.link}>
                        <button className={`${props.width < 800 ? 'portfolio-button':'a--display-none'}`}> Read more </button>
                    </form>
                </div>
                </a>
            </div>
    );
}

*/