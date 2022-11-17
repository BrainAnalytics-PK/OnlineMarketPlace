import React from "react";

const TopPickCard = ({ toppick }) => {
  return (
    <div>
      <p>{toppick.title}</p>
      <div className="Top-Card-Container">
        <img src={toppick.image} alt="" />
      </div>
    </div>
  );
};

export default TopPickCard;
