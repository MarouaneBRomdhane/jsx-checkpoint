import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Toast from "react-bootstrap/Toast";
import Name from "./components/Name.js";
import Price from "./components/Price.js";
import Description from "./components/Description.js";
import Image from "./components/Image.js";
import FirstName from "./components/Firstname.js";

const App = () => {
  return (
    <>
      <div className="center-container">
        <Card className="Card-style" style={{ width: "18rem" }}>
          <Name />
          <Price />
          <Description />
          <Image />
          <Button variant="primary">Buy It Now</Button>
        </Card>
      </div>
      <FirstName />
    </>
  );
};

export default App;
