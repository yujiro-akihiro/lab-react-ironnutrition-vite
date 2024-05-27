// FoodBox.jsx
import React from 'react';
import { Card, Button } from 'antd';
import './FoodBox.css';  

function FoodBox({ food, onDelete }) {
  return (
    <Card
      title={food.name}
      cover={<img alt={food.name} src={food.image} style={{ height: '200px', objectFit: 'cover' }} />}
      actions={[
        <Button type="primary" danger onClick={() => onDelete(food.id)}>
          Delete
        </Button>,
      ]}
    >
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p><b>Total Calories: {food.servings * food.calories}</b> kcal</p>
    </Card>
  );
}

export default FoodBox;





