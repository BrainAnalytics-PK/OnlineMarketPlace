// To display data on Front End
import React from "react";
import "./dailyDealsStyles.css";

const DailyDeals = ({ deal }) => {
  return (
    <>
      <div className="deal-card">

          <h3>{deal.title}</h3>
          <img className="deals-container-img" src={deal.image} alt="" />
          <p>
            <br /> <br />
            Before <strike>{deal.oldPrice}</strike>
          </p>
          <p>
            Now <b>{deal.newPrice}</b>
          </p>
          <button className="deal-btn">Get Now!!</button>
      </div>
    </>
  );
};

export default DailyDeals;
