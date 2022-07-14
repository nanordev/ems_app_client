import React from "react";

import "./TopBar.css";

const returnBrand = (pageName = "Some page") => {
  if (pageName === "dashboard") {
    return (
      <div className="brand">
        <h1>Div.Co Tech LLC</h1>
      </div>
    );
  } else {
    return (
      <div className="breadcrumbs">
        <h2 className="primary">{pageName}</h2>
      <p className="text-muted">
      Dashboard{" > "}
      <b>
      {pageName}
      </b>
      </p>
      </div>

    )
  }
};

const TopBar = ({ sidebarVisible, setSidebarVisible, pageName }) => {
  return (
    <nav className="TopBar">

      {returnBrand(pageName)}
      <div className="right-side">
        <div
          className="menu"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          <span className="material-symbols-sharp"> menu </span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <span className="material-symbols-sharp"> search </span>

          <div className="search-bubble"></div>
        </div>

        <div className="icons">
          <span className="material-symbols-sharp notifications">
            notifications
            <div className="notifications-bubble"></div>
          </span>
          <span className="material-symbols-sharp person">
            person
            <div className="search-bubble"></div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
