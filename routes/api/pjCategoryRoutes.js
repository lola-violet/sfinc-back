const router = require('express').Router();
const { Example, ImgTag, PjCategory, PjImage } = require('../../models');

// GET all pj categories
router.get('/', async (req, res) => {
    try {
        const pjCategoryData = await PjCategory.findAll();
        res.status(200).json(pjCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single pj category
router.get('/:id', async (req, res) => {
    try {
        const pjCategoryData = await PjCategory.findByPk(req.params.id, {
            include: [Example]
        });

        if (!pjCategoryData) {
            res.status(404).json({ message: 'No project category found with this ID' });
            return;
        };

        res.status(200).json(pjCategoryData);
    } catch {
        res.status(500).json(err);
    }
});

// CREATE a pj category
router.post('/', async (req, res) => {
    try {
        const pjCategoryData = await PjCategory.create(req.body);
        res.status(200).json(pjCategoryData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a pj category

// DELETE a pj category
router.delete('/:id', async (req, res) => {
    try {
        const pjCategoryData = await PjCategory.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!pjCategoryData) {
            res.status(404).json({ message: 'No project category found with this ID' });
            return;
        };

        res.status(200).json(pjCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});