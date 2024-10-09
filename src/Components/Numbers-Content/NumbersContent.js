import './NumbersContent.css'

export default function NumbersContent (props) {
    return(
        <div className={`text-content--container ${props.width < 800 ? 'row--mobile margin-bottom--med' : 'row flex-end margin-bottom--med'}`}>
            <hr className={` numbers-section--hr ${props.width < 800 ? 'col col-12':'col-10'}`}/>
            <div className="text--container row col-10 a--margin-right"> 
                <h3 className="numbers-title small-caps col col-2 margin-bottom--small">{props.title}</h3>
                    <div className={`number--outer-container ${props.width < 1000 ? 'col-12' : 'col-8'}`}>
                        <div className={`number--container ${props.width < 1000 ? 'col-12' : 'col col-2'}`}>
                            <hr className={`${props.width < 1000 ? 'a--display-none':'numbers-hr'}`}></hr>
                            <p className='numbers a--h1'>{props.number1}</p>
                            <p>{props.text1}</p>
                        </div>
                        <div className={`number--container ${props.width < 1000 ? 'col-12' : 'col col-2'}`}>
                            <hr className={`${props.width < 1000 ? '':'numbers-hr'}`}></hr>
                            <p className='numbers a--h1'>{props.number2}</p>
                            <p>{props.text2}</p>
                        </div>
                        <div className={`number--container ${props.width < 1000 ? 'col-12' : 'col-2'}`}>
                            <hr className={`${props.width < 1000 ? '':'numbers-hr'}`}></hr>
                            <p className='numbers a--h1'>{props.number3}</p>
                            <p>{props.text3}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}