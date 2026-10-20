import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main class="card">
      <Avatar />
      <Info />
      <SkillList />
    </main>
  );
}

function Avatar() {
  return <img src="avatar.jpg" alt="avatar image" class="img" />;
}

function Info() {
  return (
    <div class="info-div">
      <h1>Jonas john</h1>
      <p>
        Full-stack developer who builds fast, responsive web apps from the
        interface to the backend.I focus on clean code and user-friendly
        interfaces.I focus on clean code and user-friendly interfaces.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div class="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="orangered" />
      <Skill skill="React" emoji="💪" color="yellow" />
      <Skill skill="Node.js" emoji="🦊" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div class="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
