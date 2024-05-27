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








// import React, { useState } from 'react';
// import { Form, Input, Button } from 'antd';

// function AddFoodForm({ onAddFood }) {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     onAddFood(values);
//     form.resetFields();
//   };

//   return (
//     <Form form={form} layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: '0 auto' }}>
//       <Form.Item
//         label="Name"
//         name="name"
//         rules={[{ required: true, message: 'Please input the name!' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Image URL"
//         name="image"
//         rules={[{ required: true, message: 'Please input the image URL!' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Calories"
//         name="calories"
//         rules={[{ required: true, message: 'Please input the calories!' }]}
//       >
//         <Input type="number" />
//       </Form.Item>

//       <Form.Item
//         label="Servings"
//         name="servings"
//         rules={[{ required: true, message: 'Please input the servings!' }]}
//       >
//         <Input type="number" />
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Create
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// }

// export default AddFoodForm;


// import React, { useState } from 'react';

// function AddFoodForm({ onAddFood }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     image: '',
//     calories: '',
//     servings: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFood = {
//       ...formData,
//       calories: Number(formData.calories),
//       servings: Number(formData.servings)
//     };
//     onAddFood(newFood);
//     setFormData({
//       name: '',
//       image: '',
//       calories: '',
//       servings: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Image</label>
//         <input
//           type="text"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Calories</label>
//         <input
//           type="number"
//           name="calories"
//           value={formData.calories}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Servings</label>
//         <input
//           type="number"
//           name="servings"
//           value={formData.servings}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Create</button>
//     </form>
//   );
// }

// export default AddFoodForm;
