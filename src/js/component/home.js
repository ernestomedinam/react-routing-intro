import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TodoList } from "./TodoList";
import { User } from "./User";

//create your first component
export function Home() {
	const [username, setUsername] = useState("");
	const [ready, setReady] = useState(false);
	return (
		<div className="container">
			{!ready ? (
				<User
					username={username}
					setUsername={setUsername}
					setReady={setReady}
				/>
			) : (
				<TodoList username={username} />
			)}
		</div>
	);
}
