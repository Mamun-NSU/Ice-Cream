import React from "react";
import classes from "./Builder.module.css";
import Items from "./Items/Items";
import Modal from "./Modal/Modal";
import TotalPrice from "./TotalPrice/TotalPrice";

const Builder = () => {
  return (
    <div>
      <div className={classes.Builder}>
        <h3>Build your own Ice Cream Sundae</h3>

        <Items />
        <TotalPrice />

        <button
          type="button"
          onclick="next()"
          className={[classes.order, "rounded"].join(" ")}
        >
          Add to Cart
        </button>
      </div>
      <Modal>Hello World</Modal>
    </div>
  );
};

export default Builder;
