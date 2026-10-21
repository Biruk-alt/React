import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <main className="container">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}

function Header() {
  // const styleHeading = { color: "red", fontSize: "48px" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul class="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>No food found. please come back later :)</p>
      )}

      {/* <Pizza
        foodImage="pizzas/spinaci.jpg"
        foodName="Pizza Spinaci"
        ingridients="Tomato, mozarella, spinach, and ricotta cheese"
        price={10}
      />

      <Pizza
        foodImage="pizzas/prosciutto.jpg"
        foodName="Pizza Prosciutto"
        ingridients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
      /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.foodName}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const time = new Date().getHours();
  const openHour = 21;
  const closeHour = 22;
  const isOpen = time >= openHour && time <= closeHour;

  // if (time >= openHour && time <= closeHour) alert("We'er open");
  // else alert("we'er closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      <div class="order">
        {isOpen ? (
          <p>We'er currently open</p>
        ) : (
          <ClosedMsg closeHour={closeHour} openHour={openHour} />
        )}
        <button class="btn">Open</button>
      </div>
    </footer>
  );
}

function ClosedMsg({ closeHour, openHour }) {
  return <p>We'er open until {closeHour}:00. We'er closed</p>;
}

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
