import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

// const [bookings, setBookings]= useState(FakeBookings);
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(response => {
        if (!response.ok) {
          setError(true);
        }
        return response.json();
      })
      .then(data => {
        setBookings(data);
        console.log("the Bookings", bookings);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  console.log(FakeBookings);
  const search = searchVal => {
    if (searchVal) {
      console.log("Bookings", bookings);
      console.info("TO DO!", searchVal);
      const filteredSearch = bookings.filter(
        booking =>
          booking.firstName.toLowercase().includes(searchVal.toLowercase()) ||
          booking.surname.toLowercase().includes(searchVal.toLowercase())
      );
      setBookings(filteredSearch);
    }
  };

  return error ? (
    <div className="message">An error occurred when loadings data</div>
  ) : loading ? (
    <div className="message">please wait data is loadings</div>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results/> */}
        <SearchResults result={bookings} setBookings={setBookings} />
        <Search props={search} />
        {/* <SearchResults result={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
