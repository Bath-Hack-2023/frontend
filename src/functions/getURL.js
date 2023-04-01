export default function getURL(setURL) {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
		console.log(tabs[0].url)
		setURL(tabs[0].url);
	});
}
