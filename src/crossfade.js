/*
*   crossfade config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'gui',
    'scenes',
    'transition'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/crossfade/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
