const { fail } = require('assert');
const Cupcake = require('./../models/cupcakeModel');

exports.checkID = async (req, res, next, val) => {
    const id = parseInt(val);

    try {
        if (!id) {
            return res.status(400).json({
                status: 'fail',
                message: 'Invlid ID supplied'
            });
        }

        const cupcakes = await Cupcake.find();
        if (id <= 0 || id > cupcakes.length) {
            return res.status(404).json({
                status: 'fail',
                message: 'Cupcake not found'
            });
        }
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID supplied'
        });
    }

    next();
};

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
        const cupcakes = await Cupcake.find();
        req.body._id = Math.max(cupcakes.map(cupcake => cupcake._id)) + 1 || 1;
        const cupcake = await Cupcake.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                cupcake
            }
        });
    } catch (err) {
        res.status(405).json({
            status: 'fail',
            message: 'Invalid input'
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
            message: 'Cupcake not found'
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
        res.status(405).json({
            status: 'fail',
            message: 'Validation exception'
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
        res.status(404).json({
            status: 'fail',
            message: 'Cupcake not found'
        });
    }
};