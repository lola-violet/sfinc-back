const sequelize = require('../config/connection');
const { Example, ImgTag, PjCategory, PjImage } = require('../models');

const imgTagSeedData = require('./imgTagSeedData.json');
const pjCategorySeedData = require('./pjCategorySeedData.json');

const seedMe = async () => {
    await sequelize.sync({ force: true });

    const imgTags = await ImgTag.bulkCreate(imgTagSeedData);
    const pjCategories = await PjCategory.bulkCreate(pjCategorySeedData);

    process.exit(0);
};

seedMe();