# nclone

[![Build Status](https://travis-ci.org/saltfish666/getWordNet.svg?branch=master)](https://travis-ci.org/saltfish666/getWordNet)
[![codecov](https://codecov.io/gh/saltfish666/getWordNet/branch/master/graph/badge.svg)](https://codecov.io/gh/saltfish666/getWordNet)
![npm](https://img.shields.io/npm/dm/getWordNet.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## What does this do

translate english world with WordNet

## Usage

`npm i getWordNet`

```nodejs
const getWordNet = require('getWordNet')
getWordNet('hello')
  .then((voc) => {
    console.log(voc)
  })

// resulet
{ voc: '',
  dist:
   { Noun:
      {
        content: '\nS: (n) hello, hullo, hi, howdy, how-do-you-do (an      expression of greeting) "every morning they exchanged polite hellos"\n',
        innerHTML: '...'
      }
    }
}
```
