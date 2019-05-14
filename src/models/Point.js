const mongoose = require('mongoose')
const { Schema } = mongoose

const PointSchema = new Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Point', PointSchema)
