import React from "react";

const Footer = props => {
  console.log(props);
  return (
    <div>
      <ul className="App-footer">
        {props.footerItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
