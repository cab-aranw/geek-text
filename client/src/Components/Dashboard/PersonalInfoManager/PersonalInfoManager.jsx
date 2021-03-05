import React from 'react';
import "./PersonalInfoManager.css";

export const PersonalInfoManager = () =>{
    return(
        <div>
            <form className = "personal-info-update-form">
                <h2>
                    Update Personal Information
                </h2>
                <label>Full Name</label>
                <input type = "text" placeholder = "Enter new full name"/>
                <label>Email</label>
                <input type = "email" placeholder = "Enter new email"/>
                <label>Nickname</label>
                <input type = "text" placeholder = "Enter new nickname"/>
                <label>Home Address</label>
                <input type = "text" placeholder = "Enter new home address"/>
                <p className = "btn-wrapper">
                    <span className = "btn-update-info">{/*Inline element*/}
                        Update Information
                    </span>
                    <span className = "btn-cancel">{/*Inline element*/}
                        Cancel
                    </span>
                </p>
            </form>
            <h2>
                
            </h2>
            <h2>
                
            </h2>
            <h2>
                
            </h2>

        </div>
    )
}

 