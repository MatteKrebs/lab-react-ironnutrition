import React from 'react';
import { useState } from 'react';
import { Input, Divider, Button } from 'antd';

function AddFood(props) {

  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {

    props = ({ food, calories, image, servings });

    e.preventDefault();
    setFood('');
    setCalories('');
    setImage('');
    setServings('');
  }; 

  return (
      <form onSubmit={handleSubmit} classfood={props.formStyle}>
        <Divider>Add Food Entry</Divider>
        <label>food</label>
        <Input
          value={food}
          type="text"
          onChange={(e) => setFood(e.target.value)} />
        <label>Image</label>
        <Input
          value={image}
          type="text"
          onChange={(e) => setImage(e.target.value)} />
        <label>Calories</label>
        <Input
          value={calories}
          type="number"
          onChange={(e) => setCalories(e.target.value)} />
        <label>Servings</label>
        <Input
          value={servings}
          type="number"
          onChange={(e) => setServings(e.target.value)} />
        <Button type="submit">Create</Button>
      </form>
  );
};

export default AddFood;