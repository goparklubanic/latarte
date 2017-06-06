var vote;


$(document).ready(function(){
	var rt=localStorage.getItem('rt');
	var rw=localStorage.getItem('rw');
	$("#rtrw").html("CALON PEMILIH RT "+rt+" RW "+rw);
    $("#tglVote").change(function(){
		var tgpem=$("#tglVote").val();
		var hbt = tgpem.split("-");
		var thn = hbt[0] - 17;
		$("#tgVoter").val(thn+"-"+hbt[1]+"-"+hbt[2]);
	});
	
	$("#carivoter").click(function(){
		$("#votepager").show();
		$("#voterForm").hide();
		var tgl=$("#tgVoter").val();
		getStatList(1,tgl,rt,rw);
	});
	
	$("#voterprev").click(function(){
		var tgl=$("#tgVoter").val();
		var ha = parseInt($("#voterpage").html());
		var hs = ha-1;
		if(ha == 1)
		{
			getStatList(1,tgl,rt,rw);
		}else{
			getStatList(hs,tgl,rt,rw);
			$("#voterpage").html(hs);
		}
	});
	
	$("#voternext").click(function(){
		var tgl=$("#tgVoter").val();
		var ha = parseInt($("#voterpage").html());
		var hb = ha+1;
		getStatList(hb,tgl,rt,rw);
		$("#voterpage").html(hb);
	});
});

function getStatList(p,tgl,rt,rw){
	$.getJSON(serviceURL+'voter.php?p='+p+'&tgl='+tgl+'&t='+rt+'&w='+rw,function(data){
		$("#voterList li").remove();
		vote = data.voters;
		$.each(vote,function(index,voter){
			$("#voterList").append("<li class='list-group-item'>"+
					"<p class='namasx'>"+voter.nama+" ("+voter.jk+")</p>"+
					"<p class='tgl'>"+voter.nik+"  ("+voter.tgl+")</p>"+
					"</li>");
		})
	});
}
