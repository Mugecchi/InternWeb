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
  const [formState, setFormState] = useState({
    fullName: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const faqs = [
    {
      question: "1. What courses are accepted?",
      answer: [
        "Bachelor of Science in Accountancy",
        "Bachelor of Sciencce in Management Accounting",
        "Bachelor of Sciencce in Accounting information System",
        "Bachelor of Science in Business Administration Major in Marketting",
        "Bachelor of Science in Computer Science",
        "Bachelor of Science in Information Technology",
        "AB in Mass Communication",
        "AB in Public Administration",
        "Other related courses",
      ],
    },
    {
      question: "2. What are the requirements?",
      answer: [
        "CV/Resume",
        "COG/Curriculum Evaluation(1st-4th Year)",
        "Letter of Introduction if necessary",
      ],
    },
    {
      question: "3. How many interns are usually accepted in the program?",
      answer: ["No specific number of applicants"],
    },
    {
      question: "4. What is the company culture?",
      answer: [
        "Our company culture is deeply rooted in our core values of teamwork, inclusivity, and a family-like atmosphere, treating every member of our team as part of our extended family, fostering a supportive and welcoming environment where everyone feels valued and respected. Our weekly Bible study sessions provide an opportunity for personal and spiritual growth, further enhancing the sense of community and connection among our team members. We place a strong emphasis on collaboration and teamwork, encouraging employees to work together towards common goals and supporting each other along the way. We strive to create a workplace where everyone feels comfortable, appreciated, and empowered to thrive.",
      ],
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formState);
  };

  return (
    <div className="faq-page">
      <h1 className="faq-title">F.A.Q.</h1>
      <div className="faq-popular-questions">
        <h2>Particular Questions</h2>
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
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Full name*</label>
            <input
              type="text"
              name="fullName"
              value={formState.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formState.subject}
              onChange={handleInputChange}
              placeholder="Enter your subject"
            />
          </div>
          <div>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Faqs;
