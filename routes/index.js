module.exports = function (app, dirname) {

  require('./file')(app)

  app.get('*', (req, res) => {
    res.sendFile(dirname + '/client/build/index.html')
  })
}
