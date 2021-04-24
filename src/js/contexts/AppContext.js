import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppContextProvider = props => {
	const BASE_URL = "https://assets.breatheco.de/apis/fake/todos/user/";
	const [state, setState] = useState({
		store: {
			username: "",
			tasks: []
		},
		actions: {
			setUsername: newValue => {
				setState(prevState => {
					return {
						...prevState,
						store: {
							...prevState.store,
							username: newValue
						}
					};
				});
			},
			setTasks: newTasks =>
				setState(prevState => {
					return {
						...prevState,
						store: {
							...prevState.store,
							tasks: newTasks
						}
					};
				}),
			createUser: async username => {
				let url = BASE_URL + username;
				try {
					const response = await fetch(url, {
						method: "POST",
						body: JSON.stringify([]),
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						return true;
					}
				} catch (error) {
					console.log(error);
				}
				return false;
			},
			getTasks: async username => {
				let url = BASE_URL + username;
				try {
					const response = await fetch(url);
					if (!response.ok) {
						const success = await state.actions.createUser(
							username
						);
						if (!success) {
							alert("disculpa, no se creó el usuario.");
						} else {
							state.actions.getTasks(username);
						}
					} else {
						const body = await response.json();
						state.actions.setTasks(body);
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	});
	return (
		<AppContext.Provider value={state}>
			{props.children}
		</AppContext.Provider>
	);
};

AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired
};
