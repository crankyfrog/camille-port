import './CollageContent.css'

export default function CollageContent (props) {
    const isArray = x => Array.isArray(x);
    const isMobile = props.width < 800;

    const Collage = (z) =>{
        if (isArray(z.images)) {
            return (
            <div className={`${isMobile ? 'collage-container--mobile col col-12': 'col-8 collage--container a--no-margin-right'}`}>
             {
                z.images.map((pic, index) => (
                    <div className={` ${isMobile ? 'collage-image--mobile col col-5' : 'collage--image-container col col-2'}`} key={index}>
                        <img className='collage-image' src={pic.pic} alt={pic.alt} key={index} />
                    </div>
                ))
             }
            </div>
            )
        } else {
            return null;
        }
    }

    return(
        <div className={`text-content--container ${isMobile ? 'row--mobile margin-bottom--med' : 'row margin-bottom--med'}`}>
            <hr className={`a--no-margin-right${isMobile ? 'col col-12':'col col-10'}`}/>
            <div className="text--container row col col-10">
                <h3 className={`col small-caps margin-bottom--small ${isMobile? 'col-12' : 'col-2'}`}>{props.title}</h3>
                <div className={`collage--outer-container col ${isMobile ? 'col-12' : 'col-8 row'}`}>
                    <p className={`${props.content ? isMobile ? '' : 'paragraph' : 'a--display-none'}`}>{props.content}</p>
                    {Collage(props)}
                </div>
            </div>
        </div>
    )
}