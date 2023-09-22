const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/shopping", proxy("http://localhost:8001"));
app.use("/product", proxy("http://localhost:8002"));
app.use("/", proxy("http://localhost:8003"));

const PORT_NUMBER = 8000;

app.listen(PORT_NUMBER, () => {
  console.log(`App is listening to port ${PORT_NUMBER}`)
})
