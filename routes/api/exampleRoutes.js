const router = require('express').Router();
const { Example, ImgTag, PjCategory, PjImage } = require('../../models');

// GET all project examples
router.get('/', async (req, res) => {
    try {
        const exampleData = await Example.findAll();
        res.status(200).json(exampleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single project example
router.get('/:id', async (req, res) => {
    try {
        const exampleData = await Example.findByPk(req.params.id, {
            include: [PjImage]
        });

        if (!exampleData) {
            res.status(404).json({ message: 'No project example found with this ID' });
            return;
        };

        res.status(200).json(exampleData);
    } catch {
        res.status(500).json(err);
    }
});

// CREATE a project example
router.post('/', async (req, res) => {
    try {
        const exampleData = await Example.create(req.body);
        res.status(200).json(exampleData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a project example

// DELETE a project example
router.delete('/:id', async (req, res) => {
    try {
        const exampleData = await Example.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!exampleData) {
            res.status(404).json({ message: 'No project example found with this ID' });
            return;
        };

        res.status(200).json(exampleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;