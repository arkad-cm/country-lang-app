module.exports = (sql, Sequelize) => {
  return sql.define(
    "continents",
    {
      CODE: {
        type: Sequelize.STRING,
      },
      NAME: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false },
  )
}
