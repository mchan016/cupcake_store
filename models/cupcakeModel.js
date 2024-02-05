const mongoose = require('mongoose');

const cupcakeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: [true, 'A unique id must be assigned'],
        min: [1, 'ID starts at 1 and upwards']
    },
    name: {
        type: String,
        required: [true, 'A cupcake must be named'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'A cupcake must be priced'],
        default: 5
    },
    ingredients: [String]
});

const Cupcake = mongoose.model('Cupcake', cupcakeSchema);

module.exports = Cupcake;