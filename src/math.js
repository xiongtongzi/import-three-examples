/*
*   math config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'ColorConverter',
    'Lut'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/math/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
