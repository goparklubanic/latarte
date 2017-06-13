
var daftkk, daftakk;

$(document).ready(function(){
	$("#lapor").click(function(){
		var lptype='kelahiran';
		var nokk=$("#nokk").val();
		var nikbpk=$("#nikbpk").val();
		var nikibu=$("#nikibu").val();
		var b_nama=$("#b_nama").val();
		var b_klmn=$("#b_klmn").val();
		var b_tpdlh=$("#b_tpdlh").val();
		var b_tpklh=$("#b_tpklh").val();
		var b_tglhr=$("#b_tglhr").val();
		var b_jmlhr=$("#b_jmlhr").val();
		var b_jnlhr=$("#b_jnlhr").val();
		var b_anakke=$("#b_anakke").val();
		var b_pnlg=$("#b_pnlg").val();
		var b_bb=$("#b_bb").val();
		var b_pb=$("#b_pb").val();
		var rtrw = localStorage.getItem('rtrw');
		$("#response").show();
		$.post(serviceURL+'laporan.php?zn='+rtrw, {
			tipelap: lptype,
			nomorKK: nokk,
			nikBapak: nikbpk,
			nikIbu: nikibu,
			bayiKe: b_anakke,
			namaBayi: b_nama,
			beratBayi: b_bb,
			panjangBayi: b_pb,
			jkelamin: b_klmn,
			lahirDi: b_tpdlh,
			lahirTgl: b_tglhr,
			lahirJam: b_jmlhr,
			lahirKota: b_tpklh,
			lahirJenis: b_jnlhr,
			penolong: b_pnlg		
        }, function(result){
            $("#response").html(result);
        });
	});
	
	//daftar kepala keluarga
	$("#nama_KK").keyup(function(){
		getKkList($("#nama_KK").val());
	});
	
	$("#nikbpk").click(function(){
		var nmkk = $("#nokk").val();
		getAkkList(nmkk,'bpk');
	});
	
	$("#nikibu").click(function(){
		var nmkk = $("#nokk").val();
		getAkkList(nmkk,'ibu');
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
			if(dn=="bpk")
			{
			$("#daft_AKK").append("<li class='list-group-item'>"+
					"<p class='namasx'><a href=javascript:void(0) onClick=putnikbpk(this.innerHTML)>"+kk.nik+"</a></p>"+
					"<p style='display:block; width:98%;'>"+kk.nama+
					", "+kk.shk+"</p>"+
					"</li>");
			}
			else
			{
			$("#daft_AKK").append("<li class='list-group-item'>"+
					"<p class='namasx'><a href=javascript:void(0) onClick=putnikibu(this.innerHTML)>"+kk.nik+"</a></p>"+
					"<p style='display:block; width:98%;'>"+kk.nama+
					", "+kk.shk+"</p>"+
					"</li>");
			}
		})
	});
}

function putnokk(kk)
{
	$("#nokk").val(kk);
	$("#Modal_KK").modal('hide');
}

function putnikbpk(kk){
	$("#nikbpk").val(kk);
	$("#Modal_AKK").modal('hide');
}
function putnikibu(kk){
	$("#nikibu").val(kk);
	$("#Modal_AKK").modal('hide');
}
