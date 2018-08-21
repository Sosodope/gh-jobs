import React, { Component } from "react";

const Listings = props => {
  return (
    <div className="listings-wrapper">
      {props.items.map((item, index) => {
        return (
          <div className="listing">
            <img src={item.company_logo} alt={item.company} />
            <h4 key={index}>{item.company}</h4>
            <p>Location: {item.location}</p>
            <p>Type: {item.type}</p>
            <button className="listing-button">
              <a href={item.url} target="_blank">
                Read more
              </a>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
