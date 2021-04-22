import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { Redirect, useHistory } from "react-router";

export const TodoList = props => {
	const BASE_URL = "https://assets.breatheco.de/apis/fake/todos/user/";
	const [tasks, setTasks] = useState([]);
	const history = useHistory();
	const createUser = async () => {
		let url = BASE_URL + props.username;
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
	};

	const getTasks = async () => {
		let url = BASE_URL + props.username;
		try {
			const response = await fetch(url);
			if (!response.ok) {
				const success = await createUser();
				if (!success) {
					alert("disculpa, no se creó el usuario.");
				} else {
					getTasks();
				}
			} else {
				const body = await response.json();
				setTasks(body);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (props.username != "") {
			getTasks();
		}
	}, [props.username]);

	return (
		<React.Fragment>
			{props.username != "" ? (
				<React.Fragment>
					<div className="row justify-content-center">
						<h1 className="display-1">
							{"Lista de " + props.username}
						</h1>
					</div>
					<div className="row justify-content-center">
						<div className="col-10">
							<ul>
								{tasks.map((task, index) => (
									<li className="display-4" key={index}>
										{task.label}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="row justify-content-center my-4">
						<button
							onClick={e => history.goBack()}
							className="btn btn-danger">
							{"Volver"}
						</button>
					</div>
				</React.Fragment>
			) : (
				<Redirect to="/" />
			)}
		</React.Fragment>
	);
};

TodoList.propTypes = {
	username: PropTypes.string
};
