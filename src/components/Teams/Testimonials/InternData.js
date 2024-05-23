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
      LastName: "Rivera",
      FirstName: "Jon Carlo Miguel C.",
      Quote: "Tara kape",
      Course: "BS Computer Science ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Migs,
      CardTitle: "Tara Kape -Migs 2024:and beyond",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Maranan, Adonis A.",
      Quote: "Anya mittin",
      Age: "21",
      DoB: "06/15/2002",
      Testimony: "Tumatakas pag bibili ng Ulam",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Adonis,
      CardTitle:
        "Sa totoo lang nagbebenta po ko ng isda, rabbit, kambing, pato, kuros ",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Antalan, Randy Jr. Y.",
      Quote: "Tara kape",
      Age: "21",
      DoB: "02/13/2003",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Randy,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Yamat, Benedick v.",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Ben,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Palting, Joemar",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Joemar,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Batara, Joan r.",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Joan,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Sejalvo, Novelyn",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Novelyn,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Respicio, Ryan",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Ryan,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Medina, Frenalyn",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Frenalyn,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Medina, Frenan",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Frenan,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Medrano, Ma. Andrea Antonette",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Andeng,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Aquino, Angelina",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Angie,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Ramel, Patricia Fae",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Pat,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      Name: "Sejalvo, Novelyn.",
      Quote: "Tara kape",
      Age: "22",
      DoB: "11/11/2001",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Novelyn,
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
