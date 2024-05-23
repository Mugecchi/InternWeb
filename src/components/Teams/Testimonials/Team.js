// src/App.js

import React from 'react';
import './Team.css';

const App = () => {
  return (
    <div className="App">
      <h1>Batch 6 Interns</h1>
      <div className="intern-card">
        <div className="card-header">
          <div className="batch">BATCH 6 INTERNS</div>
        </div>
        <div className="card-body">
          <div className="image-overlay">
            <img hlink="https://www.facebook.com/photo.php?fbid=420770668356669&set=pb.100012712171994.-2207520000&type=3" alt="Frenan Medina" className="intern-image" />
          </div>
          <div className="card-text">
            <div className="name">Frenan Medina</div>
            <div className="team">Operations Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
