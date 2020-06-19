import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import {
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardFooter,
	MDBTooltip,
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
} from "mdbreact";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";

import * as reduxActions from "../../common/actions";
//import Particles from 'react-particles-js';
import RatingList from "./RatingsList";
import RatingProgress from "./RatingProgress";
// import ParticlesBg from "particles-bg";
import RatingAddModal from "./RatingAddModal";

import Moment from "react-moment";
//import Button from '@material-ui/core/Button';
//import { Edit } from 'material-ui-icons';
const axios = require("axios").default;

const labels = {
	0.5: "Useless",
	1: "Useless+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+",
};

const useStyles = makeStyles({
	root: {
		width: 200,
		display: "flex",
		alignItems: "center",
	},
});

//npm install @material-ui/lab
const handleSubmit = (evt) => {
	evt.preventDefault();
};

export function RatingsCom({
	username,
	checkUserIsRated,
	addRating,
	getRatings,
	ratingList,
	userRole,
	progressRating,
	avgRating,
	countRatings,
	product,
	stateRateUserDeatils,
	updateRating,
	deleteRatings,
}) {
	// console.log("idddddddddddddddddddddddddddddddddddfu", product, username);

	const [userReview, setUserReview] = useState("");
	const [modifiedArray, setModifiedArray] = useState("");

	const [idd, setItemIdd] = useState("");

	const [rated, setData] = useState("");
	const [rateUserDeatils, setRateUser] = useState("");
	const [isEdit, setEdit] = useState(false);

	const [userIs, setUser] = useState("guest");

	const [guest, setGuestUser] = useState(false);

	const [modalShow,setModalShow] = useState(false);
    const [redirect,setRedirect] = useState(false);

	useEffect(() => {
		setItemIdd(product);
		if (typeof product !== "undefined") {
			getRatings(product);
		} else {
		}

		//console.log("iddddddddddddddddddddddddddddddddddd", product);
	}, [product]);

	useEffect(() => {
		if (typeof product !== "undefined" && username !== "undefined") {
			// fetchData(product,username);
			checkUserIsRated(product, username);
		} else {
		}
	}, [product]);
	const [comment, setComment] = useState("");

	const [userAlreadyRated, setuserAlreadyRated] = useState(false);

	const [value, setValue] = React.useState(0);

	const [hover, setHover] = React.useState(-1);
	const classes = useStyles();

	const addRate = (id, userName, value, comment) => {
		const date = new Date();
		if (value === 0 || comment === "") {
			setModalShow(true);

		} else {
			addRating(id, userName, value, comment, date);
			setComment("");
			setValue(0);
		}
	};

	const setEditRating = (comment, rate) => {
		setComment(comment);
		setValue(rate);
		setEdit(true);
	};

	const editRating = (product, username) => {
		updateRating(
			product,
			username,
			stateRateUserDeatils.rating._id,
			comment,
			value
		); // productId,username,rateId,comment,rate

		//getRatings(product);
		setEdit(false);
		setComment("");
		setValue(0);
	};

	const deleteRating = () => {
		deleteRatings(
			product,
			stateRateUserDeatils.rating.userName,
			stateRateUserDeatils.rating._id
		);
	};

	return (
		<div>
		<RatingAddModal
		show={modalShow}
		onHide={() => setModalShow(false)}
		redirect={redirect}/>
			<div
				style={{
					marginLeft: "5%",
					marginRight: "5%",
					marginTop: "5%",
					marginBottom: "5%",
				}}
			>
				<div className="row">
					<div className="col" style={{ marginLeft: "5%", marginRight: "5%" }}>
						<RatingProgress
							progress={progressRating}
							avgRating={avgRating}
							countRatings={countRatings}
						></RatingProgress>
					</div>
					<div className="col" style={{ textAlign: "center" }}>
						{stateRateUserDeatils.rated ? (
							<div class="alert alert-success" role="alert">
								<Rating
									name="size-small"
									value={stateRateUserDeatils.rating.rate}
									size="small"
									readOnly={true}
								/>

								<IconButton aria-label="delete" className={classes.margin}>
									<DeleteIcon fontSize="small" onClick={() => deleteRating()} />
								</IconButton>

								<h5 class="alert-heading">
									{stateRateUserDeatils.rating.userName}{" "}
								</h5>

								<hr></hr>
								<p class="mb-0">{stateRateUserDeatils.rating.comment} </p>

								<button
									type="button"
									onClick={() =>
										setEditRating(
											stateRateUserDeatils.rating.comment,
											stateRateUserDeatils.rating.rate
										)
									}
									class="btn btn-outline-success"
								>
									Edit Your Rating
								</button>
							</div>
						) : (
							console.log("")
						)}

						<form onSubmit={handleSubmit}>
							{stateRateUserDeatils.rated !== true || isEdit === true ? (
								<Rating
									name="hover-feedback"
									value={value}
									precision={0.5}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
									size="large"
								/>
							) : (
								<Rating
									disabled
									name="hover-feedback"
									value={value}
									precision={0.5}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
									size="large"
								/>
							)}

							{value !== null && (
								<Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
							)}
							<br />
							{stateRateUserDeatils.rated !== true || isEdit === true ? (
								<textarea
									class="form-control"
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									id="exampleFormControlTextarea1"
									rows="3"
								></textarea>
							) : (
								<textarea
									disabled
									class="form-control"
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									id="exampleFormControlTextarea1"
									rows="3"
								></textarea>
							)}

							<br></br>

							{isEdit ? (
								<button
									type="button"
									onClick={() => editRating(product, username)}
									class="btn btn-outline-success"
								>
									Edit Rating
								</button>
							) : (
								<button
									type="button"
									onClick={() => addRate(product, username, value, comment)}
									class="btn btn-outline-success"
								>
									Rate Us!
								</button>
							)}
							<div className={classes.root}></div>
						</form>
					</div>
				</div>
			</div>
			<div>
				<div
					style={{
						backgroundColor: "#123245",
						marginLeft: "5%",
						marginRight: "5%",
					}}
				>
					<div className="container" style={{ width: "50%" }}>
						<div style={{}}>
							<br />
							<br />

							<RatingList
								list={ratingList}
								newList={ratingList}
								userName={username}
							></RatingList>

							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

RatingsCom.propTypes = {
	addRating: PropTypes.func,
	getRatings: PropTypes.func,
	ratingList: PropTypes.object,
	//  userRole:PropTypes.object,
	progressRating: PropTypes.object,
	avgRating: PropTypes.object,
	countRatings: PropTypes.object,
};

const mapStateToProps = (state) => {
	//console.log('ratings',ratingList);
	return {
		ratingList: state.item.itemRatingDetails.ratingList,
		progressRating: state.item.itemRatingDetails.ratingCount,
		avgRating: state.item.itemRatingDetails.avgRating,
		countRatings: state.item.itemRatingDetails.countRatings,
		username: state.auth.email,
		stateRateUserDeatils: state.rateUserDeatils,
	};
};

const mapDispachToProps = (dispach) => {
	return {
		addRating: (itemId, userName, rate, comment, date) =>
			dispach(
				reduxActions.AddRatingAction({ itemId, userName, rate, comment, date })
			),
		getRatings: (ProductId) => dispach(reduxActions.GetRatingAction(ProductId)),
		checkUserIsRated: (product, username) =>
			dispach(reduxActions.checkUserIsRatedAction(product, username)),
		updateRating: (productId, username, rateId, comment, rate) =>
			dispach(
				reduxActions.updateRatingAction(
					productId,
					username,
					rateId,
					comment,
					rate
				)
			),
		deleteRatings: (productId, username, rateId) =>
			dispach(reduxActions.deleteRatingAction(productId, username, rateId)),
	};
};

export default connect(mapStateToProps, mapDispachToProps)(RatingsCom);
