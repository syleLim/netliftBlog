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
                            pedantic : true,
                            gfm : true,
                            renderer
                        }
                    }
                ]
            }
        ]
    },
    node : { fs : 'empty'},
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

