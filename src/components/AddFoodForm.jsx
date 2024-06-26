
// AddFoodForm.jsx
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const AddFoodForm = ({ onAddFood }) => {
  const [form] = Form.useForm(); // Formインスタンスを作成

  const handleSubmit = (values) => { // onFinishの引数にvaluesが渡されるので、それを利用するように変更
    const newFood = {
      name: values.name,
      image: values.image,
      calories: parseInt(values.calories), // 文字列から数値に変換
      servings: parseInt(values.servings), // 文字列から数値に変換
    };
    onAddFood(newFood);
    form.resetFields(); // フォームをリセット
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Image" name="image">
        <Input />
      </Form.Item>
      <Form.Item label="Calories" name="calories">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Servings" name="servings">
        <Input type="number" />
      </Form.Item>
      <Button type="primary" htmlType="submit">Create</Button>
    </Form>
  );
}

export default AddFoodForm;
