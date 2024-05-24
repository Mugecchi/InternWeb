import React, { useState } from "react";
import "./FAQS.css";

const Faq = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-container">
      <button className="collapsible" onClick={onClick}>
        {question}
      </button>
      <div className="content" style={{ display: isOpen ? "block" : "none" }}>
        <ul className="answer">
          {answer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. What courses are accepted?",
      answer: [
        "BSA",
        "BSMA",
        "BSAIS",
        "BSBA MAJOR IN MARKETING",
        "BSCS",
        "BSIT",
      ],
    },
    {
      question: "2. How do I apply for the internship program?",
      answer: ["Exam", "Initial Interview", "Final Interview"],
    },
    {
      question: "3. What are the requirements?",
      answer: [
        "CV/Resume",
        "COG/Curriculum Evaluation(1st-4th Year)",
        "Letter of Introduction if necessary",
      ],
    },
    {
      question: "4. How many interns are usually accepted in the program?",
      answer: ["No specific number of applicants"],
    },
    {
      question: "5. What is the company culture?",
      answer: [
        "Our company culture is deeply rooted in our core values of teamwork, inclusivity, and a family-like atmosphere, treating every member of our team as part of our extended family, fostering a supportive and welcoming environment where everyone feels valued and respected. Our weekly Bible study sessions provide an opportunity for personal and spiritual growth, further enhancing the sense of community and connection among our team members. We place a strong emphasis on collaboration and teamwork, encouraging employees to work together towards common goals and supporting each other along the way. We strive to create a workplace where everyone feels comfortable, appreciated, and empowered to thrive.",
      ],
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs" style={{ fontFamily: "Poppins" }}>
      {faqs.map((faq, index) => (
        <Faq
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Faqs;
