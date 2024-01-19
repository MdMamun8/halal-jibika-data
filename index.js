//import package
const express = require("express");
const home = require("./routes/home");

//middlewars
const app = express();
app.use(express.json());

//rou;tes
app.use("/home", home);
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`listening to port ${port}`));
