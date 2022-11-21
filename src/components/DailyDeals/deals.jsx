// to Fetch Data from Back end
import React from "react";
import { Grid } from "@material-ui/core";
import "./dailyDealsStyles.css";
import image5 from "../../assets/5.webp";
import image10 from "../../assets/10.webp";
import image6 from "../../assets/6.webp";
import image7 from "../../assets/7.webp";
import image8 from "../../assets/8.webp"; 
import image9 from "../../assets/9.webp";
import DailyDeals from "./DailyDeals";

const DealsData = [
  {
    id: 1,
    title: "Red ear headphones with loud bass and superb quality sound ",
    image: image5,
    oldPrice: "$ 299",
    newPrice: "$ 199",
    ratings: "4.9"
  },
  {
    id: 2,
    title: "Sports Neck band with loud bass and superb quality sound",
    image: image10,
    oldPrice: "$ 299",
    newPrice: "$ 199",
    ratings: "4.6"
  },
  {
    id: 3,
    title: "Air darts pro wireless TWS with loud bass and superb quality sound",
    image: image6,
    oldPrice: "$ 299",
    newPrice: "$ 199",
    ratings: "3.8"
  },
  {
    id: 4,
    title: "Air Darts Pro wireless with loud bass and superb quality sound",
    image: image7,
    oldPrice: "$ 299",
    newPrice: "$ 199",
    ratings: "3.9"
  },
  {
    id: 5,
    title: "Air Darts Ultra with loud bass and superb quality sound",
    image: image8,
    oldPrice: "$ 299",
    newPrice: "$ 199",
    ratings: "3.2"
  },
  {
    id: 6,
    title: "Air Buds headphones with loud bass and superb quality sound",
    image: image9,
    oldPrice: "$ 299",
    newPrice: "$ 199",
    ratings: "4.8"
  },
];

const Deals = () => {
  return (
    <main>
      <div className="deals-container">
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
