const csv = require("csvtojson/v2")
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
  "postgres://postgres:root@127.0.0.1:5432/citymall",
  {
    logging: console.log,
  },
)

const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
    await parseAndPersistInDB()
  } catch (error) {
    console.error("Unable to connect to the database:", error)
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
