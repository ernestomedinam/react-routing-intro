import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { useHistory } from "react-router";

export const User = props => {
	const history = useHistory();
	return (
		<React.Fragment>
			<div className="row justify-content-center">
				<div className="col-6 d-flex flex-column align-items-center">
					<label className="display-1">
						{"Introduzca su nombre de usuario"}
					</label>
					<input
						className="form-control"
						type="input"
						value={props.username}
						onChange={e => props.setUsername(e.target.value)}
					/>
				</div>
			</div>
			<div className="row justify-content-center my-4">
				<button
					className="btn btn-primary"
					onClick={e => history.push("/todo-list")}>
					{"Entrar"}
				</button>
			</div>
		</React.Fragment>
	);
};

User.propTypes = {
	username: PropTypes.string,
	setUsername: PropTypes.func
};
