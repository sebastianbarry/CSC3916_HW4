const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
  movie: {
    type: String,
  },
  reviewer: {
    type: String,
  },
  quote: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

module.exports = mongoose.model("reviews", ReviewsSchema);
