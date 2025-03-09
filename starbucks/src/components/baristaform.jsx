import React, {Component, useState} from "react";
const BaristaForm = () => {

    const onCheckAnswer = () => {

    }
    const onNewDrink = () => {
        
    }

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });
    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }
  
  return (
    <div>
        <form type= "submit" >
            <label for="name">Temperature</label>
            <input type="text" id="name" name="name" placeholder="Guess the ingredient" required/>

        </form>

        <button className = "button submit" onClick={onCheckAnswer}>
            Check Answer
        </button>
        <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>
            New Drink
        </button>
    </div>
  );
  
};

export default BaristaForm;