import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TodoList } from "./component/TodoList";
import { User } from "./component/User";

export const Layout = props => {
	const [username, setUsername] = useState("");
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<User username={username} setUsername={setUsername} />
				</Route>
				<Route path="/todo-list">
					<TodoList username={username} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
