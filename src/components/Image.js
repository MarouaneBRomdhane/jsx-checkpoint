import React from "react";
import product from "../product.js";
import { Card } from "react-bootstrap";
const Image = () => {
  return <Card.Img variant="top" src={product.imageUrl} />;
};

export default Image;
