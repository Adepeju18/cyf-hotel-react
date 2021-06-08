import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

// const [bookings, setBookings]= useState(FakeBookings);
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(response => {
        if (response.ok) {
          setError(false);
          return response.json();
        } else {
          setError(true);
          return bookings;
        }
      })
      .then(data => {
        setBookings(data);
        setFilteredBookings(data);
        console.log("the Bookings", data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  console.log(FakeBookings);
  const search = searchVal => {
    console.log("Bookings", bookings);
    console.info("TO DO!", searchVal);
    const filteredSearch = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    console.log(filteredSearch);
    setFilteredBookings(filteredSearch);
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
        <SearchResults result={filteredBookings} setBookings={setBookings} />
        {/* <Search props={search} /> */}
        {/* <SearchResults result={FakeBookings} /> */}
      </div>
    </div>
  );
};
export default Bookings;
