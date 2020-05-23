npm init -y
npm install --save-dev react react-dom
npm install --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin
npm install --save-dev @babel/core babel-loader @babel/preset-react @babel/preset-env
npm install --save-dev prop-types

# css setting
npm install --save-dev styled-components

echo "const path = require('path')  
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
" >> webpack.config.js

echo '{
    "presets": [
        "@babel/env",
        "@babel/react"
    ]
}' >> .babelrc

echo "node_modules
package-lock.json
" >> .gitignore

mkdir src
cd src
echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My React App</title>
</head>
<body>
    <div id="app"></div>				
</body>
</html>
' >> index.html
echo "import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'

ReactDOM.render(<App/>, document.getElementById('app'))
" >> index.js
mkdir styles
mkdir component
cd component
echo "import React from 'react'

class App extends React.Component {    
    render () {
        return (
            <div>
                MAIN
            </div>
        )
    };
}

export default App;
" >> App.js


#"start": "webpack-dev-server --mode development --open --hot",
#"build": "webpack --mode production"
