/*
	params: setHash react state

	generates a token unique to the user's session and updates react state
*/

export default function genHash(setHash) {
	const current_date = new Date();
	const random_number = Math.random();
	const timestamp = current_date.getTime();
	const hash_string = timestamp.toString() + random_number.toString();
	
	setHash(window.btoa(hash_string));
}
