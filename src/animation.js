/*
*   animation config
*   time: 2018/12/29
*   author: xiongtongzi
* */
const addMethod = require('./addMethod')

let baseArr = [
    'CCDIKSolver',
    'MMDAnimationHelper',
    'MMDPhysics'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/animation/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
