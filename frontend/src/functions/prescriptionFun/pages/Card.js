import React from "react";
import "./Card.css";

const Card = ({ doctorName, hospitalName, presDate, expDate, onCardClick }) => {
  return (
    <div className="cardContainer">
      <div className="cardImage">{/* <img src={image} alt="" /> */}</div>

      <div className="cardInfo">
        <h2 className="byDoctor">By {doctorName}</h2>
        <h3 className="fromHospital">{hospitalName}</h3>

        <div className="dates">
          <p className="preDate">Prescribed On : {presDate}</p>
          <p className="expDate">Expired On : {expDate}</p>
        </div>

        <button className="btnView " onClick={onCardClick}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
