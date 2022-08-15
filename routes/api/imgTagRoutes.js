const router = require('express').Router();
const { Example, ImgTag, PjCategory, PjImage } = require('../../models');

// GET all img tags
router.get('/', async (req, res) => {
    try {
        const imgTagData = await ImgTag.findAll();
        res.status(200).json(imgTagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single img tag
router.get('/:id', async (req, res) => {
    try {
        const imgTagData = await ImgTag.findByPk(req.params.id, {
            include: [PjImage]
        });

        if (!imgTagData) {
            res.status(404).json({ message: 'No image tags found with this ID' });
            return;
        };

        res.status(200).json(imgTagData);
    } catch {
        res.status(500).json(err);
    }
});

// CREATE an img tag
router.post('/', async (req, res) => {
    try {
        const imgTagData = await ImgTag.create(req.body);
        res.status(200).json(imgTagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE an img tag

// DELETE an img tag
router.delete('/:id', async (req, res) => {
    try {
        const imgTagData = await ImgTag.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!imgTagData) {
            res.status(404).json({ message: 'No image tag found with this ID' });
            return;
        };

        res.status(200).json(imgTagData);
    } catch (err) {
        res.status(500).json(err);
    }
});