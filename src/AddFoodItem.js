import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import SnackOrBoozeApi from "./Api";

/**
 * AddFoodItem component.
 * 
 * This component renders a form to add a new food item (either a snack or drink)
 * to the list. On successful submission, the new item is added to the backend
 * and the user is redirected to the respective list page (snacks or drinks).
 * 
 * Props:
 * - type: indicates whether the item is a 'snack' or 'drink'.
 * - onAdd: a callback function to update local state after adding an item.
 *
 * State:
 * - formData: a state object that holds the form's data.
 * 
 * Routes -> AddFoodItem
 */

function AddFoodItem({ type, onAdd }) {
    const [formData, setFormData] = useState({
        name: "",
        recipe: "",
        serve: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };
 
    /**
     * Handle form submission.
     * 
     * On submission, the function:
     * 1. Sends a request to the backend (db.json) to add the new item.
     * 2. Updates local state with the new item.
     * 3. Redirects the user to the respective list page.
     */

    async function handleSubmit(evt) {
      evt.preventDefault();
  
      // The data from the state (or wherever you're storing the form data)
      const newData = {
          name: formData.name,
          description: formData.description,
          recipe: formData.recipe,
          serve: formData.serve
      };
  
      try {
          // Using the service function to add a new item
          await SnackOrBoozeApi.addNewItem(type, newData);
          
          // Update local state
          if (type === "snacks") {
              onAdd(newData);
          } else if (type === "drinks") {
              onAdd(newData);
          }
          
          // Navigate to the respective list page
          navigate(`/${type}`);
          
          // Clear the form after successful submission
          setFormData({
              name: "",
              description: "",
              recipe: "",
              serve: ""
          });
  
      } catch (error) {
          console.error("There was an error adding the new item.", error);
      }
    }  

    return (
        <div>
            <h2>Add {type}</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input name="recipe" placeholder="Recipe" value={formData.recipe} onChange={handleChange} />
                <input name="serve" placeholder="Serve" value={formData.serve} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddFoodItem;
