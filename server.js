const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

//creating the tour schema
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
  },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: [true, "A tour must have a price"] },
});

//modelling the tour
const Tour = mongoose.model("Tour", tourSchema);

const testTour = new Tour({
  name: "The Forest Hiker",
  rating: 4.7,
  price: 497,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(`Error:`, err.message);
  });

console.log(process.env.NODE_ENV);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
