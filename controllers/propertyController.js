// propertiesController.js
import Property from "../models/property.js";

// Add a single Property
export const addProperty = async (req, res) => {
  try {
    const newPropertyData = req.body;
    const newProperty = new Property(newPropertyData);
    const savedProperty = await newProperty.save();

    console.log(savedProperty);

    res.status(201).json({ message: "Property added successfully", id: savedProperty._id });
  } catch (err) {
    console.error("Error adding property:", err);
    res.status(500).send("Error adding property");
  }
};


// Delete a single Property
export const deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const deletedProperty = await Property.findByIdAndDelete(propertyId);

    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({ message: "Property deleted successfully" });
  } catch (err) {
    console.error("Error deleting property:", err);
    res.status(500).send("Error deleting property");
  }
};

// Update a single Property
export const updateProperty = async (req, res) => {
  try {
    const propertyId = req.params.id; 
    const updates = req.body; 

    // Use findByIdAndUpdate to find and update the property
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      updates,
      { new: true } // This option returns the updated document
    );

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json({message: "Property updated successfully", updatedProperty});
  } catch (err) {
    console.error("Error updating property:", err);
    res.status(500).send("Error updating property");
  }
};

// Get a single Property
export const getProperty = async (req, res) => {
  try {
    const propertyId = req.params.id; 
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(property);
  } catch (err) {
    console.error("Error fetching property:", err);
    res.status(500).send("Error fetching property");
  }
};

// Get multiple properties
export const getProperties = async (req, res) => {
    try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error("Error fetching properties:", err);
    res.status(500).send("Error fetching properties");
  }

}