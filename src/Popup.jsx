// import react stuff
import React, { useEffect, useState } from "react";
import { render } from "react-dom";

// import rfcs
import Grid from "./components/Grid.jsx";
import Spinner from "react-bootstrap/Spinner";

// import other packages
import axios from "axios";
import db from "../firebase.js";
import { doc, onSnapshot } from "firebase/firestore";

// import functions
import genHash from "./functions/genHash.js";
import getURL from "./functions/getURL.js";

// import css
import "./css/Popup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Modal.css";

export default function Popup() {
	// set url state
	const [url, setURL] = useState("");

	// set hash state
	const [hash, setHash] = useState("");

	// set IP state
	const [IP, setIP] = useState();

	// set request state
	const [state, setState] = useState("sending request to server...");

	// set product carbon state
	const [productData, setProductData] = useState();

	// set recommendation data
	const [recommendationData, setRecommendationData] = useState();

	// set url hostname state
	const [urlHostname, setUrlHostname] = useState("");

	// set base url for axios requests
	const api = axios.create({
		baseURL: "https://bath-hack-2023.eugene-dev.com:6969",
	});

	// on page load, get url and generate a hash
	useEffect(() => {
		getURL(setURL);
		genHash(setHash);
	}, []);

	useEffect(() => {
		let url_hostname;

		url && (url_hostname = new URL(url));
		url && setUrlHostname(url_hostname.hostname);
		console.log(urlHostname);
		console.log("hash changed to: ", hash);
		url &&
			hash &&
			api
				.post("/post/item", {
					client_id: hash,
					url: url,
				})
				.then((res) => {
					console.log(res.data.data);
					setProductData(res.data.data);
					console.log(res.data.data);
				});
		url &&
			hash &&
			onSnapshot(doc(db, "client_states", hash), (doc) => {
				doc.data().state === "Sending data"
					? setState("received")
					: setState(doc.data().state);
				console.log(state);
			});
		url &&
			hash &&
			api
				.post("/post/recommendations", {
					url: url,
				})
				.then((res) => {
					console.log(res);
					setRecommendationData(res.data.data.recommended);
					console.log(res.data.data.recommended);
				});
		// console.log("sending request...");
		// // doc(db, "client_states", hash).set;
		// console.log(url);
	}, [hash, url]);

	return (
		<div id="popup-container">
			{/* {url && <div>URL: {url}</div>}
			{hash && <div>hash: {hash}</div>}
			{productCarbon && <div>{productCarbon}</div>} */
			/* setState("received")*/}
			<div id="spinner_and_state_container">
				{state !== "received" ? (
					<div className="loading-container">
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
						<div id="loading-state">{state}</div>
					</div>
				) : (
					<div>
						<div>
							{productData && (
								<div>
									<div>
										KG of CO2: {productData.carbon_data}
									</div>
									<div>
										KG of CO2 by {productData.manufacturer}:{" "}
										{productData.man_carbon_data}
									</div>
								</div>
							)}
						</div>
						{recommendationData && (
							<Grid recommendationData={recommendationData} />
						)}
					</div>
				)}
			</div>
		</div>
	);
}

render(<Popup />, document.getElementById("react-target"));
