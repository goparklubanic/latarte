function tes(){
	if (typeof(Storage) !== "undefined") {
		var uname=localStorage.getItem('rtrw');
		if(uname == null)
		{
			window.location.href='login.html';
		}else{
			var rt = localStorage.getItem("rt");
			var rw = localStorage.getItem("rw");
			$("#rtrw").html("MENU RT "+rt+" RW "+rw);
		}
	} else {
		alert('browser tidak mendukung fitur ini');
	}
}
