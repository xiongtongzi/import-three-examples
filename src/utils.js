/*
*   utils config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'BufferGeometryUtils',
    'GeometryUtils',
    'MathUtils',
    'SceneUtils',
    'ShadowMapViewer',
    'SkeletonUtils',
    'UVsDebug'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/utils/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
