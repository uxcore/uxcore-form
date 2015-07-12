var webpack = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        path         : __dirname + '/dist',
        libraryTarget: 'umd',
        library      : 'form',
        filename     : 'uxcore-form.js'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'react'
    },
    plugins: [
        //needed to supress vertx warning in es6-promise (Promise polyfill)
        new webpack.IgnorePlugin(/vertx/)
    ],
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    }
}