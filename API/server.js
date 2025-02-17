const config = require("./config/config");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", require("./routes/userRoutes"));
app.use("/ads", require("./routes/adRoutes"));

require("./database/syncer");

app.listen(config.port, () => {
    console.log(`Server is listening on: http://localhost:${config.port}`);
});