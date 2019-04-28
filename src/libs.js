/*
 *   lib config
 *   updatetime: 2019/4/28
 *   author: kuangyazhou
 * */

const addMethod = require('./addMethod')

let baseArr = []

let specialArr = []

module.exports = [
  {
    test: require.resolve('three/examples/js/libs/stats.min.js'),
    use: 'exports-loader?Stats'
  },
  {
    test: require.resolve('three/examples/js/libs/stats.min.js'),
    use: 'exports-loader?TWEEN'
  },
  {
    test: require.resolve('three/examples/js/libs/stats.min.js'),
    use: 'imports-loader?THREE=three'
  }
]
