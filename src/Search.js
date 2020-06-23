import React from "react";


export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="form-group">
          <input
            type="text"
            id="form-text"
            placeholder="🔎 Enter a city"
            className="Enter"
          />
          <input type="submit" value="GO🗺" className="go" />
          <span>
            <button className="now" id="currentLocation">
              Localize 📍
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
