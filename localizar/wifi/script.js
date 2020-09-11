var i = 0;
var max = $("#code").text().length;
setInterval(function(){ 
  $("#console").append($("#code").text().toString()[i]);
  $("html, body").animate({ scrollTop:$("#console").height()+99999999 }, 10);
  if( i > max*5){
    $("#console").html("");
    i=0;
  }else{
    i+=1;
  }
}, 1);