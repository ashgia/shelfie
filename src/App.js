import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryList: []
    };
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
        <Product />
      </div>
    );
  }
}

export default App;
