/*
*   curves config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'NURBSCurve',
    'NURBSSurface',
    'NURBSUtils'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/curves/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
