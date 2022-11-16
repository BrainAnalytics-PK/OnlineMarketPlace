// To display data on Front End
import React from "react";
import { Paper } from "@material-ui/core";
import "./dailyDealsStyles.css";

const DailyDeals = ({ deal }) => {
  return (
    <>
      <Paper
        className="deal-card"
        variant="outlined"
        elevation={12}
        onClick={() => {
          alert(`Go to product page`);
        }}
      >
        <div className="deals">
          <p id="deal-tag">Top Selling</p>
          <img className="deals-container-img" src={deal.image} alt="" />
          <p className="card-title">{deal.title}</p>
          <div className="card-price-container">
            <p className="card-price-new">
              <b>PKR: {deal.newPrice}</b>
            </p>
            <p className="card-price-old">
              Before: <strike>PKR {deal.oldPrice}</strike>
            </p>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default DailyDeals;
