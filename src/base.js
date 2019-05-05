/*
*   base config
*   time: 2018/12/29
*   author: xiongtongzi
* */
const addMethod = require('./addMethod')

let baseArr = [
    'AnimationClipCreator',
    'Car',
    'Cloth',
    'ConvexObjectBreaker',
    'CurveExtras',
    'GPUComputationRenderer',
    'GPUParticleSystem',
    'Gyroscope',
    'ImprovedNoise',
    'MarchingCubes',
    'MD2Character',
    'MD2CharacterComplex',
    'MorphAnimMesh',
    'MorphBlendMesh',
    'Ocean',
    // 'Octree',
    'ParametricGeometries',
    'PRNG',
    'QuickHull',
    'RollerCoaster',
    'ShaderGodRays',
    'ShaderSkin',
    'ShaderTerrain',
    'ShaderToon',
    'ShaderTranslucent',
    'SimplexNoise',
    'TimelinerController',
    // 'TypedArrayUtils',
    // 'UCSCharacter',
    'Volume',
    'VolumeSlice',
    'WebGL'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
