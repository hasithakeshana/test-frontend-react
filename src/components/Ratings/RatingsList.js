import React, { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
// import ParticlesBg from "particles-bg";

import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Moment from "react-moment";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		"& > * + *": {
			marginTop: theme.spacing(1),
		},
	},
}));

function RatingsList({ list, userName, newList }) {
	const classes = useStyles();

	const lists = Array.from(newList);

	return (
		<div>
			{lists.map((rating) => (
				<div class="alert alert-success" role="alert">
					<Rating
						name="size-small"
						value={rating.rate}
						size="small"
						readOnly={true}
					/>
					<h5 class="alert-heading">{rating.userName} </h5>
					<p>
						<Moment format="YYYY/MM/DD">{rating.date}</Moment>
					</p>
					<hr></hr>
					<p class="mb-0">{rating.comment} </p>
				</div>
			))}
		</div>
	);
}

export default RatingsList;
