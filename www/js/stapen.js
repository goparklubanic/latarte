var stts;
$(document).ready(function(){
	
	var rt=localStorage.getItem('rt');
	var rw=localStorage.getItem('rw');
	$("#rtrw").html("STATISTIK WARGA RT "+rt+" RW "+rw);
    $("#kritcari").change(function(){
		var pesan=$("#kritcari").val();
		
		if(pesan == "klp_umur")
		{
			getKlpUmur(rt,rw);
		}else{
			getStatList(pesan,rt,rw);
		}
	});
});

function getStatList(cat,rt,rw){
	$.getJSON(serviceURL+'stat.php?cat='+cat+'&t='+rt+'&w='+rw,function(stdata){
		$(".ngumpetdulu").hide();
		$("#stadata tr").remove();
		stts = stdata.stt;
		$("#stadata").append("<tr><th>JENIS</th><th>L</th><th>P</th></tr>");
		$.each(stts,function(index,stt){
			$("#stadata").append("<tr><td>"+stt.data+"</td><td align='right'>"+stt.L+"</td><td align='right'>"+stt.P+"</td></tr>");
		})
	});
}

function getKlpUmur(rt,rw){
	$.getJSON(serviceURL+'pu.php?t='+rt+'&w='+rw,function(stdata){
		$(".ngumpetdulu").hide();
		$("#stadata tr").remove();
		stts = stdata.stt;
		$("#stadata").append("<tr><th>JENIS</th><th>L</th><th>P</th></tr>");
		$.each(stts,function(index,stt){
			$("#stadata").append("<tr><td>"+stt.data+"</td><td align='right'>"+stt.L+"</td><td align='right'>"+stt.P+"</td></tr>");
		})
	});
}
