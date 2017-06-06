
var stts;
$(document).ready(function(){
	
    $("#kritcari").change(function(){
		var pesan=$("#kritcari").val();
		
		if(pesan == "nama_lengkap")
		{
			$(".ngumpetdulu").hide();
			$("#stadata li").remove();
			$("#blok-nama").show();
		}else{
			getStatList(pesan);
		}
	});
	$("#namapen").click(function(){
		$("#namapen").val('');
	});
	$("#carinama").click(function(){
		var nama = $("#namapen").val();
		getNaPen(nama);
	});
	var rt=localStorage.getItem('rt');
	var rw=localStorage.getItem('rw');
	$("#rtrw").html("PENCARIAN PENDUDUK RT "+rt+" RW "+rw);
});

function getStatList(cat){
	var rt=localStorage.getItem('rt');
	var rw=localStorage.getItem('rw');
	$.getJSON(serviceURL+'index.php?cat='+cat+'&t='+rt+'&w='+rw,function(stdata){
		$(".ngumpetdulu").hide();
		$("#stadata li").remove();
		stts = stdata.stt;
		$.each(stts,function(index,stt){
			$("#stadata").append("<li class='list-group-item'><a href='dtstapen.html?cat="+cat+"&val="+stt.data+"&p=1'>"+stt.data+"</a><span class='badge'>"+stt.cacah+"</span></li>");
		})
	});
}

function getNaPen(nama){
	var rt=localStorage.getItem('rt');
	var rw=localStorage.getItem('rw');
	$.getJSON(serviceURL+'index.php?cat=nama_lengkap&nama='+nama+'&t='+rt+'&w='+rw,function(stdata){
		$(".ngumpetdulu").hide();
		$("#stadata li").remove();
		stts = stdata.stt;
		$.each(stts,function(index,stt){
			$("#stadata").append("<li class='list-group-item'>"+
				"<p>"+stt.nik+"</p>"+
				"<p>"+stt.nama+" ( "+stt.sx+" )</p>"+
				"<p>"+stt.kerja+", "+stt.stkwn+"</p></li>");
		})
	});
}

