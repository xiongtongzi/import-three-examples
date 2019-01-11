
# import-three-examples
this is webpack plugin, It was created to solve the problem of threeJs modular development.

`npm i imports-loader exports-loader --save-dev`
<br/>
`npm i import-three-examples --save-dev`

国内用户如果npm下载卡住,请更换成cnpm下载

## webpack config
```
const ThreeExamples = require('import-three-examples')

module.exports = {
  ......
  ......
  module: {
    rules: [
      ......
      ......
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      ...ThreeExamples
    ]
  }
}
```

## render page/js
```
import OrbitControls from "three/examples/js/controls/OrbitControls"
import FBXLoader from "three/examples/js/loaders/FBXLoader"

......
......

let controls = new OrbitControls(camera, el)

let fbx = new FBXLoader()

fbx.load(url, function (_obj) {
  console.log(_obj)
})

......
......
```

## 2019/01/11 vue-cli 3.0+ 的webpack配置:
vue.config.js
```
const ThreeExamples = require('import-three-examples')

module.exports = {
    chainWebpack: config => {
        ThreeExamples.forEach((v) => {
            if (~v.use.indexOf('imports')) {
                config.module
                    .rule(`${v.test}_i`)
                    .test(require.resolve(v.test))
                    .use(v.use)
                    .loader(v.use)
            } else {
                config.module
                    .rule(`${v.test}_e`)
                    .test(require.resolve(v.test))
                    .use(v.use)
                    .loader(v.use)
            }
        })
    }
}
```
