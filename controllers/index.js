const express = require("express")
const router = express.Router()
const db = require("../db")
const { Op } = require("sequelize")

/* GET home page. */
router.get("/", function (req, res) {
    res.status(200).json({ status: "SUCCESS", message: "API is running..." })
})

function lower(arr) {
    const result = []
    for (const it of arr) {
        result.push([it, it.toLowerCase()])
    }
    return result
}

/* POST Run query and get result. */
router.post("/", async (req, res) => {
    const country = await db.CountryModel.findOne({
        attributes: lower(["Name", "Native", "Capital", "Currency", "Languages"]),
        where: { Code: req.body.Query.country },
        raw: true,
    })
    if (!country) {
        return res.status(404).json({
            status: "FAILURE",
            message: "Country not found!",
        })
    }
    country.languages = await db.LanguageModel.findAll({
        attributes: lower(["Code", "Name"]),
        where: { Code: { [Op.in]: country.languages.split(",") } },
        raw: true,
    })
    return res.status(200).json({
        data: {
            country,
        },
    })
})

module.exports = router