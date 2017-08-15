/**
 * Created by einavcarmon on 15/08/2017.
 */
module.exports = function (app) {

  const multer = require('multer')
  const fs = require('fs')
  const getColors = require('./colorPalette')


  var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./images")
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
  })

  var upload = multer({ storage: Storage }) //.array("imageFile", 1) //Field name and max count

  app.post('/palette', upload.single("imageFile"), (req, res) => {

    getColors(req.file.path).then(colors => {
      res.send({colors:colors})
    })
  })
}
