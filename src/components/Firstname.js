// YourReactComponent.js

import React from "react";
import "../App.css"; // Importing the styles
import user from "../User.js";

const firstName = "Will Smith";

const FirstName = () => {
  return (
    <div className="greeting-message">
      {firstName && (
        <img className="profile-image" src={user.User_image} alt={firstName} />
      )}
      <p>Hello, {firstName ? firstName : "there"}!</p>
    </div>
  );
};
export default FirstName;
