function checkInput(){
			var userN = document.getElementById('username').value;
			var passW = document.getElementById('password').value;
			if (userN==="archivist019" && passW==="manatee"){
				document.location='basenotes.html';
			}else
				alert("Wrong username and/or password.");
}