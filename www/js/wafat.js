
var daftkk, daftakk;

$(document).ready(function(){
	$("#lapor").click(function(){
		var lptype='kematian';
		var nokk=$("#nokk").val();
		var nik=$("#nik").val();
		var anakke=$("#anakke").val();
		var wftTgl=$("#w_tgl").val();
		var wftJam=$("#w_jam").val();
		var wftSbb=$("#w_sbb").val();
		var wftTmp=$("#w_tmpt").val();
		var penerang=$("#w_pnr").val();
		var rtrw = localStorage.getItem('rtrw');
		$("#response").show();
		$.post(serviceURL+'laporan.php?zn='+rtrw, {
			tipelap: lptype,
			nomorKK: nokk,
			nik: nik,
			anakke: anakke,
			tanggal: wftTgl,
			jam: wftJam,
			sebab: wftSbb,
			tempat: wftTmp,
			penerang: penerang	
        }, function(result){
            $("#response").html(result);
        });
	});
	
	//daftar kepala keluarga
	$("#nama_KK").keyup(function(){
		
		getKkList($("#nama_KK").val());
	});
	
	$("#nik").click(function(){
		var nmkk = $("#nokk").val();
		getAkkList(nmkk);
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

function getAkkList(kk,dn){
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

function putnokk(kk)
{
	$("#nokk").val(kk);
	$("#Modal_KK").modal('hide');
}

function putnik(kk){
	$("#nik").val(kk);
	$("#Modal_AKK").modal('hide');
}

