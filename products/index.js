const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT_NUMBER = 8002;

app.use("/", (req, res) => {
  res.send({ message: "Hello from Product" });
});

app.listen(PORT_NUMBER, () => {
  console.log(`Product service is listening to port ${PORT_NUMBER}`);
});
