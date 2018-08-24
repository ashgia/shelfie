import React, { Component } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler(event) {
    this.setState({
      name: event.target.value,
      price: event.target.value,
      imgurl: event.target.value
    });
  }
  submitHandler(event) {
    console.log("Form value: " + this.state.inputvalue);
    event.preventDefault();
  }
  clearInput() {
    this.setState({
      name: "",
      price: 0,
      imgurl: ""
    });
  }

  render() {
    return (
      <div className="formbox">
        <form onSubmit={this.submitHandler}>
          <label> Product Name: </label>
          <Input value={this.state.name} changed={this.changeHandler} />
          <label> Price: </label>
          <Input value={this.state.price} changed={this.changeHandler} />
          <label> Image URL: </label>
          <Input value={this.state.imgurl} changed={this.changeHandler} />
          {/* <Button clicked={() => this.addToInventory(index)}>
            Add to Inventory
          </Button> */}
          <Button clicked={() => this.clearInput()}>Cancel</Button>
        </form>
      </div>
    );
  }
}

export default Form;
