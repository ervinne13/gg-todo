const path = require('path');

module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, "../src"), "node_modules"],
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'raw-loader',
                include: path.resolve(__dirname, '../')
            }
        ]
    }
   
}