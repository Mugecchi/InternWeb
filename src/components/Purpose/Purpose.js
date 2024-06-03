import React, { useState } from "react";
import "./Purpose.css";

const Purpose = () => {
  const [note, setNote] = useState(
    `The internship program is designed to serve as a valuable opportunity for students to gain firsthand experience in the corporate world, closely aligned with their chosen professional career paths. Through this program, students will be immersed in real-life business environments, allowing them to apply theoretical knowledge acquired in their academic studies to practical, everyday situations. This exposure not only helps bridge the gap between classroom learning and professional practice but also equips students with a deeper understanding of industry-specific practices, workplace dynamics, and professional expectations.`
  );

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div className="notepad">
      <div className="notepad-header" align="center">
        PURPOSE OF INTERNSHIP
      </div>
      <div className="notepad-body">
        <textarea
          className="notepad-textarea"
          value={note}
          onChange={handleChange}
          align="justify"
        />
      </div>
      <div className="notepad-body">
        <textarea
          className="notepad-textarea"
          value={`By participating in this internship program, students will develop essential skills, gain critical insights into their future careers, and build a network of professional contacts that can support their career growth and aspirations.`}
          onChange={handleChange}
          align="justify"
        />
      </div>
      <div className="notepad-body">
        <textarea
          className="notepad-textarea"
          value={`Ultimately, the program aims to prepare students for a successful transition from academic life to professional endeavours, ensuring they are well-prepared to meet the challenges and demands of their chosen fields.`}
          onChange={handleChange}
          align="justify"
        />
      </div>
    </div>
  );
};

export default Purpose;
