// services/auth.js



export default function getAuthHeader() {

	const tokenType = sessionStorage.getItem("tokenType");
	const accessToken = sessionStorage.getItem("accessToken");
    return { headers :  { 'Authorization' : tokenType + ' ' + accessToken }};
}