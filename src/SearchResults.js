import React from "react";
import Bookings from "./Bookings";
import Search from "./Search";

const SearchResults = ({ result }) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Number of Nights</th>
      </tr>
    </thead>
    <tbody>
      {result.map((booking, index) => (
        // <tr>
        <tr key={index}>
          <th scope="row">{booking.id}</th>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default SearchResults;
