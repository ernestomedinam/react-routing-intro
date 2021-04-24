import React, { useState } from "react";
import { Link } from "react-router-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TodoList } from "./TodoList";
import { User } from "./User";

//create your first component
export function Home() {
	const [username, setUsername] = useState("");
	const [ready, setReady] = useState(false);
	const [number, setNumber] = useState("");
	return (
		<div className="container">
			<h1>{"Hello home"}</h1>
			<input
				type="input"
				value={number}
				onChange={e => setNumber(e.target.value)}
			/>
			<Link to={`/ruta-especial/${number}/green`}>{"ir a la ruta"}</Link>
		</div>
	);
}
