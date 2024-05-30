const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoute = require("./routes/users");


const port = 8800;
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfully!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/users", userRoute);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});