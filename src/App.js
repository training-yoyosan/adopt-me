import ReactDOM from "react-dom";
import Pet from "./Pet";
import React from "react";

/*const App = () => {
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
};*/

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Ciocio" animal="Dog" breed="Corcitură" />
      <Pet name="Pisicot" animal="Pisică" breed="Corcitură" />
      <Pet name="Vărgățel" animal="Pisică" breed="Corcitură" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
