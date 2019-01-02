/*
*   lights config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'RectAreaLightUniformsLib'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/lights/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
