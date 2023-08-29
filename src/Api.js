import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/snacks`);
      return result.data;
    } catch (error) {
      console.error("Axios Error:", error);
      if (error.response) {
        // The request was made and the server responded with a status outside the range of 2xx
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request:', error.request);
      } else {
        // Something happened in setting up the request and triggered an error
        console.error('Error Message:', error.message);
      }
    }
  }

  // New function to get drinks.
  static async getDrinks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/drinks`);
      return result.data;
    } catch (error) {
      console.error("Axios Error:", error);
      if (error.response) {
        // The request was made and the server responded with a status outside the range of 2xx
        console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request:', error.request);
      } else {
        // Something happened in setting up the request and triggered an error
        console.error('Error Message:', error.message);
      }
    }
  }

  // New function to update db.json with new snacks or drinks item 
  static async addNewItem(type, itemData) {
    try {
        const response = await axios.post(`http://localhost:5000/${type}`, itemData);
        return response.data;
    } catch (error) {
        throw error; 
    }
  }

  
}

export default SnackOrBoozeApi;
