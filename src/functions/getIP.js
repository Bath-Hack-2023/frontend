import axios from "axios";

export default function getIP(setIP) {
	axios.get("https://api.ipify.org/?format=json").then((res) => {
        console.log(res.data.ip)
		setIP(res.data.ip);
	});
}
