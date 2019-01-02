/*
*   geometries config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'BoxLineGeometry',
    'ConvexGeometry',
    'DecalGeometry',
    'hilbert2D',
    'hilbert3D',
    'TeapotBufferGeometry'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/geometries/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
