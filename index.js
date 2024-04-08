require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // express.json() does the same thing but only after 4.16 version
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hey Buddy Whatsapp");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
