import React from 'react';
import "./SideBarLayOut.css"

export const SideBarLayOut = ({Icon, text}) =>{
    return(
        <div className = "sidebar-layout">
           <Icon/>
           <h4 className = "sidebar-text">{text}</h4>
        </div>
    )
}
