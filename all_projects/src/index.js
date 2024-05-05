import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Joke from "./Components/joke.js";
// import ContactUnit from './Components/contactUnit.js';
// import Contact from "./Components/ContactApp.js";
import AirBnBPage from "./Components/AirBnB.js";
// import App from './App';
// import Page from "./profile"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Joke
      setup="I got my daughter a fridge for her birthday."
      punchline="I can't wait to see her face light up when she opens it."
    />
    <Joke
      setup="How did the hacker escape the police."
      punchline="He just ransomware."
    />
    <Joke
      setup="Why don't pirate travel on mountain roads."
      punchline="Scurvy."
    />
    <Joke
      setup="Why do bees stay in a hive in winter"
      punchline="Swarm."
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
<ContactUnit
      img="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"
      name="Mr. Whisket"
      tel="(212) 555-1234"
      email="whiskey@gmail.com"
    />
    <ContactUnit
      img="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg"
      name="Mr. Walker"
      tel="(212) 555-5678"
      email="walker@gmail.com"
    />
    <ContactUnit
      img="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg"
      name="Mr. Furry"
      tel="(212) 555-1011"
      email="furry@gmail.com"
    />
    <ContactUnit
      img="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg"
      name="Mr. Mooner"
      tel="(212) 555-1213"
      email="mooner@gmail.com"
    />

*/