import { useState } from "react";
import "./index.css";

function App() {
  const [bill, setBill] = useState(null);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Tips
        myTip={myTip}
        setMyTip={setMyTip}
        friendTip={friendTip}
        setFriendTip={setFriendTip}
      />
      <OutPut
        bill={bill}
        setBill={setBill}
        myTip={myTip}
        friendTip={friendTip}
      />

      <Reset
        setMyTip={setMyTip}
        setBill={setBill}
        setFriendTip={setFriendTip}
      />
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div className="bill">
      <p>How much was the bill?</p>
      <input
        type="number"
        value={bill ? bill : ""}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tips({ myTip, setMyTip, friendTip, setFriendTip }) {
  const option1 = [
    { label: "Dissatisfied (0%)", value: 0 },
    { label: "It was okay (5%)", value: 5 },
    { label: "It was good (10%)", value: 10 },
    { label: "Absolutely amazing! (20%)", value: 20 },
  ];

  const option2 = [
    { label: "Dissatisfied (0%)", value: 0 },
    { label: "It was okay (5%)", value: 5 },
    { label: "It was good (10%)", value: 10 },
    { label: "Absolutely amazing! (20%)", value: 20 },
  ];

  return (
    <div>
      <Tip
        options={option1}
        value={myTip}
        friendTip={friendTip}
        onChange={setMyTip}
      >
        How did you like the service?
      </Tip>
      <Tip
        options={option2}
        value={friendTip}
        friendTip={friendTip}
        onChange={setFriendTip}
      >
        How your friend like the service?
      </Tip>
    </div>
  );
}

function Tip({ children, options, value, onChange }) {
  return (
    <div className="tip">
      <p>{children}</p>
      <span>
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        >
          {options.map((option) => (
            <option value={option.value} key={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
}

function OutPut({ bill, setBill, myTip, friendTip }) {
  const tip = (myTip * friendTip) / 100;
  const total = bill + tip;

  return (
    <p>
      {bill === null ? (
        ""
      ) : (
        <strong>
          You pay ${total}(${bill} + ${tip})
        </strong>
      )}
    </p>
  );
}

function Reset({ setBill, setFriendTip, setMyTip }) {
  function handleReset() {
    setBill(null);
    setMyTip(0);
    setFriendTip(0);
  }

  return <button onClick={handleReset}>Reset</button>;
}

export default App;
