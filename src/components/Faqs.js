import React, { useState } from "react";
import "./FAQS.css";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-container">
      <button className="collapsible" onClick={toggleVisibility}>
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
  return (
    <div className="faqs" style={{ fontFamily: "Poppins" }}>
      <Faq
        question="1. What courses are accepted?"
        answer={[
          "BSA",
          "BSMA",
          "BSAIS",
          "BSBA MAJOR IN MARKETING",
          "BSCS",
          "BSIT",
        ]}
      />
      <Faq
        question="2. How do I apply for the internship program?"
        answer={[
          "Exam (Personality Test)",
          "Initial Interview",
          "Final Interview",
        ]}
      />
      <Faq
        question="3. What are the requirements?"
        answer={[
          "CV/TResume",
          "COG/Curriculum Evaluation(1st-4th Year)",
          "Letter of Introduction if necessary",
        ]}
      />
      <Faq
        question="4. How many interns are usually accepted in the program?"
        answer={["No specific number of applicant"]}
      />
      <Faq
        question="5. What is the company culture?"
        answer={[
          "Our company culture is deeply rooted in our core values of teamwork, inclusivity, and a family-like atmosphere, treating every member of our team as part of our extended family, fostering a supportive and welcoming environment where everyone feels valued and respected. Our weekly Bible study sessions provide an opportunity for personal and spiritual growth, further enhancing the sense of community and connection among our team members. We place a strong emphasis on collaboration and teamwork, encouraging employees to work together towards common goals and supporting each other along the way. We strive to create a workplace where everyone feels comfortable, appreciated, and empowered to thrive.",
        ]}
      />
    </div>
  );
};

export default Faqs;
