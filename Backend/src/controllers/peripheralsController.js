const Peripheral = require('../models/peripherals');


exports.createPeris = async (req, res) => {

    try {
        let peripheral = new Peripheral(req.body);

        await peripheral.save();

        console.log(peripheral);
        res.send(peripheral);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }

}


exports.obtenerPeris = async (req, res) => {
    try {

        const peripheral = await Peripheral.find();
        res.json(peripheral)

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

exports.actualizarPeris = async (req, res) => {
    try {

        const { brand, model, serial, periType, entryDate, lowDate } = req.body;
        let peripheral = await Peripheral.findById(req.params.id);

        if (!peripheral) {
            res.status(404).json({ msg: 'No existe el Perisferico' })
        }

        peripheral.brand = brand;
        peripheral.model = model;
        peripheral.serial = serial;
        peripheral.periType = periType;
        peripheral.entryDate = entryDate;
        peripheral.lowDate = lowDate;


        peripheral = await Peripheral.findOneAndUpdate({ _id: req.params.id }, peripheral, { new: true })
        res.json(peripheral);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

exports.obtenerPeriById = async (req, res) => {
    try {
        let peripheral = await Peripheral.findById(req.params.id);

        if (!peripheral) {
            res.status(404).json({ msg: 'No existe el Periferico' })
        }

        res.json(peripheral);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

exports.eliminarPeris = async (req, res) => {
    try {
        let peripheral = await Peripheral.findById(req.params.id);

        if (!peripheral) {
            res.status(404).json({ msg: 'No existe el Perisferico' })
        }

        //await peripheral.findOneAndRemove({ _id: req.params.id })
        await Peripheral.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Perisferico Eliminado eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}