import express from "express";
import dbConnect from "./configs/dbConnection.js";
import { addProperty, deleteProperty, getProperties, getProperty, updateProperty } from "./controllers/propertyController.js";
import { configDotenv } from "dotenv";
configDotenv()

const app = express()
const port = 3003

// Middleware to parse JSON request bodies
app.use(express.json()); 


// Function to start the server
const startServer = async () => {
  try {
    // Connect to the database
    await dbConnect(); 

    // Start listening for requests after successful database connection
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

// Start the server
startServer();


app.get('/', async (req, res) => {
  res.send("Nothing here 😎");
});

app.post("/properties/add", addProperty )

app.get("/properties/find-property/:id", getProperty);

app.get("/properties/find-properties", getProperties);

app.put("/properties/update/:id", updateProperty);

app.delete("/properties/delete/:id", deleteProperty);




export default app