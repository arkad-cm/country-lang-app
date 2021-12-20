module.exports = (sql, Sequelize) => {
  return sql.define(
    "countries",
    {
      Code: {
        type: Sequelize.STRING,
      },
      Name: {
        type: Sequelize.STRING,
      },
      Native: {
        type: Sequelize.STRING,
      },
      Phone: {
        type: Sequelize.STRING,
      },
      Continent: {
        type: Sequelize.STRING,
      },
      Capital: {
        type: Sequelize.STRING,
      },
      Currency: {
        type: Sequelize.STRING,
      },
      Languages: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false },
  )
}
