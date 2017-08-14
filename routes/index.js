module.exports = function (app, dirname) {

  app.get('*', (req, res) => {
    res.sendFile(dirname + '/client/build/index.html')
  })
}
