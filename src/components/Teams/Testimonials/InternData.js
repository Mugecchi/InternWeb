import React from "react";
import Testimonial from "./Testimonial";
import Randy from "./Images/randy.jpg";
import Migs from "./Images/migs.jpg";
import Adonis from "./Images/adonis.jpg";
import Ben from "./Images/benedick.jpg";
import Angie from "./Images/angelina.jpg";
import Ryan from "./Images/ryan.jpg";
import Joan from "./Images/joan.jpg";
import Joemar from "./Images/joemar.jpg";
import Andeng from "./Images/andrea.jpg";
import Novelyn from "./Images/novelyn.jpg";
import Frenan from "./Images/frenan.jpg";
import Frenalyn from "./Images/frenalyn.jpg";
import Pat from "./Images/patricia.jpg";
import ModalExp from "./Modal";
export default function InternData() {
  const data = [
    {
      Name: "Rivera Jon Carlo Miguel C.",
      Qoute: "Sample Qoute",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "max of 53 characters dito",
      Body: "Testimony rin pero kahit ilan na dito banda",
      src: Migs,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
  ];

  return (
    <div>
      <ModalExp Team={data}>
        <Testimonial Team={data} />
      </ModalExp>
    </div>
  );
}
