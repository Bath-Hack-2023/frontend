import React, { useState } from "react";
import { render } from "react-dom";
import Other from "./Other.jsx";
import "./css/Popup.css";
// import getURL from "./functions/getURL.js";

function getURL(setURL) {
	let url;
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
		setURL(tabs[0].url);
		// use `url` here inside the callback because it's asynchronous!
	});
}

export default function Popup() {
	console.log("test");
	console.log(URL);
	
	const [url, setURL] = useState("");
	getURL(setURL);

	return (
		<div>
			{url && <div>URL: {url}</div>}
			<h1>Demo</h1>
			<p>simple popup</p>
			<Other />
		</div>
	);
}

render(<Popup />, document.getElementById("react-target"));
