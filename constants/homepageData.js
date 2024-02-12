// api.js (or any suitable file)
import axios from "axios";

const fetchHomePageData = async () => {
  try {
    const response = await axios.get("https://your-api-url.com/homepage");
    return response.data; // Assuming your API returns an array of items
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
};

export default fetchHomePageData;
