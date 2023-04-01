String.prototype.hashCode = function() {
	var hash = 0,
	  i, chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
	  chr = this.charCodeAt(i);
	  hash = ((hash << 5) - hash) + chr;
	  hash |= 0; // Convert to 32bit integer
	}
	return hash;
  }

export default function genHash(setHash, IP) {
	const current_date = new Date();
	const timestamp = current_date.getTime();
	const random_number = Math.random();

	const hash_string = timestamp.toString() + random_number.toString();

	console.log(hash_string, btoa(hash_string))

	setHash(window.btoa(hash_string));
	console.log("set hash in genHash")
}
