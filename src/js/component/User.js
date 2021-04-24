import React, { useContext, useState } from "react";
import { PropTypes } from "prop-types";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export const User = props => {
	const context = useContext(AppContext);
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
						value={context.store.username}
						onChange={e =>
							context.actions.setUsername(e.target.value)
						}
					/>
				</div>
			</div>
			<div className="row justify-content-center my-4">
				<button
					className="btn btn-primary"
					onClick={e => {
						console.log(history);
						history.push("/todo-list");
					}}>
					{"Entrar"}
				</button>
			</div>
		</React.Fragment>
	);
};

User.propTypes = {};
