/*
*   modifiers config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'ExplodeModifier',
    'SimplifyModifier',
    'SubdivisionModifier',
    'TessellateModifier'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/modifiers/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
