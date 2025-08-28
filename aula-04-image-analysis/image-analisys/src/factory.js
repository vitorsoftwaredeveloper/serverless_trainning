const Handler = require('./handler')
const { RekognitionClient } = require("@aws-sdk/client-rekognition");
const { TranslateClient } = require("@aws-sdk/client-translate");

const rekoSvc = new RekognitionClient({ region: "us-east-1" });
const translatorSvc = new TranslateClient({ region: "us-east-1" });

const handler = new Handler({
  rekoSvc,
  translatorSvc
})

// o bind serve para assegurar que o contexto this é a instancia de handler
module.exports = handler.main.bind(handler)