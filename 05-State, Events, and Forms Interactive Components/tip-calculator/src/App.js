import "./index.css";

function App() {
  return (
    <div>
      <Bill />
      <Tips />
      <OutPut />
    </div>
  );
}

function Bill() {
  return (
    <div className="bill">
      <p>How much was the bill?</p>
      <input type="number" />
    </div>
  );
}

function Tips() {
  const option1 = [
    "Dissatisfied (0%)",
    "It was okay (5%)",
    "It was good (10%)",
    "Absolutely amazing! (20%)",
  ];

  const option2 = [
    "Dissatisfied (0%)",
    "It was okay (5%)",
    "It was good (10%)",
    "Absolutely amazing! (20%)",
  ];

  return (
    <div>
      <Tip options={option1}>How did you like the service?</Tip>
      <Tip options={option2}>How your friend like the service?</Tip>
    </div>
  );
}

function Tip({ children, options }) {
  return (
    <div className="tip">
      <p>{children}</p>
      <span>
        <select>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </span>
    </div>
  );
}

function OutPut() {
  return (
    <p>
      <strong>You pay $105($100 + $5)</strong>
    </p>
  );
}

export default App;
