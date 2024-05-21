import React from "react";
import Testimonial from "./Testimonial";
import Joan from "./Images/joan.jpg";

export default function JoanT() {
  const data = {
    name: "Joan R. Batara",
    src: Joan,
  };
  return (
    <div>
      <Testimonial Team={data} />
    </div>
  );
}
