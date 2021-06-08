import React, { useEffect, useState } from "react";

function CustomerProfile(id) {
  const [profileDetails, setProfileDetails] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => {
        setProfileDetails(profileDetails => data);
      })
      .catch(error => console.log(error));
  }, [id]);
  if (profileDetails) {
    return (
      <div>
        <h4>Customers profile</h4>
        <p>
          Customer Name:{profileDetails.title}
          {profileDetails.firstName}
          {""}
          {profileDetails.surname}
        </p>
        <p>Email:{profileDetails.email}</p>
        <p>Phone:{profileDetails.phoneNumber}</p>
        <p>Client is: {profileDetails.vip ? "Yes" : "No"}</p>
      </div>
    );
  } else {
    return <div>No Customer details</div>;
  }
}
export default CustomerProfile;
