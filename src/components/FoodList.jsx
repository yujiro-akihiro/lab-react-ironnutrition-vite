
// FoodList.jsx
import React, { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { Row, Col, Empty } from "antd";

function FoodList({ foods }) {
  const [showForm, setShowForm] = useState(false);
  const [filteredFoods, setFilteredFoods] = useState(foods); // foodsで初期化

  const addFood = (newFood) => {
    const updatedFoods = [...filteredFoods, newFood]; // filteredFoodsを更新
    setFilteredFoods(updatedFoods);
    setShowForm(false); // フォームを非表示に
  };

  const deleteFood = (id) => {
    const updatedFoods = filteredFoods.filter((food) => food.id !== id);
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
      <AddFoodForm onAddFood={addFood} showForm={showForm} setShowForm={setShowForm} /> {/* 追加 */}
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
