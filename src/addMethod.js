/*
 *   add methods
 *   time: 2019/06/03
 *   author: kuangyazhou
 * */

function addBase(path, arr) {
    let a = []
    arr.forEach((v, i) => {
        try {
            a.push({
                test: require.resolve(`${path}${v}`),
                use: `imports-loader?THREE=three`
            })
            a.push({
                test: require.resolve(`${path}${v}`),
                use: `exports-loader?THREE.${v}`
            })
        } catch (e) {

        }
    })
    return a
}

function recursion(arr, use, path, target) {
    arr.forEach((v, i) => {
        use += `,${v.name}=${v.path}`
        if (v.install && v.install.length > 0) {
            recursion(v.install, `imports-loader?THREE=three`, v.path, target)
        }
    })
    target.push({
        test: require.resolve(`${path}`),
        use: use
    })
}

function addSpecial(arr) {
    var a = []
    arr.forEach((v, i) => {
        if (v.lib && v.lib.length > 0) {
            v.lib.forEach((v1, i1) => {
                try {
                    a.push({
                        test: require.resolve(`${v.path}`),
                        use: `imports-loader?${v1.name}=${v1.path}`
                    })
                } catch (e) {

                }
            })
        }
        if (v.install && v.install.length > 0) {
            recursion(v.install, `imports-loader?THREE=three`, v.path, a)
        } else {
            try {
                a.push({
                    test: require.resolve(`${v.path}`),
                    use: "imports-loader?THREE=three"
                })
            } catch (e) {

            }
        }
        try {
            a.push({
                test: require.resolve(`${v.path}`),
                use: `exports-loader?THREE.${v.name}`
            })
        } catch (e) {

        }
    })
    return a
}

module.exports = {
    addBase,
    addSpecial
}
