import React from 'react';
import "../PersonalInfoManager/PersonalInfoManager.css";

export const NewCreditCard = () =>{
    return(
        <div>
            <form className = "personal-info-update-form">
                <h2>
                    Add new credit card
                </h2>
                <label>Card Holder</label>
                <input type = "text" placeholder = "Enter card holder"/>
                <label>Card Number</label>
                <input type = "text" placeholder = "Enter Card Number"/>
                <label>Expiration date</label>
                <span>
                    <input type = "text" placeholder = "Enter exp month"/>
                    <input type = "text" placeholder = "Enter exp year"/>
                </span>
                <label style ={{marginTop:"1rem"}}>CVC</label>
                <input type = "text" placeholder = "Enter security number"/>
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

 