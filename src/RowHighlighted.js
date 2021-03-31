import React, { useState } from "react";
import moment from "moment";

const RowHighlighted = ({ props, setProfileId }) => {
  console.log(props);
  const [highlight, setHighlight] = useState("false");

  const handleShowProfile = () => {
    setProfileId(props.id);
  };

  return (
    <tr
      key={props.id}
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
      <td>
        <button onClick={handleShowProfile}>Show profile</button>
      </td>
    </tr>
  );
};

export default RowHighlighted;
