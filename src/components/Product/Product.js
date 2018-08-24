import React from "react";

function Product(props) {
  return (
    <div className="Product">
      <div className="productName">Product Name: {props.productName}</div>
      <div className="productPrice">Product Price: {props.price}</div>
      <div className="img">{props.imgurl}</div>
    </div>
  );
}

export default Product;
