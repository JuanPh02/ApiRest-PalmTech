const ServiceCtrl = {}
const Service = require('../models/service.model')

ServiceCtrl.create = async (req, res) => {
  try {
    const newService = new Service(req.body)

    await newService.save()
    return res.send({
        ok: true,
        statusCode: 200,
        message: "El servicio se ha creado correctamente"
    });
  } catch (error) {
    return res.send({
      ok: false,
      message: "Ha ocurrido un error creando el servicio",
      content: error,
    });
  }
}

ServiceCtrl.search = async (req, res) => {
  const ans = await Service.find()
  await res.json(ans)
}

ServiceCtrl.update = async (req, res) => {
  const serviceID = req.body.serviceID

  try {
    const ans = await Service.findOneAndUpdate({ serviceID: serviceID }, req.body)
    await res.json({
      ok: true,
      statusCode: 200,
      message: 'Servicio actualizado correctamente.'
    })
  } catch (error) {
    return res.json({
      ok: false,
      statusCode: 400,
      message: "Ha ocurrido un error actualizando el servicio.",
      content: error,
    });
  }
}

ServiceCtrl.delete = async (req, res) => {
  const serviceID = req.query.serviceID
  
  try {
    const ans = await Service.deleteOne({ serviceID: serviceID })
    await res.json({
      ok: true,
      statusCode: 200,
      message: "El servicio se ha eliminado correctamente"
    });
  } catch (error) {
    return res.json({
      ok: false,
      statusCode: 400,
      message: "Ha ocurrido un error eliminando el servicio.",
      content: error,
    });
  }
}

module.exports = ServiceCtrl