/*
*   objects config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'Lensflare',
    'Reflector',
    'ReflectorRTT',
    'Refractor',
    'ShadowMesh',
    'Sky',
    'Water',
    'Water2'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/objects/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
