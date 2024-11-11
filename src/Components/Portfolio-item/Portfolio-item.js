import './Portfolio-item.css';

function PortfolioItem(props){



    return(
        <div
            className={`${ props.width < 800 ? 'portfolio-item--mobile' : props.isActive ? 'col box portfolio-item col-6' : 'col-3 col box portfolio-item '}
            `}
            onMouseEnter={() => props.onMouseEnter(props.id)}
            >
                <a className={`${props.width<800 ? 'link--container-mobile' : 'link--container'}`} href={props.link}>
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

export default PortfolioItem;