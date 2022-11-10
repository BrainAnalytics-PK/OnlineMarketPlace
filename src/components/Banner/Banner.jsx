import React from 'react';
import BannerData from './BannerData';
import { Grid } from '@material-ui/core';
import BannerImage from "../../assets/2.jpg";

const ad = [
  {
    id:1,
    image:BannerImage,
  }
]

const Banner = () => {
  return (
    <main>
      <Grid container justifyContent='center'>
        {
          ad.map((adBanner)=>(
            <Grid item key={adBanner.id} xs={12} sm={12} md={12}>
              <BannerData adBanner={adBanner} />
            </Grid>
          ))
        }
      </Grid>
    </main>
  )
}

export default Banner