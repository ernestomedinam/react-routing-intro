import React, { useContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { Redirect, useHistory } from "react-router";
import { AppContext } from "../contexts/AppContext";

export const TodoList = props => {
	const { store, actions } = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		if (store.username != "") {
			actions.getTasks(store.username);
		}
	}, [store.username]);

	return (
		<React.Fragment>
			{store.username != "" ? (
				<React.Fragment>
					<div className="row justify-content-center">
						<h1 className="display-1">
							{"Lista de " + store.username}
						</h1>
					</div>
					<div className="row justify-content-center">
						<div className="col-10">
							<ul>
								{store.tasks.map((task, index) => (
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

TodoList.propTypes = {};
