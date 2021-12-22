const csv = require("csvtojson/v2")
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("citymall", {
  dialect: "postgres",
})
let retries = 5

const connect = async () => {
  while (retries) {
    try {
      await sequelize.authenticate()
      console.log("Connection has been established successfully.")
      await sequelize.sync({ force: true })
      await parseAndPersistInDB()
      break
    } catch (error) {
      console.error("Unable to connect to the database:", error)
      retries--
      console.log("retries left: " + retries)
      await new Promise(res => setTimeout(res, 5000))
      if (!retries) {
        throw new Error("Could not connect to DB.")
      }
    }
  }
}

const parseAndPersistInDB = async () => {
  await db.ContinentModel.destroy({
    where: {},
    truncate: true,
  })
  await db.CountryModel.destroy({
    where: {},
    truncate: true,
  })
  await db.LanguageModel.destroy({
    where: {},
    truncate: true,
  })

  await db.ContinentModel.bulkCreate(
    await csv().fromFile("./files/continents.csv"),
  )
  await db.CountryModel.bulkCreate(
    await csv().fromFile("./files/countries.csv"),
  )
  await db.LanguageModel.bulkCreate(
    await csv().fromFile("./files/languages.csv"),
  )
}

const db = {}
db.connect = connect
db.Sequelize = Sequelize
db.sequelize = sequelize
db.ContinentModel = require("./models/continent.model.js")(sequelize, Sequelize)
db.CountryModel = require("./models/country.model.js")(sequelize, Sequelize)
db.LanguageModel = require("./models/language.model.js")(sequelize, Sequelize)

module.exports = db
