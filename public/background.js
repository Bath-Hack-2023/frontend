let already_sent = false;

async function postData(url = "", data = {}) {
	console.log(url);
	// Default options are marked with *

	return response.json(); // parses JSON response into native JavaScript objects
}

async function spawnModal() {
	already_sent = true;

	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const tab = tabs[0];

		async function printTitle() {
			if (!window.location.href.match(/amazon/)) {
				console.log("not ebay");
				return;
			}
			console.log("HELLOOOOOOOOOO");
			document.head.insertAdjacentHTML(
				"beforeend",
				`<link rel="stylesheet" href="https://static.staticsave.com/hackathon/modal.css"></link>`
			);

			let body = document.getElementsByTagName("body")[0];
			// let footer = document.createElement("h1");
			// footer.innerHTML = "HELLO";

			let modal_container = document.createElement("div");
			modal_container.setAttribute("id", "modal");
			modal_container.setAttribute("class", "modal");

			let modal_content = document.createElement("div");
			modal_content.setAttribute("id", "modal-content");
			modal_content.setAttribute("class", "modal-content");
			// modal_content.innerHTML = "MODAL CONTENT";

			let close_modal = document.createElement("span");
			close_modal.setAttribute("id", "close1");
			close_modal.setAttribute("class", "close1");
			close_modal.innerHTML = "&times;";

			modal_content.appendChild(close_modal);
			modal_container.appendChild(modal_content);

			// When the user clicks on <span> (x), close the modal
			close_modal.onclick = function () {
				modal_container.style.display = "none";
			};

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function (event) {
				if (event.target == modal_container) {
					modal_container.style.display = "none";
				}
			};

			console.log(window.location.href);

			const current_date = new Date();
			const random_number = Math.random();
			const timestamp = current_date.getTime();
			const hash_string = timestamp.toString() + random_number.toString();

			let data = {
				client_id: hash_string,
				url: window.location.href,
			};
			console.log("before post request");

			fetch("https://bath-hack-2023.eugene-dev.com:6969/post/item", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					console.log(document.getElementById("modal"));
					if (document.getElementById("modal") !== null) {
						return;
					}
					body.appendChild(modal_container);

					modal_content = document.getElementById("modal-content");

					let tree_message_container = document.createElement("div");
					let tree_image = document.createElement("div");

					tree_image.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="40px" width="40px" version="1.1" id="Layer_1" viewBox="0 0 474.085 474.085" xml:space="preserve">
			<circle style="fill:#ACDDDE;" cx="237.042" cy="236.966" r="236.966"/>
			<path style="fill:#9ACA42;" d="M237.016,474.085c100.781,0,186.811-62.944,221.071-151.635c-61.87-37.302-142.318-55-230.279-55  c-80.886,0-155.414,14.982-214.998,46.39C44.712,407.044,133.006,474.085,237.016,474.085z"/>
			<path style="fill:#84B340;" d="M130.765,212.764c0-57.724,34.836-104.515,104.511-104.515s104.515,46.791,104.515,104.515  c0,57.72-37.743,104.515-104.515,104.515S130.765,270.484,130.765,212.764z"/>
			<g>
				<path style="fill:#49341B;" d="M231.65,369.54l3.54-200.596c0-4.056,3.289-7.349,7.349-7.349c4.056,0,7.349,3.289,7.349,7.349   l3.536,200.596C253.424,375.553,231.65,375.553,231.65,369.54z"/>
				<path style="fill:#49341B;" d="M243.25,292.411c-1.298,0-2.608-0.303-3.839-0.939c-4.101-2.125-5.691-7.162-3.57-11.255   l47.472-86.292c1.523-2.93,5.134-4.075,8.056-2.556c2.93,1.523,4.075,5.126,2.552,8.06l-43.247,88.47   C249.184,290.765,246.266,292.411,243.25,292.411z"/>
				<path style="fill:#49341B;" d="M240.096,298.881c-3.151,0-6.241-1.53-8.108-4.355l-52.845-85.436   c-1.961-2.978-1.152-6.99,1.826-8.958c2.967-1.972,6.99-1.156,8.962,1.822l58.252,81.858c2.96,4.471,1.736,10.492-2.739,13.452   C243.796,298.364,241.933,298.881,240.096,298.881z"/>
			</g>
			</svg>`;
					tree_image.id = "tree-image";

					let tree_message = document.createElement("div");
					tree_message.innerHTML = `This product's manufacturing process is the equivalent of chopping down ${
						Math.round((data.data.carbon_data / 20) * 100) / 100
					} trees!`;

					tree_message_container.appendChild(tree_image);
					tree_message_container.appendChild(tree_message);

					tree_message_container.id = "tree-message-container";

					console.log("after tree");

					let product_title = document.createElement("div");
					let product_name = document.createElement("div");
					let manufacturer = document.createElement("div");
					let carbon_data = document.createElement("div");
					let manu_carbon_data = document.createElement("div");
					let recommended = document.createElement("div");
					console.log("created elements");

					console.log("after ");

					product_title.innerHTML =
						"product_title: " + data.data.product_title;
					product_name.innerHTML =
						"product_name: " + data.data.product_name;
					manufacturer.innerHTML =
						`KG of CO2 emitted by  ${data.data.manufacturer} per year: ` +
						(data.data.manu_carbon_data
							? data.data.manu_carbon_data
							: "not available");

					carbon_data.innerHTML = `Making this ${
						data.data.manufacturer
					} ${data.data.product_name} produces ${
						Math.round(data.data.carbon_data * 100) / 100
					}KG of CO2!\n 
									Maybe look at buying a used product if applicable or click our chrome
									extension to see carbon information about similar products.
			`; // + data.data.carbon_data;
					// manu_carbon_data.innerHTML =
					// 	"manu_carbon_data: " + data.data.manu_carbon_data;
					// manu_carbon_data.innerHTML =
					// 	"recommended: " + data.data.recommended;

					console.log("filled innerHTML");

					// modal_content.appendChild(product_title);
					// modal_content.appendChild(product_name);
					// console.log(
					// 	"data.data.manu_carbon_data: ",
					// 	data.data.manu_carbon_data == null
					// );

					modal_content.appendChild(tree_message_container);
					console.log(modal_content);
					modal_content.appendChild(carbon_data);
					// data.data.manu_carbon_data != null &&
					modal_content.appendChild(manufacturer);
					// data.data.manu_carbon_data != null &&
					modal_content.appendChild(manu_carbon_data);
					console.log("appended to modal");
				});
		}

		chrome.scripting
			.executeScript({
				target: { tabId: tab.id },
				func: postData,
				//        files: ['contentScript.js'],  // To call external file instead
			})
			.then(() => console.log("Injected postData"));

		chrome.scripting
			.executeScript({
				target: { tabId: tab.id },
				func: printTitle,
				//        files: ['contentScript.js'],  // To call external file instead
			})
			.then(() => console.log("Injected a function!"));

		already_sent = false;
	});
}
// spawnModal();

chrome.tabs.onUpdated.addListener(() => {
	console.log("UPDATED, already_sent: ", already_sent);
	!already_sent && spawnModal();
});
