const express = require('express')
const router = express.Router()
const { Product } = require('../models/product')
const { Company } = require('../models/company')


router.post(`/`, async (req, res) => {
    // let company = await Company.findById(req.body.company)

    // if (!company) {
    //     return res
    //         .status(404)
    //         .json({ success: false, message: 'Company not found' })
    // }

    let product = new Product({
        name: req.body.name,
        availability: req.body.availability,
        city: req.body.city,
        gender: req.body.gender,
        image: req.body.image,
        type: req.body.type,
        company: req.body.company,
    })
    product = await product.save()

    if (!product) {
        return res
            .status(400)
            .json({ success: false, message: 'Product cannot be created' })
    } else {
        return res.status(200).send(product)
    }
})

router.get(`/`, async (req, res) => {
    const productList = await Product.find().populate('company')
    if (!productList) {
        return res.status(404).send('Couldnt find  the product')
    }
    res.send(productList)
})

router.get(`/:id`, async (req, res) => {
    const product = await Product.findById(req.params.id).populate('company')
    if (!product) {
        return res.status(404).send('Couldnt find  the product')
    }
    res.send(product)
})

router.get(`/products-by-company/:id`, async (req, res) => {
    const id = req.params.id
    const product = await Product.find({ company: id })
    if (!product) {
        return res.status(404).send('Couldnt find  the product')
    }
    res.send(product)
})

router.get(`/type/:type`, async (req, res) => {
    const type = req.params.type
    const product = await Product.find({ type: type })
    if (!product) {
        return res.status(404).send('Couldnt find  the product')
    }
    res.send(product)
})

router.put(`/:id`, async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
    })
    res.status(200).send(product)
})

router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((product) => {
            if (product) {
                return res
                    .status(200)
                    .json({ success: true, message: 'Delete Success' })
            } else {
                return res
                    .status(404)
                    .json({ success: false, message: 'product not Found' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err })
        })
})

module.exports = router
