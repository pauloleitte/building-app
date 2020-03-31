const express = require("express");
const cors = require("cors")

const constants = require("./constants/constant")
const routes = require("./config/routes");

require('./app/config/database')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', routes)


app.listen(constants.PORT, function () {
    console.log(`app running in port ${constants.PORT}`)
})