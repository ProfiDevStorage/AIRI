$(function () {
    var consoles = ["commander","googleSearch","yt","spf","youtube","spotify"];
    var z = 2;
    $('.col').on('mousedown',function(){
        $("#"+this.id).css("z-index",z);
        for(let i=0; i< consoles.length; i++){
            if(consoles[i]!==this.id){
                $("#"+consoles[i]).css("z-index",0);
            }
        }
    });
});