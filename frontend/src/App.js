import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import cart from "../src/images.jpeg";
///import { deleteOrders } from "../../backend/controllers/control";

const statusOfOrder = () => {};

const cancelling = () => {
  this.setState({
    order_status: "Cancelled",
  });
};

function App() {
  return (
    <div className="Main One ">
      <div className="container">
        <div className="Left">
          <div className="searchBar">
            <div placeholder="Search" className="input" />
          </div>
        </div>
        <div className="center">
          <div className="Logo">Rabbit</div>
        </div>
      </div>
      <div className="box">
        <div className="orderStatus">Your order is being Processed</div>
        <img src={cart} className="img"></img>
        <div className="cancelOrder" onClick={cancelling}>
          Cancel Order
        </div>
      </div>
    </div>
  );
}

export default App;
