import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let inventoryList = this.props.inventoryList.map(
      (productName, price, imgurl) => {
        return (
          <div>
            <Product />
          </div>
        );
      }
    );
    return <div className="dashboard"> {inventoryList} </div>;
  }
}
export default Dashboard;
