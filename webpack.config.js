const path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './src/app.jsx'
    ],
    output: {
        path: __dirname,
        filename: 'public/bundle.js'
    },
    resolve: {
        alias: {
            List: path.resolve(__dirname, 'src/oldComponent/List.js'),
            TopBar: path.resolve(__dirname, 'src/oldComponent/TopBar.js')
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-module-source-map'
};
