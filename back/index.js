const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const cors = require('cors')

const port = 8080;
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfully!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors(
    {
      origin : true, credentials: true
    }
  ))
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});