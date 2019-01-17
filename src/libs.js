/*
*   lib config
*   time: 2018/1/17
*   author: xiongtongzi
* */

const addMethod = require('./addMethod')

let baseArr = []

let specialArr = []

module.exports = [
    {
        test: require.resolve('three/examples/js/libs/stats.min.js'),
        use: 'exports-loader?Stats'
	}
]
