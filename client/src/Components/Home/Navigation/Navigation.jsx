import React from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './Navigation.css'
import {Link} from 'react-router-dom'
export const Navigation = () =>{
    return (
        <div className = "nav">
            <div className = "nav-left">
                <MenuBookIcon className = "logo"/>
                <h1 className = "header">
                    <span className = "header-start">e-</span>
                    <span className = "header-end">BookStore</span>
                </h1>
            </div>
            <div className = "nav-right">
                <div className = "nav-right-booklist nav-link">
                    <h4 className = "links">View Books</h4>
                </div>
                <div className = "nav-right-auth nav-link">
                    <Link to = "/auth" className = "Router_Link">
                        <h4 className = "links">Sign-up/Sign-in</h4>
                    </Link>
                </div>
                <div className = "nav-right-addBook nav-link">
                    <h4 className = "links">Add New Book</h4>
                </div>
            </div>
        </div>   
    )
}