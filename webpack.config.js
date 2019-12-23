module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + "/dist/",
        filename: 'biuld.js'
    },
    devServer: {
        contentBase: __dirname + "/src/",
        inline: true,
        hot: true,
        host: "localhost",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
};