import React from "react";

const TouristInfoCards = () => (
  <div className="card-container">
    <div className="card">
      <img
        alt="Glasgow"
        src="https://www.istockphoto.com/photo/wide-angle-aerial-view-of-the-river-clyde-and-landmarks-glasgow-scotland-uk-gm1205363274-347201872"
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
        src="https://www.manchestereveningnews.co.uk/whats-on/whats-on-news/free-things-to-do-manchester-12474839"
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
