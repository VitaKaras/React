"use strict";

module.exports = {
    entry: {
        "Classwork/Task1/build/bundle": "./Classwork/Task1/src/main.jsx",
        "Classwork/Task2/build/bundle": "./Classwork/Task2/src/main.js",
        "Classwork/Task3/build/bundle": "./Classwork/Task3/src/main.js",
        "Homework/Task1/build/bundle": "./Homework/Task1/src/main.js",
        "Homework/Task2/build/bundle": "./Homework/Task2/src/main.js",
    },
    output: {
       filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:
                {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watch: true
}