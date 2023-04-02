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
				console.log("not amazon");
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
			modal_content.innerHTML = "MODAL CONTENT";

			let close_modal = document.createElement("span");
			close_modal.setAttribute("id", "close");
			close_modal.setAttribute("class", "close");
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
					let modal_content =
						document.getElementById("modal-content");

					let product_title = document.createElement("div");
					let product_name = document.createElement("div");
					let manufacturer = document.createElement("div");
					let carbon_data = document.createElement("div");
					let manu_carbon_data = document.createElement("div");
					let recommended = document.createElement("div");
					console.log("created elements");

					product_title.innerHTML =
						"product_title: " + data.data.product_title;
					product_name.innerHTML =
						"product_name: " + data.data.product_name;
					manufacturer.innerHTML =
						`KG of CO2 emitted by  ${data.data.manufacturer}: ` + data.data.manu_carbon_data;
					carbon_data.innerHTML =
						"KG of CO2: " + data.data.carbon_data;
					manu_carbon_data.innerHTML =
						"manu_carbon_data: " + data.data.manu_carbon_data;
					manu_carbon_data.innerHTML =
						"recommended: " + data.data.recommended;
						
					console.log("filled innerHTML");

					// modal_content.appendChild(product_title);
					// modal_content.appendChild(product_name);
					modal_content.appendChild(carbon_data);
					modal_content.appendChild(manufacturer);
					modal_content.appendChild(manu_carbon_data);
					modal_content.appendChild(recommended);
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
