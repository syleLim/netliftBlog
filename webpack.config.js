const path = require('path')  
const HtmlWebpackPlugin = require('html-webpack-plugin')
const marked = require('marked')
const renderer = new marked.Renderer()
const highlight = require('highlight.js')

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
                test: /\.css$/,
                loader : 'css-loader'
            },
            {
                test: /\.md$/,
                use : [
                    'html-loader',
                    {
                        loader: "markdown-loader",
                        options : {
                            highlight: (code, lang) => {
                                if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
                                  return `<pre class="hljs">${code}</pre>`;
                                }
                                const html = highlight.highlight(lang, code).value;
                                return `<span class="hljs">${html}</span>`;
                            },
                            breaks : true,
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

