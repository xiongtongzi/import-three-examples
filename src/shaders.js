/*
*   shaders config
*   time: 2018/12/29
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = [
    'AfterimageShader',
    'BasicShader',
    'BleachBypassShader',
    'BlendShader',
    'BokehShader',
    'BokehShader2',
    'BrightnessContrastShader',
    'ColorCorrectionShader',
    'ColorifyShader',
    'ConvolutionShader',
    'CopyShader',
    'DepthLimitedBlurShader',
    'DigitalGlitch',
    'DOFMipMapShader',
    'DotScreenShader',
    'FilmShader',
    'FocusShader',
    'FreiChenShader',
    'FresnelShader',
    'FXAAShader',
    'GammaCorrectionShader',
    'HalftoneShader',
    'HorizontalBlurShader',
    'HorizontalTiltShiftShader',
    'HueSaturationShader',
    'KaleidoShader',
    'LuminosityHighPassShader',
    'LuminosityShader',
    'MirrorShader',
    'NormalMapShader',
    'OceanShaders',
    'ParallaxShader',
    'PixelShader',
    'RGBShiftShader',
    'SAOShader',
    'SepiaShader',
    'SMAAShader',
    'SobelOperatorShader',
    'SSAOShader',
    'TechnicolorShader',
    'ToneMapShader',
    'TriangleBlurShader',
    'UnpackDepthRGBAShader',
    'VerticalBlurShader',
    'VerticalTiltShiftShader',
    'VignetteShader',
    'VolumeShader',
    'WaterRefractionShader'
]

let specialArr = []

module.exports = [
    ...addMethod.addBase('three/examples/js/shaders/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
