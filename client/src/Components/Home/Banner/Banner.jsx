import React from 'react'
import BannerImg from '../../../Assets/Banner1.jpg'
import './Banner.css'
export const Banner = () =>{
    return(
        <div>
            <div className="banner-container">
                <img src={BannerImg} alt="Home Banner" className="home-banner"/>
            </div>
            <div className="banner-text">
                <h3 className="banner-text-header">Books are life</h3>
                <button className="btn btn-check-newbooks">Check the latest releases</button>
            </div>
        </div>
        
    )
}