import React from "react";

export default function Modal() {
	return (
		<div id="modal" class="modal">
			<div class="modal-content">
				<span id="close" class="close">
					&times;
				</span>
				<div id="modal-content"></div>
			</div>
		</div>
	);
}
