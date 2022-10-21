const Pc = require("../models/Pc"); //cambiar al final

exports.crearPc = async (req, res) => {

    try {

        let pc;
        //creamos nuestro producto
        pc = new Pc(req.body);

        await pc.save();

        res.send(pc);

    } catch (error) {
        console.log(error);
        res.status(500).send('ha ocurrido un error!');
    }
}

exports.obtenerPcs = async (req, res) => {
    try {

        const pc = await Pc.find();
        res.json(pc)

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

exports.actualizarPc = async (req, res) => {
    try {

        //creo obj 
        //const { nombre, categoria, ubicacion, precio } = req.body;
        const { model, brand, serial, pcType,
            location, cpu, RAMSize, hdd, entryDate, lowDate, lastMaintenance } = req.body;
        let pc = await Pc.findById(req.params.id); //llamar parametro id

        if (!pc) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        pc.model = model;
        pc.brand = brand;
        pc.serial = serial;
        pc.pcType = pcType;
        pc.location = location;
        pc.cpu = cpu;
        pc.RAMSize = RAMSize;
        pc.hdd = hdd;
        pc.entryDate = entryDate;
        pc.lowDate = lowDate;
        pc.lastMaintenance = lastMaintenance;

        pc = await Pc.findOneAndUpdate({ _id: req.params.id }, pc, { new: true })
        res.json(pc);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

exports.obtenerPc = async (req, res) => {
    try {
        let pc = await Pc.findById(req.params.id);

        if (!pc) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(pc);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

exports.eliminarPc = async (req, res) => {
    try {
        let pc = await Pc.findById(req.params.id);

        if (!pc) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await Pc.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Pc eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}