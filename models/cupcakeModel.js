const mongoose = require('mongoose');

const cupcakeSchema = new mongoose.Schema({
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