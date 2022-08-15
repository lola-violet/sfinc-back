const PjCategory = require('./PjCategory');
const Example = require('./Example');
const ImgTag = require('./ImgTag');
const PjImage = require('./PjImage');


// Relationships
PjCategory.hasMany(Example);
Example.hasOne(PjCategory);

Example.hasMany(PjImage);
PjImage.hasOne(Example);

ImgTag.hasMany(PjImage);
PjImage.hasOne(ImgTag);

module.exports = { PjCategory, Example, ImgTag, PjImage };