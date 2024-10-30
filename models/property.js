import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const propertySchema = new Schema({
  // No need to define 'id' explicitly, Mongoose adds '_id' by default
  image: {
    type: String,
    required: true, // You might want to make fields like 'image' required
  },
  isPropertyNew: {
    type: Boolean,
    default: false, // Assuming most properties won't be new by default
  },
  newTime:Date,
  type: String,
  price: Number,
  beds: Number,
  baths: Number,
  sqft: Number,
  address: String,
  city: String,
  state: String,
  zip: String,
  broker: String,
  hasLot: Boolean,
  lotSize: Number,
});

const Property = model('Property', propertySchema);
export default Property;
