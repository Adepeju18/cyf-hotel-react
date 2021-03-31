import React from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import CustomerProfile from "./CustomerProfile";

const App = () => {
  const footerElem = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer footerItems={footerElem} />
      {/* <CustomerProfile /> */}
    </div>
  );
};

export default App;
