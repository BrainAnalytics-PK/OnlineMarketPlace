// to Fetch Data from Back end
import React from "react";
import { Grid } from "@material-ui/core";
import "./dailyDealsStyles.css";
import image4 from "../../assets/4.webp";
import image5 from "../../assets/5.webp";
import image6 from "../../assets/6.webp";
import image7 from "../../assets/7.webp";
import image8 from "../../assets/8.webp";
import image9 from "../../assets/9.webp";
import DailyDeals from "./DailyDeals";

const DealsData = [
  {
    id: 1,
    title: "Special Deals On Headphones",
    image: image4,
    oldPrice: "$ 299",
    newPrice: "$ 199",
  },
  {
    id: 2,
    title: "Special Deals On Headphones",
    image: image5,
    oldPrice: "$ 299",
    newPrice: "$ 199",
  },
  {
    id: 3,
    title: "Special Deals On Headphones",
    image: image6,
    oldPrice: "$ 299",
    newPrice: "$ 199",
  },
  {
    id: 4,
    title: "Special Deals On Headphones",
    image: image7,
    oldPrice: "$ 299",
    newPrice: "$ 199",
  },
  {
    id: 5,
    title: "Special Deals On Headphones",
    image: image8,
    oldPrice: "$ 299",
    newPrice: "$ 199",
  },
  {
    id: 6,
    title: "Special Deals On Headphones",
    image: image9,
    oldPrice: "$ 299",
    newPrice: "$ 199",
  },
];

const Deals = () => {
  return (
    <main>
      <div className="deals-container">
        <h3>Special Deals On Selected Items</h3>
        <div className="marquee">
          <Grid container justifyContent="center">
            {DealsData.map((deal) => (
              <Grid item key={deal.id} xs={6} sm={6} md={2}>
                <DailyDeals deal={deal} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </main>
  );
};

export default Deals;
