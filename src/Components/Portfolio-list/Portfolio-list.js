import PortfolioItem from "../Portfolio-item/Portfolio-item";
import '../Portfolio-item/Portfolio-item.css'
import { contents } from "./Portfolio-content";
import { useState } from "react";

export const PortfolioList = (props) =>{
    const [activeId, setActiveId] = useState(1)

    const handleMouseEnter = id =>{
        setActiveId(id);
    }

    return(
        <div className={`${props.width < 800 ? 'portfolio-list--mobile margin-bottom--med' :'portfolio-list col-10 margin-bottom--big'}`}>
            {
                contents.map((content)=>{
                    return(
                        <PortfolioItem
                        name = {content.name}
                        key = {content.id}
                        id = {content.id}
                        link = {content.link}
                        image={content.image}
                        inactive={content.inactive}
                        isActive = {activeId === content.id}
                        onMouseEnter={handleMouseEnter}
                        width = {props.width}
                        />
                    )
                })
            }
        </div>
    )
}