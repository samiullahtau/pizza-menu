import React from "react";
import ReactDom from "react-dom/client";
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
    soldOut: false,
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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
    // style={{ color: "red", fontSize: "48px",textTransform }} inline styling
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choos from.All from
            our stone oven,All organic, All Delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on our menu. please come back later!</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={13}
      />
      <Pizza
        name="Pizza Fungi"
        ingredients="totomato, marchi"
        price={10}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("we are open!");
  // else alert("sorry we are closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are Happy to Serve you from {openHour}:00 To {closeHour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're curruntly open");
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>we're open until {closeHour}:00. come visit us or order online.</p>
      <button className="btn">order</button>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
