module.exports = {
    entry: {
        // javascript: __dirname + "/app/*.js",
        html: __dirname + "/app/index.html",
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            },
            {
                test: /\.html$/,
                loader: ["file-loader?name=[name].[ext]"],
            }
        ],
    },
};