// To Fetch Data from Back-End
import React from "react";
import { Grid } from "@material-ui/core";
import image1 from "../../assets/1.webp";
import image2 from "../../assets/2.webp";
import image3 from "../../assets/3.webp";
import Campaign from "./Campaign";

const CampaignData = [
  {
    id: 1,
    Name: "Amazing Sale on Headphones",
    image: image1,
    btnText: "BUY NOW!!",
  },
  {
    id: 2,
    Name: "Amazing Sale on Headphones",
    image: image2,
    btnText: "BUY NOW!!",
  },
  {
    id: 3,
    Name: "Amazing Sale on Headphones",
    image: image3,
    btnText: "BUY NOW!!",
  },
];

const Campaigns = () => {
  return (
    <main>
       <div>
        <div className="campaign-title">
          <h2>Campaigns</h2>
          <h3>Flash SALE!!!</h3>
          <p>Upto 70% OFF!!! Hurry Up till Stock </p>
        </div>
      </div>
      <Grid container justifyContent="center" spacing={0}>
        {CampaignData.map((campaign) => (
          <Grid item key={campaign.id} xs={4} sm={4} md={4}>
            <Campaign campaign={campaign} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Campaigns;
