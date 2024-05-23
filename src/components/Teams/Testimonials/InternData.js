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
      FirstName: "Jon Carlo Miguel",
      Qoute: "Tara kape",
      Course: "BS Computer Science ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Migs,
      CardTitle: "Tara Kape -Migs 2024 : To Infinity and Beyond",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Maranan",
      FirstName: "Adonis",
      NickName: "Ado",
      Qoute: "Anya mittin",
      Course: "BS Computer Science ",
      School: "Isabela State University - Echague Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Tumatakas pag bibili ng Ulam",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Adonis,
      CardTitle:
        "Sa totoo lang nagbebenta po ko ng isda, rabbit, kambing, pato, kuros ",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Antalan",
      FirstName: "Randy Jr.",
      NickName: "Ran",
      Qoute: "Tara kape",
      Course: "BS Computer Science ",
      School: "Isabela State University - Echague Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Randy,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Yamat",
      FirstName: "Benedick",
      NickName: "Ben",
      Qoute: "Tara kape",
      Course: "BS Computer Science ",
      School: "Isabela State University - Echague Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Ben,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Palting",
      FirstName: "Joemar",
      NickName: "Joms",
      Qoute: "Tara kape",
      Course: "BS Information Technology ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Joemar,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Batara",
      FirstName: "Joan",
      NickName: "Guo",
      Qoute: "Tara kape",
      Course: "BS Management Accounting",
      School: "Isabela State University - Echague Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Joan,
      CardTitle: "Lumaki po ako sa farm, Homeschool po ako",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Sejalvo",
      FirstName: "Novelyn",
      NickName: "Novie",
      Qoute: "Tara kape",
      Course: "BS Management Accounting",
      School: "Isabela State University - Cauayan Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Novelyn,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Respicio",
      FirstName: "Ryan",
      NickName: "Ry",
      Qoute: "Tara kape",
      Course: "BS Management Accounting ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Ryan,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Medina",
      FirstName: "Frenalyn",
      NickName: "F2",
      Qoute: "Tara kape",
      Course: "BS Management Accounting",
      School: "Isabela State University - Cauayan Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Frenalyn,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Medina",
      FirstName: "Frenan",
      NickName: "F1",
      Qoute: "Tara kape",
      Course: "BS Management Accounting",
      School: "Isabela State University - Cauayan Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Frenan,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Medrano",
      FirstName: "Ma. Andrea Antonette",
      NickName: "Andeng",
      Qoute: "Tara kape",
      Course: "BS Management Accounting",
      School: "Isabela State University - Echague Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Andeng,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Aquino",
      FirstName: "Angelina",
      NickName: "Angie",
      Qoute: "Tara kape",
      Course: "BS Management Accounting",
      School: "Isabela State University - Echague Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Angie,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Ramel",
      FirstName: "Patricia Fae",
      NickName: "Pat",
      Qoute: "Tara kape",
      Course: "BS Management Accounting",
      School: "Isabela State University - Echague Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
      Testimony: "Late pero papasok parin",
      Body: "As an intern at RBS was an absolute pleasure. Throughout this OJT, I demonstrated exceptional dedication, a strong work ethic, and a keen willingness to learn. I quickly adapted to our team and contributed significantly to several key projects. Their attention to detail and proactive approach were truly impressive. I am confident that i will excel in any future endeavors and would highly recommend them for any role they pursue",
      src: Pat,
      CardTitle:
        "gusto niyong i highlight, pretty much whatever na gusto mong sabihin with emphasis. pwede rin hello lang",
      CardContent: "Sayings, Greetings or introduction para sa card",
    },
    {
      LastName: "Agonoy",
      FirstName: "Isah Janriel",
      NickName: "Isah",
      Qoute: "Tara kape",
      Course: "BS Accounting Information System ",
      School: "Isabela State University - Cauayan Campus",
      Introduction: "Hi I am BayMax and I like warm hugs",
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
