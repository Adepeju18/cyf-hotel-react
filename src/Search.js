import React, { useState } from "react";

const Search = ({ props }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }
  const handleSubmit = event => {
    event.preventDefault();
    if (searchInput) {
      // Search(searchInput);
      setSearchInput("");
    }
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleChange}
              />

              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
