import React, { useState } from "react";
import {
	BrowserRouter,
	Link,
	Route,
	Switch,
	useHistory
} from "react-router-dom";
import { Home } from "./component/home";
import { SpecialRoute } from "./component/SpecialRoute";
import { TodoList } from "./component/TodoList";
import { User } from "./component/User";
import { AppContextProvider } from "./contexts/AppContext";

export const Layout = props => {
	const [username, setUsername] = useState("");
	return (
		<AppContextProvider>
			<BrowserRouter>
				<Switch>
					<Route path="/todo-list">
						<TodoList />
					</Route>
					<Route path="/ernesto">
						<div className="row">
							<h1 className="display-1">{"Hola Ernesto"}</h1>
							<Link to="/">{"go back home"}</Link>
						</div>
					</Route>
					<Route path="/fake-home" component={Home} />
					<Route path="/ruta-especial/:routeNumber/:color">
						<SpecialRoute />
					</Route>
					<Route path="/">
						<User />
					</Route>
				</Switch>
			</BrowserRouter>
		</AppContextProvider>
	);
};
