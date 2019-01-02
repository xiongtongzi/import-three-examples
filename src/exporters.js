/*
*   exporters config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'ColladaExporter',
    'GLTFExporter',
    'MMDExporter',
    'OBJExporter',
    'PLYExporter',
    'STLExporter',
    'TypedGeometryExporter'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/exporters/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
