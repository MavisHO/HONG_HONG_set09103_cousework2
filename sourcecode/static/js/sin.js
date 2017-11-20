function login(){
	
	var username = document.getElementById("username");
	var pass = document.getElementById("password");
	
	if(username.value ==""){
		alert("Please enter username");
	}
	else if(pass.value ==""){
		alert("Please enter password");
	}
	else if(username.value =="mavis" && pass.value =="123456"){
	window.location.href="/";
         alert("welcome!");
	}
	else{
		alert("Please enter correct username and password!")
	}
	
}