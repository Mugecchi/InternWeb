import React from "react";
import Testimonial from "./Testimonial";
import Pics from "./Images/ryan.jpg";
import Base from "./Images/ryan.jpg";
import ModalExp from "./Modal";
import { CardContent } from "@material-ui/core";
export default function JoanT() {
  const data = {
    Name: "Randy Yap Antalan",
    Qoute: "sample Qoute", //inside modal
    Testimony: "Upper half", //inside modal
    Body: "lower half of the body", //inside modal
    src: Pics, //image for the modal avatar
    BBase: Base, //image for the card's avatar
    CardTitle: "Lorem Ipsum",
    CardContent:
      "jioasmdklasdkkopjm maoksldconsectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum",
  };
  return (
    <div>
      <ModalExp Team={data}>
        <Testimonial Team={data} />
      </ModalExp>
    </div>
  );
}
