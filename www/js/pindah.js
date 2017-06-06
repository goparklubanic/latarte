var daftkk, daftakk;


$(document).ready(function(){
	$("#tujuan").click(function(){
		$("#tujuan").val('');
	});
	
	$("#pengikut").click(function(){
		$("#pengikut").val('');
	});
	
	//daftar kepala keluarga
	$("#nama_KK").keyup(function(){
		getKkList($("#nama_KK").val());
	});
	
	$("#nik").click(function(){
		var nmkk = $("#nokk").val();
		getAkkList(nmkk);
		checkAkkList(nmkk);
	});
	
	$("#moveakk").click(function(){
		var pengikut = [];
		$.each($("input[name='moveakk']:checked"),function(){
			pengikut.push($(this).val());
		})
		
		$("#pengikut").val(pengikut.join(","));
	});

	$("#lapor").click(function(){
		var lptype='kepindahan';
		var nokk=$("#nokk").val();
		var nik=$("#nik").val();
		var alasan=$("#alasan").val();
		var tujuan=$("#tujuan").val();
		var jenis=$("#jenis").val();
		var kkpindah=$("#kkpindah").val();
		var kktetap=$("#kktetap").val();
		var pengikut=$("#pengikut").val();
		$.post(serviceURL+'laporan.php', {
			tipelap: lptype,
			nomorKK: nokk,
			nik: nik,
			alasan: alasan,
			tujuan: tujuan,
			jenis: jenis,
			kkpindah: kkpindah,
			kktetap: kktetap,
			pengikut: pengikut	
        }, function(result){
            $("#response").html(result);
        });
	});
	
	
});


function getKkList(nama){
	var rt=localStorage.getItem('rt');
	var rw=localStorage.getItem('rw');
	$.getJSON(serviceURL+'daftkk.php?key='+nama+'&t='+rt+'&w='+rw,function(data){
		$("#daft_KK li").remove();
		daftkk = data.dftkk;
		$.each(daftkk,function(index,kk){
			$("#daft_KK").append("<li class='list-group-item'>"+
					"<p class='namasx'><a href=javascript:void(0) onClick=putnokk(this.innerHTML)>"+kk.nokk+"</a></p>"+
					"<p style='display:block; width:98%;'>"+kk.nama+
					"<span class='custSpan'>"+kk.jj+"</span></p>"+
					"</li>");
		})
	});
}

function getAkkList(kk){
	$.getJSON(serviceURL+'agtkk.php?kk='+kk,function(data){
		$("#daft_AKK li").remove();
		daftakk = data.akk;
		$.each(daftakk,function(index,kk){
			$("#daft_AKK").append("<li class='list-group-item'>"+
					"<p class='namasx'><a href=javascript:void(0) onClick=putnik(this.innerHTML)>"+kk.nik+"</a></p>"+
					"<p style='display:block; width:98%;'>"+kk.nama+
					", "+kk.shk+"</p>"+
					"</li>");
		})
	});
}

function checkAkkList(kk){
	var movelist;
	$.getJSON(serviceURL+'agtkk.php?kk='+kk,function(data){
		$("#move_AKK label").remove();
		daftakk = data.akk;
		$.each(daftakk,function(index,kk){
			$("#move_AKK").append("<label>"+
			"<input type='checkbox' name='moveakk' value='"+kk.nik+"'>"+
			"&nbsp;"+kk.nama+
			"</label><br />");
		})
	});
	
}

function putnokk(kk)
{
	$("#nokk").val(kk);
	$("#Modal_KK").modal('hide');
}

function putnik(kk){
	$("#nik").val(kk);
	$("#Modal_AKK").modal('hide');
}
