/*jslint browser: true*/
/*global $*/
var t;
var i = 0;
var commands = ["exit", "clear", "fullscreen", "search", "voice", "show", "hide", "close", "open", "help","watch","play", "translate", "linku-starto"];
var stored = [];
var commandGetter = function (command) {
    let option, fraze = "";
    switch (command[0]) {
        case "exit":
            exit();
            break;
        case "clear":
            clear();
            break;
        case "fullscreen":
            fullscreen(command[1]);
            break;
        case "search":
            for(let i = 1; i < command.length; i++){
                if(command[i].substr(0,1) === '-'){
                    option = command[i];
                } else {
                    option = null;
                    if(command[i] != command[0]){
                        fraze += command[i]+" ";
                    }
                }
            }
            googleSearch(fraze,option);
            break;
		case "voice":
			for(let i = 1; i < command.length; i++){
                if(command[i].substr(0,1) === '-'){
                    option = command[i];
                } else {
                    option = null;
                }
            }
			voiceSystem(option);
			break;
		case "show":
			for(let i = 1; i < command.length; i++){
                if(command[i].substr(0,1) === '-'){
                    option = command[i];
                } else {
                    option = null;
                }
            }
			showSystem(option);
			break;
		case "hide":
			for(let i = 1; i < command.length; i++){
                if(command[i].substr(0,1) === '-'){
                    option = command[i];
                } else {
                    option = null;
                }
            }
			hideSystem(option);
			break;
        case "watch":
            for(let i = 1; i < command.length; i++){
                if(command[i] != command[0]){
                    fraze += command[i]+" ";
                }
            }
			watchSystem(fraze);
			break;
        case "close":
            closeWindow(command[1]);
            break;
        case "open":
            openWindow(command[1]);
            break;
        case "play":
            for(let i = 1; i < command.length; i++){
                if(command[i] != command[0]){
                    fraze += command[i]+" ";
                }
            }
            spotifyPlayer(fraze);
            break;
        case "help":
            helper(commands);
            break;
        case "linku-starto":
            linkuStarto();
            break;
        default:
            var array = new Array();
            for(let i = 0; i < command.length; i++){
                    array[i] = command[i];
            }
            input(array);
            break;
    }
};
$(function () {
    var set = false;
    var start = true;
    var ytButtonStart = false;
    var ytButtonStart = true;
    annyangStart = false;
    $("#mic").hover(function(e) { 
        $(this).css("cursor","not-allowed");
    });
    document.getElementById('airi').onload = function() {
        setTimeout(function(){
            $('#loadinglog').append("<li>Zainicjalizowano system głosowy</li>");
        },100);
        setTimeout(function(){
            $('#loadinglog').append("<li>Zainicjalizowano aktywacje głosową</li>");
			annyang.start();
        },700);
        setTimeout(function(){
            $('#loadinglog').append("<li>Zainicjalizowano modele 3D</li>");
        },3000);
        setTimeout(function(){
            $(".lds-ring").hide();
            $("#loadinglog").hide();
            $(".wrap").show();
            $("canvas").show();
        },5000);
    };
    $("#commandReciver").ready(function () {
        $("#commandReciver").attr("placeholder", "Kliknij ENTER aby rozpocząć.");
        annyangSet = false;
        for (let j = 0; j < stored.length; j ++) {
            $('#response').append("<li><span class='head'>[AIRI]:</span>" + stored + "</li>");    
        }
        t = false;
        $("#commandReciver").autocomplete({
            source: commands,
            messages: {
                noResults: '',
                results: function() {}
            }
        });
    });
    $("#commandReciver").keypress(function (e) {       
        if (e.which === 13) {
            if (t === false) {
                annyangStart = true;
                    $("#mic").hover(function(e) { 
                        $(this).css("cursor","pointer");
                    });
                $("#commandReciver").attr("placeholder", "Wpisz Komendę");
                $('#response').append("<li><span class='head'>[AIRI]:</span> Witaj w AIRI(Artificial Intelligence with Reactive Information)</li>");
				setTimeout(function(){responsiveVoice.speak("Witaj w Aj,ri.","Polish Female");},300);
                t = true;
            } else {
                var command = string_to_array($("#commandReciver").val());
                commandGetter(command);
            }
        }
    });
    $("#mic").click(function(){
        if(annyangStart === true){
            if($("#mic").attr("src") === "images/mic_off.png"){
                annyangSet = true;
                $("#mic").attr("src","images/mic.png");
                speechToText(annyangSet);
            } else {
                annyangSet = false;
                $("#mic").attr("src","images/mic_off.png");
                speechToText(annyangSet);
            }   
        }
    });
    $("#ytButton").click(function(){
        if(ytButtonStart === true){
            if($("#ytButton").attr("src") === "images/down.png"){
                $('#youtubeList').css('top','-10px');
                $("#ytButton").attr("src","images/up.png");
                ytButtonSet = true;
            } else {
                $('#youtubeList').css('top','-210px');
                $("#ytButton").attr("src","images/down.png");
                ytButtonSet = false;
            }   
        }
    });
    var back = document.getElementById("backgroundMusic");
    back.volume = 0.02;
    back.muted = false;
        $("#controls").click(function(){
            if(start === true){
                if($("#controls").attr("src") === "images/play.png"){
                    set = true;
                    $("#controls").attr("src","images/pause.png");
                    back.play();
                } else {
                    set = false;
                    $("#controls").attr("src","images/play.png");
                    back.pause();
                }   
            }
        });
    $("#ads_bottom_static").attr("style","display:none;");
});