import React                    from "react"
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

export default Root;

