require("dotenv-safe").load();
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const url = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0-9ifp6.mongodb.net/db-building?retryWrites=true&w=majority`
module.exports = mongoose.connect(url, {useMongoClient: true})