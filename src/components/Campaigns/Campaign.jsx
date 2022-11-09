// To Display Campaign Data On front - end
import React from "react";
import "./campaignStyles.css";
import { Paper } from "@material-ui/core";

const Campaign = ({ campaign }) => {
  return (
    <>
      <Paper>
        <div className="campaign-cards">
          <h4>{campaign.Name}</h4>
          <img className="campaign-img" src={campaign.image} alt="" />
          <button>{campaign.btnText}</button>
        </div>
      </Paper>
    </>
  );
};

export default Campaign;