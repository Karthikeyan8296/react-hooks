import { useState, useEffect } from "react";
import "./App.css";
import React from "react";

export default function App() {
  const [add, setAdd] = useState(0);
  const [color, setcolor] = useState("Red");
  const [car, setcar] = useState({
    name: "lonbo",
    year: "2024",
    model: "UV-Metal",
    color: "Black",
  });

  //Counter
  const handleClick = () => {
    setAdd(add + 1);
  };

  //Toggle
  const handlecolor = () => {
    setcolor((prevColor) => (prevColor === "Red" ? "Blue" : "Red"));
  };

  //State object
  const handleCar = () => {
    setcar((prev) => ({ ...prev, model: "main" }));
  };

  //UseEffect for counter//
  const [incrc, setincrc] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setincrc((incrc) => incrc + 1);
    }, 2000);
  }, [incrc]);

  console.log(incrc);

  return (
    <>
      <h4>{add}</h4>
      <button onClick={handleClick}>Add</button>

      <h4>My fav color is {color}</h4>
      <button onClick={handlecolor}>Change color</button>

      <h4>
        My {car.name} is {car.year} old, it is {car.model} model with{" "}
        {car.color} color
      </h4>
      <button onClick={handleCar}>Change Now</button>

      <h4>{incrc}</h4>
    </>
  );
}
