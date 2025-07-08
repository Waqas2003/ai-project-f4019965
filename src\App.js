import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Pakistan Cricket Team</h1>
      </header>
      <main>
        <section className="team-info">
          <h2>Team Squad:</h2>
          <ul>
            <li>Babar Azam (Captain)</li>
            <li>Mohammad Rizwan (Wicket-keeper)</li>
            <li>Fakhar Zaman</li>
            <li>Shadab Khan</li>
            <li>Shaheen Afridi</li>
            <li>Hasan Ali</li>
            <li>Mohammad Nawaz</li>
            <li>Haris Rauf</li>
          </ul>
        </section>
        <section className="achievements">
          <h2>Achievements:</h2>
          <ul>
            <li>Champions of ICC Champions Trophy 2017</li>
            <li>Runners-up of ICC Cricket World Cup 1992</li>
            <li>Winners of Asia Cup 2000, 2012</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;