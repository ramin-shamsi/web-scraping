const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const urlController = require("./controllers/urlController");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/getInfoChi", urlController.getInfoChi);
app.post("/getInfoGaj", urlController.getInfoGaj);

app.listen(3000, () => console.log("server is running"));
