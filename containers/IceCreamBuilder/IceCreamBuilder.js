import React, { Component } from "react";
import Builder from "../../components/Builder/Builder";
import classes from "./IceCreamBuilder.module.css";

export default class IceCreamBuilder extends Component {
  state = {};
  render() {
    return (
      <div className={['container', classes.container].join(' ')}>
        <iceCream />
        <Builder />
      </div>
    );
  }
}
