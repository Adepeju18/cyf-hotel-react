import React, { useState } from "react";
import moment from "moment";

const RowHighlighted = ({ props }) => {
  console.log(props);
  const [highlight, setHighlight] = useState("false");

  return (
    <tr
      onClick={() => setHighlight(!highlight)}
      className={highlight ? "highlight" : "tr"}
    >
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>{moment(props.checkOutDate).diff(props.checkInDate, "days")}</td>
      {/* <td>{props.booking.NumberOfNights}</td> */}
    </tr>
  );
};

export default RowHighlighted;
