const express = require('express');
const router = express.Router()
const Course = require('../models/course')
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses)
    } catch (err) {
        res.send('Error ' + err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        res.json(course)
    } catch (err) {
        res.send('Error ' + err)
    }
})
router.post('/', async (req, res) => {
    const course = new Course({
        name: req.body.name,
        tech: req.body.tech,
    })
    try {
        const a1 = await course.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        course.name = req.body.name

        const a1 = await course.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        console.log(course);
        const a1 = await course.deleteOne();
        res.json("Deleted")
    } catch (err) {
        res.send('Error')
    }
})
module.exports = router