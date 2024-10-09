import React from "react";
import '../../CSS/design-system.css'
import '../../CSS/appearance.css';
import './Home.css';
import { PortfolioList } from "../../Components/Portfolio-list/Portfolio-list";


export const Home = (props) =>{
    return(
    <div className="App"> 
      <main className='home--container row'>
        <div className={`${props.width < 800 ? '' : 'featured-title flex-end container col col-1 a--align-right'}`}>
         <p className={`${props.width < 800 ? '':'a--rotate-left-text a--no-margin'}`}>Featured Works</p>
        </div>
          <PortfolioList
          width = {props.width}
          />
      </main>
    </div>
    )
}