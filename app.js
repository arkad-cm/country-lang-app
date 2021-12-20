const express = require("express")
const csv = require("csvtojson")
const { connect } = require("./db")

const indexController = require("./controllers/index")

const app = express()

app.use(express.json())

app.use("/", indexController)

connect()
  .then(() => app.listen(8000))
  .then(() => console.log("Server listening at PORT 8000"))

module.exports = app
