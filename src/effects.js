/*
*   effects config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'AnaglyphEffect',
    'AsciiEffect',
    'OutlineEffect',
    'ParallaxBarrierEffect',
    'PeppersGhostEffect',
    'StereoEffect'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/effects/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
