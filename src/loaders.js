/*
*   loader config
*   time: 2018/12/29
*   author: xiongtongzi
* */
const addMethod = require('./addMethod')

let baseArr = [
    '3MFLoader',
    'AMFLoader',
    'AssimpJSONLoader',
    'AssimpLoader',
    'AWDLoader',
    'BabylonLoader',
    'BVHLoader',
    'ColladaLoader',
    'DDSLoader',
    'DRACOLoader',
    'EquirectangularToCubeGenerator',
    'EXRLoader',
    'FBXLoader',
    'GCodeLoader',
    'GLTFLoader',
    'HDRCubeTextureLoader',
    'KMZLoader',
    'KTXLoader',
    'LoaderSupport',
    'MD2Loader',
    'MMDLoader',
    'MTLLoader',
    'NodeMaterialLoader',
    'NRRDLoader',
    'OBJLoader',
    'OBJLoader2',
    'PCDLoader',
    'PDBLoader',
    'PlayCanvasLoader',
    'PLYLoader',
    'PRWMLoader',
    'PVRLoader',
    'RGBELoader',
    'STLLoader',
    'SVGLoader',
    'TDSLoader',
    'TGALoader',
    'TTFLoader',
    'VRMLLoader',
    'VRMLoader',
    'VTKLoader',
    'XLoader'
]
let specialArr = [
    {
        name: 'FBXLoader',
        path: 'three/examples/js/loaders/FBXLoader',
        lib: [{
            name: 'Zlib',
            path: 'import-three-examples/src/Zlib.js'
        }]
    },
    {
        name: 'CTMLoader',
        path: 'three/examples/js/loaders/ctm/CTMLoader',
        install: [{
            name: 'CTM',
            path: 'three/examples/js/loaders/ctm/ctm.js',
            install: [
                {
                    name: 'LZMA',
                    path: 'three/examples/js/loaders/ctm/lzma.js'
                }
            ]
        }]
    },
    {
        name: 'LegacyGLTFLoader',
        path: 'three/examples/js/loaders/deprecated/LegacyGLTFLoader',
    },
    {
        name: 'LegacyJSONLoader',
        path: 'three/examples/js/loaders/deprecated/LegacyJSONLoader',
    },
    {
        name: 'SEA3DLoader',
        path: 'three/examples/js/loaders/sea3d/SEA3DLoader',
        install: [
            {
                name: 'SEA3D',
                path: 'three/examples/js/loaders/sea3d/SEA3D'
            },
            {
                name: 'SEA3DDeflate',
                path: 'three/examples/js/loaders/sea3d/SEA3DDeflate'
            },
            {
                name: 'SEA3DDraco',
                path: 'three/examples/js/loaders/sea3d/SEA3DDraco'
            },
            {
                name: 'SEA3DLegacy',
                path: 'three/examples/js/loaders/sea3d/SEA3DLegacy'
            },
            {
                name: 'SEA3DLZMA',
                path: 'three/examples/js/loaders/sea3d/SEA3DLZMA',
                install: [{
                    name: 'SEA3D',
                    path: 'three/examples/js/loaders/sea3d/SEA3D'
                }]
            }
        ]
    }
]

module.exports = [
    ...addMethod.addBase('three/examples/js/loaders/', baseArr),
    ...addMethod.addSpecial(specialArr)
]
