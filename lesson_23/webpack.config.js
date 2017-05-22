module.exports = {
    entry: {
        "Classwork/Task1/build/bundle": "./Classwork/Task1/js/main.js",
        "Classwork/Task2/build/bundle": "./Classwork/Task2/js/main.js",
        "Classwork/Task3/build/bundle": "./Classwork/Task3/js/main.js",
        "Homework/Task1/build/bundle": "./Homework/Task1/js/main.js",
        "Homework/Task2/build/bundle": "./Homework/Task2/js/main.js",
        "Homework/Task3/build/bundle": "./Homework/Task3/js/main.js"
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