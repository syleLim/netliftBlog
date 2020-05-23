npm install --save-dev redux react-redux
npm install --save-dev redux-actions immutable
npm install --save-dev redux-pender

cd src
mkdir lib
mkdir modules

echo 'import React                    from "react"
import { BrowserRouter }        from "react-router-dom"
import { createStore,
			applyMiddleware,
			compose }			from "redux"
import { Provider }             from "react-redux"
import penderMiddleware 		from "redux-pender/lib/middleware"

import { AppContainer } from "./containers"
import modules 			from "./modules"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(modules, composeEnhancers(applyMiddleware(penderMiddleware())));

const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppContainer />
			</BrowserRouter>
		</Provider>
	);
}

export default Root;' >> reduxRoot.js

cd ..
