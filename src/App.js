import React, { useState } from 'react';
import foodsData from './foods.json';
import './App.css';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import { Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(true);

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (foodToDelete) => {
    setFoods(foods.filter((food) => food.name !== foodToDelete));
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      {showForm && <AddFood onAddFood={addFood} />}

      <Button onClick={handleToggleForm}>
        {showForm ? 'Hide' : 'Add food...'}
      </Button>

      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      <div className="foods-container">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodBox
              className="food-box"
              key={food.name}
              food={food}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>Nothing to show here...</p>
        )}
      </div>
    </div>
  );
}

export default App;