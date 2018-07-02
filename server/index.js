const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3001;
const app = express();
const axios = require('axios');


app.use(bodyParser.json());
app.use(cors());

const changeDir = require(`./controller/mainController`);

app.get("/api/GetData", changeDir.getPeople);
app.delete("/api/Duces/:id", changeDir.deletePeople);
app.put(`/api/editcharacters/:id`, changeDir.editPeople);


//app.post("/api/AddPost", changeDir.pushPost);



app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});