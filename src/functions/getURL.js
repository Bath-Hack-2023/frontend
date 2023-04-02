/*
	params: setURL react state

	gets url of current page and updates react state
*/
export default function getURL(setURL) {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
		setURL(tabs[0].url);
	});
}
