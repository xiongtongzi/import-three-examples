/*
*   renderers config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    // 'CanvasRenderer',
    'CSS2DRenderer',
    'CSS3DRenderer',
    'Projector',
    'RaytracingRenderer',
    'RaytracingWorker',
    'SoftwareRenderer',
    'SVGRenderer',
    'WebGLDeferredRenderer'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/renderers/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
