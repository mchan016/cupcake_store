const Cupcake = require('./../models/cupcakeModel');

exports.listCupcakes = async (req, res) => {
    try {
        const cupcakes = await Cupcake.find();

        res.status(200).json({
            status: 'success',
            count: cupcakes.length,
            data: {
                cupcakes
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.addCupcake = async (req, res) => {
    try {
        const cupcake = await Cupcake.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                cupcake
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getCupcakeById = async (req, res) => {
    try {
        const cupcake = await Cupcake.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                cupcake
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.updateCupcake = async (req, res) => {
    try {
        // Get the updated cupcake record
        const cupcake = await Cupcake.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                cupcake
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteCupcake = async (req, res) => {
    try {
        await Cupcake.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};