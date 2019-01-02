/*
*   lines config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'Line2',
    'LineGeometry',
    'LineMaterial',
    'LineSegments2',
    'LineSegmentsGeometry',
    'Wireframe',
    'WireframeGeometry2'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/lines/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
