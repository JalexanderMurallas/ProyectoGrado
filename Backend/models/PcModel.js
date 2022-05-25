const mongoose = require('mongoose');
const { Schema } = mongoose;

const PcTemplates = new mongoose.Schema({
    serialnumber:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    systemtype:{
        type:String,
        required:true
    },
    cpu:{
        type:String,
        required:true
        
    }

})

//export default model('PcDocument', PcTemplates);
//module.exports = PcTemplates;
module.exports = mongoose.model('Inventario', PcTemplates);