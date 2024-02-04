

exports.listCupcakes = (req, res) => {
    res.send('Getting all cupcakes...');
};

exports.addCupcake = (req, res) => {
    res.send('Adding a new cupcake...');
};

exports.getCupcakeById = (req, res) => {
    res.send('Getting your designated cupcake...');
};

exports.updateCupcake = (req, res) => {
    res.send('Updating your cupcake');
};

exports.deleteCupcake = (req, res) => {
    res.send('Delete a cupcake');
};