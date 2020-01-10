module.exports = {
    entry: './src/index.ts',
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
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    }
};