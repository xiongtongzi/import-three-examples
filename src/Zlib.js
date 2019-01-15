//
// const Zlib = require('three/examples/js/libs/inflate.min.js')
//
// var z = {...Object.assign({}, Zlib.Zlib)}
//
// module.exports = z

var Zlib = require('three/examples/js/libs/inflate.min.js')

var z = Object.assign({}, Zlib.Zlib)

var c = function () {
    this.Inflate = z.Inflate
}

module.exports = new c()
