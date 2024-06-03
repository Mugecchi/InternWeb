import React from "react";
import "./Messagee.css";

const Messagees = () => {
  const notes = [
    { id: 1, color: "lightyellow" },
    { id: 2, color: "lightpink" },
    { id: 3, color: "lightblue" },
    { id: 4, color: "beige" },
    { id: 5, color: "lightgreen" },
    { id: 6, color: "plum" },
  ];

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note"
          style={{ backgroundColor: note.color }}
        >
          <div className="pin"></div>
        </div>
      ))}
    </div>
  );
};

export default Messagees;
