const express = require('express')
const router = express.Router()
const { Company } = require('../models/company')

router.post(`/`, (req, res) => {
    const company = new Company({
        name: req.body.name,
        desc: req.body.desc,
        director: req.body.director,
        location: req.body.location,
        joinedDate: req.body.joinedDate,
        contactNo: req.body.contactNo,
    })
    company
        .save()
        .then((data) => {
            res.status(201).json({
                success: true,
                message: 'Company has been added',
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                message: err,
            })
        })
})

router.get(`/`, async (req, res) => {
    const companyList = await Company.find()
    if (!companyList) {
        return res.status(404).send('Couldnt find  the companies')
    }
    res.send(companyList)
})

router.get(`/search/:value`, async (req, res) => {
    const searchValue = req.params.value
    const companyList = await Company.find({ name: searchValue })
    if (!companyList) {
        return res.status(404).send('Couldnt find  the companies')
    }
    res.send(companyList)
})

router.get(`/:id`, async (req, res) => {
    const company = await Company.findById(req.params.id)
    res.status(200).send(company)
})

router.put(`/:id`, async (req, res) => {
    const company = await Company.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
    })
    res.status(200).send(company)
})

router.delete('/:id', (req, res) => {
    Company.findByIdAndDelete(req.params.id)
        .then((company) => {
            if (company) {
                return res
                    .status(200)
                    .json({ success: true, message: 'Delete Success' })
            } else {
                return res
                    .status(404)
                    .json({ success: false, message: 'Company not Found' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err })
        })
})

module.exports = router
