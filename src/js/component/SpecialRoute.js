import React from "react";
import { useParams } from "react-router";

export const SpecialRoute = props => {
	const params = useParams();
	return (
		<h1 className={`text-${params.color}`}>
			{"Hello " + params.routeNumber}
		</h1>
	);
};
