const Pc = require("../models/Pc");

exports.crearPc = async (req, res) => {

    try {

        //guardamos el PC que llega en el body en la variable pc
        let pc = new Pc(req.body);
        //guardamos el PC en la base de datos
        await pc.save();
        //Enviamos resultado del pc al usuario que realiza la peticion
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

        const { model, brand, serial, pcType,
            location, cpu, RAMSize, hdd, entryDate, lowDate, lastMaintenance } = req.body;
        let pc = await Pc.findById(req.params.id); 

        if (!pc) {
            res.status(404).json({ msg: 'No existe el PC' })
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
            res.status(404).json({ msg: 'No existe el PC' })
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
            res.status(404).json({ msg: 'No existe el PC' })
        }

        await Pc.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Pc eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}