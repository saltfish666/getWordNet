const getWordNet = require('./index')

getWordNet('hello')
  .then((voc) => {
    console.log(voc)
  })
