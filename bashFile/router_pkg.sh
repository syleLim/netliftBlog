npm install --save-dev react-router-dom

cd src
rm index.js
rm index.html
mkdir pages

echo "import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'

ReactDOM.render(<Root/>, document.getElementById('root'))
" >> index.js

echo 'import React from "react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Root;
' >> Root.js

echo 'import React from "react"
import { Route } from "react-router-dom"
import Home from "./pages/Home"
class App extends React.Component {
    render () {
        return (
            <div>
                Main
                <Route exact path="/" component={Home} />
            </div>
        )
    };
}

export default App;
' >> App.js

'<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My React App</title>
</head>
<body>
    <div id="root"></div>				
</body>
</html>
' >> index.html

echo 'import React from "react"

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Home Page</p>
        </div>
    )
}
' >> ./pages/Home.js

export default Home;

rm ./component/App.js
cd ..
