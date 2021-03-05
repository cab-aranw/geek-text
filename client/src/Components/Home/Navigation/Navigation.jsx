import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './Navigation.css';
import {Link} from 'react-router-dom';
import {Avatar, formatMs} from '@material-ui/core';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {DropDownMenu} from '../UserDropDownMenu/DropDownMenu';

export const Navigation = () =>{
    const token = localStorage.getItem('token') || false;

    
    return (
        <div className = "nav">
            <div className = "nav-left">
                <MenuBookIcon className = "logo"/>
                <Link to="/" className="Router__link">
                    <h1 className = "header">
                    <span className = "header-start">e-</span>
                    <span className = "header-end">BookStore</span>
                    </h1>
                </Link>
            </div>
            <div className = "nav-right">
                <div className = "nav-right-booklist nav-link">
                    <h4 className = "links">View Books</h4>
                </div>
                <div className = "nav-right-auth nav-link">
                { token ? null : <Link to="/auth" className="Router__link">
                        <h4 className = "links">Sign-up/Sign-in</h4>
                    </Link>}
                </div>
                <div className = "nav-right-addBook nav-link">
                    {token ? <h4 className="links">Add New Book</h4> : null}
                </div>
                <div>
                    {
                        token ? <Popup trigger={<Avatar src = "" alt = "User Profile"/>} 
                                    position="bottom right">
                                    <DropDownMenu/>
                                </Popup> 
                    :null }
                </div>
            </div>
        </div>   
    )
}