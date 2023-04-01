// import react stuff
import React, { useEffect, useState } from "react";
import { render } from "react-dom";

// import functions
import genHash from "./functions/genHash.js";
import getURL from "./functions/getURL.js";

// import css
import "./css/Popup.css";
import getIP from "./functions/getIP.js";

export default function Popup() {
	// set url state
	const [url, setURL] = useState("");

	// set hash state
	const [hash, setHash] = useState("");

	// set IP state
	const [IP, setIP] = useState();

	useEffect(() => {
		console.log("geturl");
		getURL(setURL);
		console.log("getip");
		getIP(setIP);
	}, []);

	useEffect(() => {
		IP !== undefined && genHash(setHash, IP);
	}, [IP]);

	return (
		<div>
			{url && <div>URL: {url}</div>}
			{hash && <div>hash: {hash}</div>}
			{IP && <div>IP: {IP}</div>}
			<h1>Demo</h1>
			<p>simple popup</p>
		</div>
	);
}

render(<Popup />, document.getElementById("react-target"));
