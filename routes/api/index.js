const router = require('express').Router();
const exampleRoutes = require('./exampleRoutes');
const imgTagRoutes = require('./imgTagRoutes');
const pjCategoryRoutes = require('./pjCategoryRoutes');
const pjImageRoutes = require('./pjImageRoutes')

router.use('/examples', exampleRoutes);
router.use('/imgtags', imgTagRoutes);
router.use('/pjcategories', pjCategoryRoutes);
router.use('/pjimages', pjImageRoutes);

module.exports = router;