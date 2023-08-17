const TechnicianCtrl = {}
const Technician = require('../models/technician.model')
const { v4: uuidv4 } = require('uuid');

TechnicianCtrl.create = async (req, res) => {
    try {
        const { documentID, name, lastname, sector, birthday, address, email, phoneNumber} = req.body
        let technicianID = uuidv4()
        const newTechnician = new Technician({
            technicianID,
            documentID,
            name, 
            lastname,
            sector,
            birthday,
            address,
            email,
            phoneNumber
        })

        await newTechnician.save()
        return res.send({
            ok: true,
            statusCode: 200,
            message: "El técnico se ha creado correctamente"
        });


    } catch (error) {
        return res.send({
            ok: false,
            statusCode: 400,
            message: "Ha ocurrido un error creando el técnico",
            content: error,
        });
    }
}

TechnicianCtrl.search = async (req, res) => {
    const ans = await Technician.find()
    await res.json(ans)
}

TechnicianCtrl.update = async (req, res) => {
    const documentID = req.params.id
    
    try {
        const ans = await Technician.findOneAndUpdate({ documentID: documentID}, req.body)
        await res.json({
            ok: true,
            statusCode: 200,
            message: 'Técnico actualizado correctamente.'
        })
    } catch (error) {
        return res.json({
            ok: false,
            statusCode: 400,
            message: "Ha ocurrido un error actualizando el técnico",
            content: error,
        });
    }
}

TechnicianCtrl.delete = async (req, res) => {
    const documentID = req.query.documentID
    
    const ans = await Technician.deleteOne({documentID: documentID})
    await res.json({
        ok: true,
        statusCode: 200,
        message: "El técnico se ha eliminado correctamente"
    });
}

module.exports = TechnicianCtrl