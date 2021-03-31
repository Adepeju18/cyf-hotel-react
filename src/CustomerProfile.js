import React, { useEffect, useState } from "react";

function CustomerProfile(id) {
  const [profileDetails, setProfileDetails] = useState({});
  useEffect(
    () => {
      fetch(`https://cyf-react.glitch.me/customers/{id}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setProfileDetails(data);
        });
    },
    { id }
  );
  return (
    <div>
      <p>customer ID{profileDetails.id}</p>
      <p>Email{profileDetails.email}</p>
      <p>phone{profileDetails.phoneNumber}</p>
      <p>Client is {profileDetails.vip ? "VIP" : "Not VIP"}</p>
    </div>
  );
}
export default CustomerProfile;
