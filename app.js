const express = require("express")
const csv = require("csvtojson")
const { connect } = require("./db")

const indexController = require("./controllers/index")

const app = express()

app.use(express.json())

app.use("/", indexController)

const PORT = process.env.PORT || 8000
connect()
  .then(() => app.listen(PORT))
  .then(() => console.log("Server listening at PORT " + PORT))

module.exports = app
