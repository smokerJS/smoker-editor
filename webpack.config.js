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
                use: ['ts-loader'],
                exclude: ["/node_modules"]
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
    }
};