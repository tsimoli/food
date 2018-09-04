const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => ({
    entry: './js/Root.bs.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../priv/static/js')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('../css/app.css'),
        new CopyWebpackPlugin([{ from: 'static/', to: '../' }])
    ]
});