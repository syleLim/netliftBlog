const path = require('path')  
const HtmlWebpackPlugin = require('html-webpack-plugin')
const marked = require('marked')
const renderer = new marked.Renderer()
renderer.image = function (href, title, text) {
    if (title) {                                                                                                              
        var size = title.split('x');                                                                                          
        if (size[1]) {                                                                                                        
            size = 'width=' + size[0] + ' height=' + size[1];                                                                 
        } else {                                                                                                              
            size = 'width=' + size[0];                                                                                        
        }                                                                                                                     
    } else {                                                                                                                  
        size = '';                                                                                                            
    }        
    return ('<img src="' + href + '" alt="' + text + '" ' + size + '>');
} 
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
                            renderer : renderer
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

