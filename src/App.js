import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from 'react-bootstrap/Toast';

import Name from "./components/Name.js";
import Price from "./components/Price.js";
import Description from "./components/Description.js";
import Image from "./components/Image.js";

const App = () => {
  return (
   
    <Card style={{ width: "18rem" }}>
      <Image />
      <Card.Body>
        <Card.Title>
          <Name />
        </Card.Title><Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
        <Card.Text>
          <Price /> <Description />{" "}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
     <Toast>
     <Toast.Header>
       <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
       <strong className="me-auto">Bootstrap</strong>
       <small>11 mins ago</small>
     </Toast.Header>
     <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
   </Toast>
  );
};

export default App;
