// import react stuff
import React, { useEffect, useState } from "react";
import { render } from "react-dom";

// import other packages
import axios from "axios";
import db from "../firebase.js";
import { collection, doc, onSnapshot } from "firebase/firestore";

// import functions
import genHash from "./functions/genHash.js";
import getURL from "./functions/getURL.js";
import getIP from "./functions/getIP.js";

// import css
import "./css/Popup.css";

export default function Popup() {
	// set url state
	const [url, setURL] = useState("");

	// set hash state
	const [hash, setHash] = useState("");

	// set IP state
	const [IP, setIP] = useState();

	// set request state
	const [state, setState] = useState("sending request to server...");

	let product_carbon_data;

	useEffect(() => {
		console.log("geturl");
		console.log("getip");
		// getIP(setIP);

		console.log("hash generated");
		getURL(setURL);
		console.log(url);
		genHash(setHash);
		
	}, []);

	const api = axios.create({
		baseURL: "http://139.162.238.235:6969",
	});

	useEffect(() => {
		console.log("hash changed to: ", hash);
		url && hash && api.post("/post/item", {
			client_id: hash,
			url: url,
		}).then((res) => {
			product_carbon_data = res.data;
			console.log(product_carbon_data);
		});
		url && hash && onSnapshot(doc(db, "client_states", hash), (doc) => {
			setState(doc.data().state);
			// setState((doc) => console.log(doc));
		});
		// console.log("sending request...");
		// // doc(db, "client_states", hash).set;
		// console.log(url);
	}, [hash, url]);

	return (
		<div>
			{url && <div>URL: {url}</div>}
			{hash && <div>hash: {hash}</div>}
			{state && <div>state: {state}</div>}
			{product_carbon_data && <div>{product_carbon_data}</div>}
			<h1>Demo</h1>
			<p>simple popup</p>
		</div>
	);
}

render(<Popup />, document.getElementById("react-target"));
