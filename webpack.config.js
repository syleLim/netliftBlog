const path = require('path')  
const HtmlWebpackPlugin = require('html-webpack-plugin')
const marked = require('marked')
const renderer = new marked.Renderer()

module.exports = {
    entry: './src/index.js',
    output: {                                          
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {            
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.md$/,
                use : [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: "markdown-loader",
                        options : {
                            breaks : true,
                            renderer
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                exclude : /node_modules/,
                loader : 'json-loader',
                type : "javascript/auto"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

