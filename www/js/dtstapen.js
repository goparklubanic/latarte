var stts;
  
$(document).ready(function(){
  $("#voterprev").click(function(){
	    
		var ha = parseInt($("#voterpage").html());
		var hs = ha-1;
		if(ha == 1)
		{
			getStatList( $("#cat").html(), $("#val").html(),1 );
		}else{
			getStatList( $("#cat").html(), $("#val").html(), hs );
			$("#voterpage").html(hs);
			$("#pge").html(hs);
		}
	});
	
	$("#voternext").click(function(){
		var ha = parseInt($("#voterpage").html());
		var hb = ha+1;
		getStatList( $("#cat").html(), $("#val").html(),hb );
		$("#voterpage").html(hb);
		$("#pge").html(hb);
	});
});

function getStatList(cat,val,p){
	var rt=localStorage.getItem('rt');
	var rw=localStorage.getItem('rw');
	$.getJSON(serviceURL+'cityzby.php?cat='+cat+'&val='+val+'&pge='+p+"&t="+rt+"&w="+rw,function(stdata){
		$("#stadata li").remove();
		stts = stdata.penduduk;
		$.each(stts,function(index,warga){
			$("#stadata").append("<li class='list-group-item'>"+
			"<p class='namasx'><b>"+warga.nama+"</b> ( "+warga.sx+" )</p><p>"+warga.nik+"</p></li>");
		})
	});
}



