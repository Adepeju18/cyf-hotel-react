import React from "react";

const TouristInfoCards = () => (
  <div className="card-container">
    <div className="card">
      <img
        alt="Glasgow"
        src="https://upload.wikimedia.org/wikipedia/commons/7/74/General_internal_view._Kelvingrove_Art_Gallery_and_Museum%2C_Glasgow%2C_Scotland..JPG"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
          Go Glasgow
        </a>
      </div>
    </div>
    <div className="card">
      <img
        alt="Manchester"
        src="https://i2-prod.manchestereveningnews.co.uk/incoming/article12455363.ece/ALTERNATES/s810/JS77642070-1.jpg"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://visitmanchester.com" className="btn btn-primary">
          Go Manchester
        </a>
      </div>
    </div>
    <div className="card">
      <img
        alt="London"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://visitlondon.com" className="btn btn-primary">
          Go London
        </a>
      </div>
    </div>
  </div>
);

export default TouristInfoCards;
