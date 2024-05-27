import React, { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import foodsJson from "../foods.json";
import { Row, Col, Empty } from "antd";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const handleSearch = (query) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div className="food-list-container">
      <AddFoodForm onAddFood={addFood} />
      <Search onSearch={handleSearch} />
      <Row gutter={[16, 16]} justify="center">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <FoodBox food={food} onDelete={deleteFood} />
            </Col>
          ))
        ) : (
          <Empty description="Oops! There is no more content to show." />
        )}
      </Row>
    </div>
  );
}

export default FoodList;
