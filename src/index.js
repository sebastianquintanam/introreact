import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let rootDomElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootDomElement);

let htmlElement = (
    <div
        style={{
            border: "5px solid red",
        }}
    >
        <h2>Hola, este es un elemento JSX</h2>
        <p>Este es el cuerpo</p>
        <div
            onClick={() => {
                alert("Se cliqueo!!");
            }}
        >
            <h4>Este es el footer, dale click para ver mensaje</h4>
        </div>
    </div>
);

let h2Element = React.createElement("h2", {}, "Hola, este es un elemento JS");
let pElement = React.createElement("p", {}, "Este es el cuerpo");
let divLast = React.createElement(
    "div",
    {
        onClick: () => {
            alert("Se cliqueo!!");
        },
    },
    React.createElement(
        "h4",
        {},
        "Este es el footer, dale click para ver mensaje"
    )
);
let mainDiv = React.createElement(
    "div",
    {
        style: { border: "5px solid blue" },
    },
    [h2Element, pElement, divLast]
);

root.render(
    <div>
        <div>
            {htmlElement}
            {mainDiv}
        </div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
);

// JSX ES LO MISMO QUE JS
// Esto es posible gracias a que TODO elemento
// de HTML se transforma a un OBJETO en JS
// SIEMPRE SE TRANSFORMA USANDO LA FUNCION React.createElement()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
