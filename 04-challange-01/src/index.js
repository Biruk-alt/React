import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "Advanced",
    bgColor: "Blue",
  },

  {
    skill: "JavaScript",
    level: "Advanced",
    bgColor: "Red",
  },

  {
    skill: "React",
    level: "Intermidiet",
    bgColor: "Yellow",
  },

  {
    skill: "Node.js",
    level: "Beginner",
    bgColor: "orangered",
  },

  {
    skill: "Web Design",
    level: "Intermidiet",
    bgColor: "purple",
  },

  {
    skill: "SQL",
    level: "Beginner",
    bgColor: "green",
  },
];

function App() {
  return (
    <main className="card">
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
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill
            skill={`${skill.skill}`}
            level={`${skill.level}`}
            bgColor={`${skill.bgColor}`}
          />
        );
      })}
    </div>
  );
}

function Skill({ skill, level, bgColor }) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      <span>{skill}</span>
      <span>
        {level === "Advanced" && "💪"}
        {level === "Intermidieti" && "👍"}
        {level === "Intermidieti" && "👶"}
      </span>
    </div>
  );

  // : "👍" "👶"
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
