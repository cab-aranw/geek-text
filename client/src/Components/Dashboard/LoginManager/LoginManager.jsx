import React from 'react';
import "../PersonalInfoManager/PersonalInfoManager.css";

export const LoginManager = () =>{
    return(
        <div>
            <form className = "personal-info-update-form">
                <h2>
                    Update Login Credentials
                </h2>
                <label>Email</label>
                <input type = "email" placeholder = "Enter new email"/>
                <label>Password</label>
                <input type = "password" placeholder = "Enter new login password"/>
                <p className = "btn-wrapper">
                    <span className = "btn-update-info">{/*Inline element*/}
                        Update Login Credentials
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

 