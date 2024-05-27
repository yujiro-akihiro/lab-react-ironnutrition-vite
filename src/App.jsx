import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import "./App.css";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    setFoods(foods.filter(food => food.id !==id));
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={deleteFood}/>
      ))}
    </div>
  );
}

export default App;
