const router = require('express').Router();
const { Example, ImgTag, PjCategory, PjImage } = require('../../models');

// GET all project images
router.get('/', async (req, res) => {
    try {
        const pjImageData = await PjImage.findAll();
        res.status(200).json(pjImageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single project image
router.get('/:id', async (req, res) => {
    try {
        const pjImageData = await PjImage.findByPk(req.params.id, {
            include: [ImgTag]
        });

        if (!pjImageData) {
            res.status(404).json({ message: 'No project image found with this ID' });
            return;
        };

        res.status(200).json(pjImageData);
    } catch {
        res.status(500).json(err);
    }
});

// CREATE a project image
router.post('/', async (req, res) => {
    try {
        const pjImageData = await PjImage.create(req.body);
        res.status(200).json(pjImageData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE a project image

// DELETE a project image
router.delete('/:id', async (req, res) => {
    try {
        const pjImageData = await PjImage.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!pjImageData) {
            res.status(404).json({ message: 'No project image found with this ID' });
            return;
        };

        res.status(200).json(pjImageData);
    } catch (err) {
        res.status(500).json(err);
    }
});