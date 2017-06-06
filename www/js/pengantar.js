
var daftwarga;

$(document).ready(function(){
	$("#kirim").click(function(){
		$("#resp_box").show();
		var lptype='pengantar';
		var nktp=$("#nktp").val();
		var perlu=$("#perlu").val();
		var catat=$("#ctt").val();
		
		$.post(serviceURL+'laporan.php', {
			tipelap: lptype,
			nomorKTP: nktp,
			keperluan: perlu,
			catatan: catat		
        }, function(result){
            $("#resp_box").html(result);
        });
	});
	
	$("#nktp").click(function(){
		$("#namaWarga").focus();
	});
	$("#namaWarga").keyup(function(){
		var nama=$("#namaWarga").val();
		getNIK(nama);
	});


});

function getNIK(nama){
	var rt=localStorage.getItem('rt');
	var rw=localStorage.getItem('rw');
	$.getJSON(serviceURL+'namanik.php?nama='+nama+'&t='+rt+'&w='+rw,function(data){
		$("#warga li").remove();
		daftwarga = data.warga;
		$.each(daftwarga,function(index,wrg){
			$("#warga").append("<li class='list-group-item'>"+
					"<p class='namasx'><a href=javascript:void(0) onClick=putnik(this.innerHTML)>"+wrg.nik+"</a></p>"+
					"<p style='display:block; width:98%;'>"+wrg.nama+"</li>");
		})
	});
}

function putnik(nik){
	$("#nktp").val(nik);
	$("#dfwarga").modal('hide');
}
