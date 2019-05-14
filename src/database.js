const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://mongo-server/node-app', {
//mongoose.connect('mongodb://localhost/node-app', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err))
