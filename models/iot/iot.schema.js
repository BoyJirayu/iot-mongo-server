;(function () {
  'use strict'
  var modelName = 'iot'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    iot_id: {
      type: String,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    },
    relative_humidity: {
      type: Number,
      required: true
    },
    timestamp: { type: Date, default: Date.now }
  })

  module.exports = mongoose.model(modelName, schema)
})()
