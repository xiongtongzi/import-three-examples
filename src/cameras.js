/*
*   cameras config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'CinematicCamera'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/cameras/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
