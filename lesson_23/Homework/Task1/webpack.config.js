module.exports = {
    entry: {
        "./app/build/bundle": "./app/src/main.js",
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}