/*
*   controls config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'DeviceOrientationControls',
    'DragControls',
    'EditorControls',
    'FirstPersonControls',
    'FlyControls',
    'MapControls',
    'OrbitControls',
    'OrthographicTrackballControls',
    'PointerLockControls',
    'TrackballControls',
    'TransformControls'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/controls/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
