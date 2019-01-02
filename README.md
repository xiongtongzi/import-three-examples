# improt-three-examples
this is webpack plugin, It was created to solve the problem of threeJs modular development.

`npm i imports-loader exports-loader --save-dev`
<br/>
`npm i improt-three-examples --save-dev`

国内用户如果npm下载卡住,请更换成cnpm下载

## webpack config
```
const ThreeExamples = require('improt-three-examples')

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
