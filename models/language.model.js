module.exports = (sql, Sequelize) => {
  return sql.define(
    "languages",
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
      Rtf: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false },
  )
}
