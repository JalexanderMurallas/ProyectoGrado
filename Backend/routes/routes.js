const { response } = require("express")

const express = require('express')
const router = express.Router()
const PcTemplatesCopy = require('../models/PcModel')

router.post('/signup', (request, response) => {
    const pcInfo = new PcTemplatesCopy({
        
        serialnumber:request.body.serialnumber,
        brand:request.body.brand,
        model:request.body.model,
        systemtype:request.body.systemtype,
        cpu:request.body.cpu,
        

    })
    pcInfo.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
} )

module.exports = router;