import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

// const [bookings, setBookings]= useState(FakeBookings);
const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  console.log(FakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results/> */}
        <SearchResults result={bookings} />
        {/* <SearchResults result={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
