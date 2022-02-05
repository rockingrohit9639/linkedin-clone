import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FirberManualIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FirberManualIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA React is awesome", "Top News - 9999 Readers")}
      {newsArticle("COVID-19 - India Updates", "Top News - 8745 Readers")}
      {newsArticle("Tesla hits new heights", "Cars & Auto - 9587 Readers")}
      {newsArticle("Is redux too good?", "Code - 8745 Readers")}
      {newsArticle("Context API vs Redux", "Code - 5478 Readers")}
    </div>
  );
}

export default Widgets;
