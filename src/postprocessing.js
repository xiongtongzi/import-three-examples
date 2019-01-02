/*
*   postprocessing config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'AdaptiveToneMappingPass',
    'AfterimagePass',
    'BloomPass',
    'BokehPass',
    'ClearPass',
    'CubeTexturePass',
    'DotScreenPass',
    'EffectComposer',
    'FilmPass',
    'GlitchPass',
    'HalftonePass',
    'MaskPass',
    'OutlinePass',
    'RenderPass',
    'SAOPass',
    'SavePass',
    'ShaderPass',
    'SMAAPass',
    'SSAARenderPass',
    'SSAOPass',
    'TAARenderPass',
    'TexturePass',
    'UnrealBloomPass'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/postprocessing/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
