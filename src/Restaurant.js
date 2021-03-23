import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  // const pizzas = 0;
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          {/* Pizza: {orders} <button className="btn btn-primary" onClick={orderOne}>Add</button> */}
        </li>
        <Order orderType="Pizzas" />
        <Order orderType="Vegetable salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
