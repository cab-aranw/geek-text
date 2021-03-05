import React, {useState} from 'react';/*useState is a react hook for state management */
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {SideBarLayOut} from './SideBarLayOut';
import './SideBar.css';
import {Link} from 'react-router-dom'

export const SideBar = () =>{
    /*[actual state, the function to set the state] = useState(initialValue)*/
    const [ isCreditCardMenuOpened , setIsCreditCardMenuOpened] = useState(false);
    const [ isShippingMenuOpened , setIsShippingMenuOpened] = useState(false);
    const OpenCreditCardMenu = () => {
        setIsCreditCardMenuOpened(!isCreditCardMenuOpened);
        setIsShippingMenuOpened(false);
    }
    const OpenshippingMenu = () => {
        setIsShippingMenuOpened(!isShippingMenuOpened);
        setIsCreditCardMenuOpened(false);
    }
    return(
        <div className = "sidebar">
            <Link to = "/dashboard/update-info" className = "Router__link">
                <SideBarLayOut Icon = {PersonPinIcon} text = {`Manage Personal Information`}/>{/* We give the key(Icon) and the value(PersonPin..) + text with the text that will be showed  */}
            </Link>
            <Link to = "/dashboard/update-login-details" className = "Router__link">
                <SideBarLayOut Icon = {VpnKeyIcon} text = {`Manage Logging Details`}/>
            </Link>
            <div className = "credit-menu-option">
                <div onClick = {OpenCreditCardMenu}>
                    <SideBarLayOut  Icon = {CreditCardIcon} text = {`Manage Credit Card Information`}/>
                </div>
                    {
                        ! isCreditCardMenuOpened ? null : <div className = "credit-card-menu">
                            <Link to ="/dashboard/add-new-credit-card" className = "Router__link">
                                <h4 className = "credit-card-menu-options">- Add new Credit card</h4>
                            </Link>
                            
                            <h4 className = "credit-card-menu-options">- Manage Credit card</h4>
                        </div>
                    }
            </div>
            <div className = "shipping-menu-option">
                <div onClick = {OpenshippingMenu}>
                <SideBarLayOut Icon = {LocalShippingIcon} text = {`Manage Shipping Addresses`}/>
                </div>
                    {
                        ! isShippingMenuOpened ? null : <div className = "shipping-menu">
                            
                                <h4 className = "shipping-menu-options">- Add new Shipping Address</h4>
                           
                            <h4 className = "shipping-menu-options">- Manage Shipping Address</h4>
                        </div>
                    }
            </div>
        </div>
    )
}

