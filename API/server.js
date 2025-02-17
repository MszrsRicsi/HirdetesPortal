const config = require("./config/config");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", require("./routes/index"));
app.use(require("./middlewares/errorHandler"));

require("./database/syncer");

app.listen(config.port, () => {
    console.log(`Server is listening on: http://localhost:${config.port}`);
});