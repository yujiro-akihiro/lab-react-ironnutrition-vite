// App.js
import React from 'react';
import FoodList from './components/FoodList';
import foods from './foods.json'; // 追加

import './App.css';

function App() {
  return (
    <div className="App">
      <FoodList foods={foods} /> {/* 追加 */}
    </div>
  );
}

export default App;


