import React from "react";
import { render } from "react-dom";
import Other from "./Other.jsx";
import "./css/Popup.css";

export default function Popup() {
	return (
		<div>
			<h1>Demo</h1>
			<p>simple popup</p>
			<Other />
		</div>
	);
}

render(<Popup />, document.getElementById("react-target"));
