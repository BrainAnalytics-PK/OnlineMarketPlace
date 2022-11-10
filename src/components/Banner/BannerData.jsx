import React from 'react'
import './BannerStyles.css';

const BannerData = ({adBanner}) => {
  return (
    <div className='Ad-Banner'>
        <img src={adBanner.image} alt="" />
    </div>
  )
}

export default BannerData