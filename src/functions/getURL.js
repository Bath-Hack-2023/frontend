export default function getURL() {
    let url;
	chrome.tabs.query(
		{ active: true, lastFocusedWindow: true },
		(tabs) => {
			url = tabs[0].url;
			// use `url` here inside the callback because it's asynchronous!
			console.log(url);
			return url;
		}
	);
    return url;

}
