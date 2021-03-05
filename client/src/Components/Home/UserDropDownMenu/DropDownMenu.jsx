import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./DropDownMenu.css"
import {Link} from 'react-router-dom'

export const DropDownMenu = () =>{

    const Logout = ()=>{
        localStorage.removeItem('token');
        window.location.reload(false)
    }
    return (
        <div className = "drop-down-menu"> 
            <Link to="./dashboard" className = "Router__link">{/*Allows the link to return to black color after clicking*/}
                <div className = "menu-option">
                    <DashboardIcon/>
                    <h3 className = "menu-text">User Dashboard</h3>
                </div >
            </Link>
            <Link to="/" className = "Router__link">
                <div className = "menu-option">  
                    <ExitToAppIcon/>
                    <h3 className = "menu-text">Logout</h3>
                </div>
            </Link>  
            
            
            
            
               
        </div>
    )
}
