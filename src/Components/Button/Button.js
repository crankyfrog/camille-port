import './Button.css';

function Button(props){
    return(
        <button className='button-positive'>
            {props.name}
        </button>
    );
}

export default Button;