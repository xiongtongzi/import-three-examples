/*
*   pmrem config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'PMREMCubeUVPacker',
    'PMREMGenerator'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/pmrem/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
