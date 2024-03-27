
const express = require('express')
const app = express()
const cors = require("cors");

const mongoDB = require("./db");
require('dotenv').config()

mongoDB();

const corsOptions = {
  origin: "https://yumcourier.onrender.com", // frontend URI (ReactJS)
}

//const port =  || "http://localhost:3000/"

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "https://yumcourier.onrender.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Example app listening on port ${process.env.BACKEND_PORT}`)
})