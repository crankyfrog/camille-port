import React from "react";
import Menu from "../Menu/Menu.js"

export const Header = (props) =>{

return(
    <header className={`
        ${props.width < 800 ? 'row--small margin-bottom--med margin-top--small': props.width < 1512? 'row margin-bottom--big':'row margin-bottom--big'}`}>
      <div className={`col ${props.width < 800 ? 'col-12 ' : 'col-6'}`}>  
        <a className='HomeLink' href="/">
          <h1 className="a--h3 a--no-margin a--text-highlight">Camille Tindogan</h1>
          <h2 className="a--h4 a--no-margin">Product Designer</h2>
        </a>
      </div>
      <Menu
      width = {props.width} />
      </header>
)

}

export default Header;