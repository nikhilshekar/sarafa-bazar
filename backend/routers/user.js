const express = require('express')
const router = express.Router()
const { User } = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post(`/register`, async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    })
    user = await user.save()
    if (!user) {
        return res.status(400).send('User is not created')
    }
    res.status(200).send(user)
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res
            .status(400)
            .json({ success: false, message: 'User not found' })
    }
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign(
            {
                userId: user.id,
            },
            'secret'
        )
        return res.status(200).send({
            success: true,
            user: user.name,
            token: token,
            message: 'Login Successfull',
        })
    } else {
        return res
            .status(400)
            .json({ success: false, message: 'Password is wrong' })
    }
})

module.exports = router
