import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!!!"),
    ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)),
    React.createElement(Pet, {
      name: "Ciocio",
      animal: "Câine",
      breed: "Corcitură",
    }),
    React.createElement(Pet, {
      name: "Pisicot",
      animal: "Pisică",
      breed: "Corcitură",
    }),
    React.createElement(Pet, {
      name: "Vărgățel",
      animal: "Pisică",
      breed: "Corcitură",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
