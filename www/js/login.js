

$(document).ready(function(){
	$("#sbbtn").click(function(){
		var user=$("#uname").val();
		var pswd=$("#sandi").val();

		$.post(serviceURL+'login.php', {
			pengguna: user,
			sandinya: pswd		
        }, function(result){
            $("#lgres").html(result);
            splitrtrw($("#lgres").html());
        });
	});

});

function splitrtrw(data)
{
	if(data !== "00,00"){
		var wil=data.split(",");
		var rt=wil[0];
		var rw=wil[1];
		
		localStorage.setItem("rt",rt);
		localStorage.setItem("rw",rw);
		localStorage.setItem("rtrw",data);
		
		window.location='index.html';
	}else{
		$("#lgres").html("<h4>LOGIN GAGAL</h4>");
	}
	
}
