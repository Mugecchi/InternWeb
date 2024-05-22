import React from "react";
import Testimonial from "./Testimonial";
import Pics from "./Images/joan.jpg";
import Base from "./Images/ryan.jpg";
import ModalExp from "./Modal";
export default function JoanT() {
  const data = {
    Name: "Joan R. Batara",
    Qoute: "sample Qoute",
    Snippet: " lorem ipsum dolor",
    src: Pics,
    BBase: Base,
  };
  return (
    <div>
      <ModalExp Team={data}>
        <Testimonial Team={data} />
      </ModalExp>
    </div>
  );
}
