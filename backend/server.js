const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173", "*"],
  methods: ["GET", "POST"],
  credentials: true
}))

app.use(express.json());
dotenv.config({ path: "config.env" });



// defining port
const PORT = process.env.PORT || 8080;

// setting up an empty GET Route
app.get('/', (req, res) => { res.json({ message: "GET request!!" }) });

// Starting Server on PORT
app.listen(PORT, () => console.log('Server started on PORT: ' + PORT))