import React from "react";
import './Item.css'

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.Poster} alt="" />
      <p>{props.Title}</p>
      <div className="item-prices">
        <div className="item-new-price">{props.Year}</div>
      </div>
    </div>
  );
};

export default Item;
