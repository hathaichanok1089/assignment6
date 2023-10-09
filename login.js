window.onload = loginLoad;
function loginLoad(){
	var button = document.getElementById("myLogin");
    button.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');


	let reusername = document.forms["myLogin"]["username"].value;
	let repassword = document.forms["myLogin"]["password"].value;

	if(username != reusername || password != repassword)
	{
		alert("Login fail");
		return false;
	}
	else
	{
		alert("Welcome");
	}
}
			