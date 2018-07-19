const fetch = require('node-fetch')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

function getWordNet (word) {
  return new Promise((resolve, reject) => {
    let url = 'http://wordnetweb.princeton.edu/perl/webwn?c=1&sub=Change&o2=&o0=1&o8=1&o1=&o7=&o5=&o9=&o6=&o3=&o4=&i=-1&h=000000000&s=' + word
    fetch(url)
      .then(res => {
        return res.text()
      })
      .then(body => {
        let dom = new JSDOM(body)
        let doc = dom.window.document
        let voc = {
          voc: '',
          dist: {
          }
        }
        try {
          for (let i = doc.getElementsByTagName('ul').length - 1; i >= 0; i--) {
            voc.dist[doc.getElementsByTagName('h3')[i].textContent] = {
              content: doc.getElementsByTagName('ul')[i].textContent,
              innerHTML: doc.getElementsByTagName('ul')[i].innerHTML
            }
          }
        } catch (err) {
          return reject(err)
        }
        resolve(voc)
      })
  })
}

module.exports = getWordNet
