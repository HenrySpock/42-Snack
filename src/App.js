import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import FoodMenu from "./FoodMenu";  // Renamed 'Menu' to 'FoodMenu' for clarity
import FoodItem from "./FoodItem";  // Renamed 'Snack' to 'FoodItem' for clarity in handling both snacks and drinks
import AddFoodItem from './AddFoodItem'; // New component to add food items 
import NotFound from './NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]); // State to hold drinks

  // Function to handle addition of a new snack
  function handleAddSnack(newSnack) {
    setSnacks(prevSnacks => [...prevSnacks, newSnack]);
  }
  
  // Function to handle addition of a new drink
  function handleAddDrink(newDrink) {
    setDrinks(prevDrinks => [...prevDrinks, newDrink]);
  }

  // Updated useEffect to fetch both snacks and drinks
  useEffect(() => {
    async function fetchSnacksAndDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks(); 
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }

    fetchSnacksAndDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes> 
            <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} /> // Added drinks prop
            <Route path="/snacks" element={<FoodMenu snacks={snacks} title="Snacks" />} />
            <Route path="/snacks/:id" element={<FoodItem items={snacks} cantFind="/snacks" />} />
            <Route path="/snacks/add" element={<AddFoodItem type="snacks" onAdd={handleAddSnack}  />} /> // Route to add new snacks
            <Route path="/drinks" element={<FoodMenu drinks={drinks} title="Drinks" />} /> // Route for drinks
            <Route path="/drinks/:id" element={<FoodItem items={drinks} cantFind="/notfound" />} /> // Route for individual drinks
            <Route path="/drinks/add" element={<AddFoodItem type="drinks" onAdd={handleAddDrink}  />} /> // Route to add new drinks
            {/* <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
