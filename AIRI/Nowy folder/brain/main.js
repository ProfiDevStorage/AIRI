var recognitionSet = false;
var selectors = ["google","youtube","spotify","serials"]
var googleSearch = function(fraze,option) {
    if(option === null || typeof option === "undefined"){
		if(fraze === null || fraze === "" || typeof fraze === 'undefined' ){
                $('#response').append("<li><span class='head'>[AIRI]:</span> Podaj co mam wyszukać</li>");
				if(recognitionSet === true){
					responsiveVoice.speak("Podaj co mam wyszukać","Polish Female");	
				}
            } else {
                $('#response').append("<li><span class='head'>[AIRI]:</span> Wyszukuję "+fraze+"</li>");
				if(recognitionSet === true){
						responsiveVoice.speak("Wyszukuję "+ fraze, "Polish Female");
					}
                $("#google").show();
                $("#googleSearch").show();
                $("#gsc-i-id1").val(fraze);
                $(".gsc-search-button .gsc-search-button-v2").click();
                setTimeout(function(){
                    window.open($("a.gs-title").attr("data-cturl"))
                    $("#google").hide();
                    $("#googleSearch").hide();
                },1000);
                $("#commandReciver").val('');
            }
    } else {
		 switch(option){
            case "-open":
                if(fraze === null || fraze === "" || typeof fraze === 'undefined' ){
                    $('#response').append("<li><span class='head'>[AIRI]:</span> Podaj co mam wyszukać</li>");
					if(recognitionSet === true){
						responsiveVoice.speak("Podaj co mam wyszukać","Polish Female");	
					}
                } else {
                    $('#response').append("<li><span class='head'>[AIRI]:</span> Wyszukuję "+fraze+"</li>");
					if(recognitionSet === true){
						responsiveVoice.speak("Wyszukuję "+ fraze, "Polish Female");	
					}
                    $("#google").show();
                    $("#googleSearch").show();
                    $("#googleSearch").css('pointer-events','all');
                    $("#gsc-i-id1").val(fraze);
                    $(".gsc-search-button .gsc-search-button-v2").click();
                    setTimeout(function(){
                        window.open($("a.gs-title").attr("data-cturl"))
                    },1000);
                    $("#commandReciver").val('');
                } 
        	}
        }
}
var exit = function(){
    localStorage.clear();
    i = 0;
    $('#response').append("<li><span class='head'>[AIRI]:</span> Cache Wyczyszczony</li>");
	if(recognitionSet === true){
		responsiveVoice.speak("Cache Wyczyszczony", "Polish Female");	
	}
	annyang.abort();
    setTimeout(function(){
        window.location.replace('index.html');
    },1000);
    $("#commandReciver").val('');
}
var clear = function(){
    $("#response").html("<li style='list-style:none'><span class='head'></span></li>");
	if(recognitionSet === true){
		responsiveVoice.speak("Wiersz poleceń wyczyszczony", "Polish Female");	
	}
    $("#commandReciver").val('');   
}
var fullscreen = function(fraze){
    if(fraze === null || fraze === "" || typeof fraze === 'undefined' ){
                $('#response').append("<li><span class='head'>[AIRI]:</span> Pełny ekran zainicjalizowany</li>");
                if(recognitionSet === true){
                    responsiveVoice.speak("Pełny ekran zainicjalizowany", "Polish Female");	
                }
                $(document).fullScreen(true); 
                $("#commandReciver").val('');
            } else {
                if($("#"+fraze).css("display") === "none"){
                    $('#response').append("<li><span class='head'>[AIRI]:</span> Pełny ekran zawiódł najpierw otwórz okienko.</li>");
                    if(recognitionSet === true){
                        responsiveVoice.speak("Pełny ekran zawiódł najpierw otwórz okienko.","Polish Female");	
                    } 
                } else {
                    switch(fraze){
                        case "youtube":
                            info();
                            $("#video").fullScreen(true);
                            break;
                        default:
                         $('#response').append("<li><span class='head'>[AIRI]:</span> Brak takiego okienka.</li>");
                            if(recognitionSet === true){
                                responsiveVoice.speak("Brak takiego okienka.","Polish Female");	
                            } 
                            break;
                    }
                }
            }
}
var replacer = function(data)
        {
                data = data.toLowerCase();
                data = data.replace(/ą/ig, 'a').replace(/Ą/ig, 'A');
                data = data.replace(/ć/ig, 'c').replace(/Ć/ig, 'C');
                data = data.replace(/ę/ig, 'e').replace(/Ę/ig, 'E');
                data = data.replace(/ł/ig, 'l').replace(/Ł/ig, 'L');
                data = data.replace(/ń/ig, 'n').replace(/Ń/ig, 'N');
                data = data.replace(/ó/ig, 'o').replace(/Ó/ig, 'O');
                data = data.replace(/ś/ig, 's').replace(/Ś/ig, 'S');
                data = data.replace(/ż/ig, 'z').replace(/Ż/ig, 'Z');
                data = data.replace(/ź/ig, 'z').replace(/Ź/ig, 'Z');
                return data;   
        }
var lopp = function(word,len,fraze,words,frazes,k){
    learningWordsFunction(word,len,fraze,words,frazes,k);
}
var input = function(fraze){
    if(fraze === ""){
        
    } else {
        
    }
    localStorage.setItem("data" + i, $("#commandReciver").val());
    stored[i] = localStorage['data' + i];
    $('#response').append("<li><span class='head'>["+localStorage.login+"]: </span>" + stored[i] + "</li>");
	if(recognitionSet === true){
		responsiveVoice.speak(stored[i], "Polish Female");	
	}
    i++;
    var words = [];
    for(let j = 0; j<fraze.length; j++){
        if(fraze[j] == "." ||  fraze[j] == "?" ||  fraze[j] == "!"){
            sentenceType(words[j]);
        } else {
            words[j] = replacer(fraze[j]);
        }
    }
    var k = 0;
    $("#commandReciver").val('');
    learningWordsFunction(words[k],words.length,fraze[k],words,fraze,k);
}
var voiceSystem = function(option){
	if(option === null || typeof option === "undefined"){
		$('#response').append("<li><span class='head'>[AIRI]:</span> Podaj parametr</li>");
		if(recognitionSet === true){
			responsiveVoice.speak("Podaj parametr", "Polish Female");	
		}
	} else {
		switch(option){
			case "-activate":
				$('#response').append("<li><span class='head'>[AIRI]:</span> Zainicjalizowano system głosowy</li>");
				responsiveVoice.speak("Zainicjalizowano system głosowy", "Polish Female");
				recognitionSet = true;
				$("#commandReciver").val('');
				break;
			case "-disable":
				$('#response').append("<li><span class='head'>[AIRI]:</span> System głosowy wyłączony</li>");
				recognitionSet = false;
				$("#commandReciver").val('');
				break;
		}
	}

}
var showSystem = function(option){
	if(option === null || typeof option === "undefined"){
		$('#response').append("<li><span class='head'>[AIRI]:</span> Podaj parametr</li>");
		if(recognitionSet === true){
			responsiveVoice.speak("Podaj parametr", "Polish Female");	
		}
	} else {
		switch(option){
			case "-airi":
				$('#airi').show();
                $('body').css("overflow","hidden");
				$("#commandReciver").val('');
				break;
		}
	}

}
var hideSystem = function(option){
	if(option === null || typeof option === "undefined"){
		$('#response').append("<li><span class='head'>[AIRI]:</span> Podaj parametr</li>");
		if(recognitionSet === true){
			responsiveVoice.speak("Podaj parametr", "Polish Female");	
		}
	} else {
		switch(option){
			case "-airi":
				$('#airi').hide();
				$("#commandReciver").val('');
				break;
		}
	}

}
var listResult = [];
var newVideo = false;
var watchSystem = function(fraze){
        newVideo = true;
		if(fraze === null || fraze === "" || typeof fraze === 'undefined' ){
                $('#response').append("<li><span class='head'>[AIRI]:</span> Podaj co mam wyszukać</li>");
				if(recognitionSet === true){
					responsiveVoice.speak("Podaj co mam wyszukać","Polish Female");	
				}
            } else {
                $('#response').append("<li><span class='head'>[AIRI]:</span> Wyszukuję propozycję dla podanego tytułu '"+fraze+"'"+"</li>");
				if(recognitionSet === true){
						responsiveVoice.speak("Wyszukuję propozycję dla podanego tytułu '"+ fraze+"'", "Polish Female");
					}
                $("#youtube").show();
                $("#youtube").css('pointer-events','all');
                $("#gsc-i-id1").val("youtube "+fraze);
                $(".gsc-search-button .gsc-search-button-v2").click();
                setTimeout(function(){
                    var list = $("a.gs-title");
                    for(let i = 0; i<list.length;i++){
                        listResult[i] = list[i].getAttribute('data-ctorig');
                    }
                    listResult = removeDuplicateUsingSet(listResult);
                    listResult.splice(listResult.length-1, 1);
                    console.log(listResult);
                    var z = 1;
                    for(let j = 0; j<listResult.length;j++){
                        var temp = listResult[j].search('watch');
                        var tempUrl = listResult[j].substr(temp,5);
                        if(tempUrl === 'watch'){
                            if($("#v"+z).attr("src") === "" || newVideo === true){
                                if(listResult[j].substr(8,1) === "m"){
                                    var vUrl = listResult[j].substr(30,listResult.length+1);
                                    $("#v"+z).attr("src","https://www.youtube.com/embed/"+vUrl);
                                    z++;  
                                } else {
                                    var vUrl = listResult[j].substr(32,listResult.length+1);
                                    $("#v"+z).attr("src","https://www.youtube.com/embed/"+vUrl);
                                    z++;  
                                }
                            }
                        }
                    }
                    $("#youtubeList").show();
                    var tmp = $("a.gs-title").attr("data-ctorig");
                    var len = $("a.gs-title").attr("data-ctorig").length;
                    var url = tmp.substr(32,len);
                    $("#video").attr("src","https://www.youtube.com/embed/"+url);
                    $("#modal").hide();
                },1000);
                $("#commandReciver").val('');
            }
}
var closeWindow = function(selector){
    if(selector === "all"){
        $('#response').append("<li><span class='head'>[AIRI]:</span> Zamknięto wszystkie okna</li>");
        if(recognitionSet === true){
            responsiveVoice.speak("Zamknięto wszystkie okna","Polish Female");	
        }
        for(var k=0; k<selectors.length;k++){
            if(selectors[k] === 'google'){
                $("#"+selectors[k]).hide();  
                $("#googleSearch").hide();
                $("#googleSearch").css('pointer-events','none');
                $("#"+selector[k]+" iframe").attr("src", "");
            } else {
                $("#"+selectors[k]).hide();
                $("#"+selectors[k]).css('pointer-events','none');
                $("#"+selectors[k]+" iframe").attr("src", "");
                if(selectors[k] === "youtube"){
                    $("#youtubeList").hide();
                    for(let i = 1; i< 6; i++){
                        $("#v"+i).attr("src","");
                    }
                }
            }
        }
        $("#commandReciver").val('');
    } else {
         $('#response').append("<li><span class='head'>[AIRI]:</span> Okienko zamknięte</li>");
        if(recognitionSet === true){
            responsiveVoice.speak("Okienko zamknięte","Polish Female");	
        }
        if(selector === 'google'){
                $("#"+selector).hide();
                $("#googleSearch").hide();
                $("#googleSearch").css('pointer-events','none');
                $("#"+selector+" iframe").attr("src", "");
            } else {
                $("#"+selector).hide();
                $("#"+selector).css('pointer-events','none');
                $("#"+selector+" iframe").attr("src", "");
                if(selector === "youtube"){
                    $("#youtubeList").hide();
                    for(let i = 1; i< 6; i++){
                        $("#v"+i).attr("src","");
                    }
                }
            }
        $("#commandReciver").val('');   
    }
}
var openWindow = function(selector){
    $('#response').append("<li><span class='head'>[AIRI]:</span> Okienko otwarte</li>");
	if(recognitionSet === true){
		responsiveVoice.speak("Okienko otwarte","Polish Female");	
	}
    if(selector === 'google'){
        $("#"+selector).show();
        $("#googleSearch").show(); 
        $("#googleSearch").css('pointer-events','all');
    } else {
        $("#"+selector).show();
        $("#"+selector).css('pointer-events','all');
        if(selector === "youtube"){
            $("#youtubeList").show();
        }
    }
    $("#commandReciver").val('');
}
var spotifyPlayer = function(fraze){
		if(fraze === null || fraze === "" || typeof fraze === 'undefined' ){
                $('#response').append("<li><span class='head'>[AIRI]:</span> Podaj co mam wyszukać</li>");
				if(recognitionSet === true){
					responsiveVoice.speak("Podaj co mam wyszukać","Polish Female");	
				}
            } else {
                $('#response').append("<li><span class='head'>[AIRI]:</span> Startuję spotify "+fraze+"</li>");
				if(recognitionSet === true){
						responsiveVoice.speak("Startuję spotify "+ fraze, "Polish Female");
					}
                $("#spotify").show();
                $("#spotify").css('pointer-events','all');
                $("#modal").show();
                $("#gsc-i-id1").val("spotify "+fraze);
                $(".gsc-search-button .gsc-search-button-v2").click();
                setTimeout(function(){
                    var tmp = $("a.gs-title").attr("data-ctorig");
                    var len = $("a.gs-title").attr("data-ctorig").length;
                    var url = tmp.substr(25,len);
                    $("#player").attr("src","https://open.spotify.com/embed/"+url);
                    $("#modal").hide();
                },1000);
                $("#commandReciver").val('');
            }
}
var helper = function(commands){
    var sorted = commands.sort();
    $("#response").append("<li><span class='head'>[AIRI]:</span> Lista dostępnych komend:</li>");
    if(recognitionSet === true){
        responsiveVoice.speak("Lista dostępnych komend","Polish Female");	
    }
    $("#response").append("<li>");
    for(var i = 0;i<commands.length;i++){
       $("#response").append(sorted[i]+" ");
    }
    $("#response").append("</li>");
    $("#commandReciver").val('');
}
var string_to_array = function (str) {
     return str.trim().split(" ");
};
function speechToText(set){
    if(set){
        var recognition;
        if (annyang) {
            $("#response").append("<li><span class='head'>[AIRI]:</span> Aktywowany system rozpoznawania głosu</li>");
            if(recognitionSet === true){
                responsiveVoice.speak("Aktywowany system rozpoznawania głosu","Polish Female");	
            }
             // Let's define a command.
             var commands = {
               'Hello': function() { alert("hi"); }
             };

             // Add our commands to annyang
             annyang.addCommands(commands);

             // Start listening.
             annyang.start();
            
             recognition = annyang.getSpeechRecognizer();
           }
    } else {
        $("#response").append("<li><span class='head'>[AIRI]:</span> System rozpoznawania głosu wyłączony</li>");
        if(recognitionSet === true){
            responsiveVoice.speak("System rozpoznawania głosu wyłączony","Polish Female");	
        }
        if (annyang) {
            annyang.abort();
        }
   }
}
function info(){
    $('#response').append("<li><span class='head'>[AIRI]:</span> Okienko otwarte w trybie pełnoekranowym</li>");
    if(recognitionSet === true){
        responsiveVoice.speak("Okienko otwarte w trybie pełnoekranowym","Polish Female");	
    }
    $("#commandReciver").val(''); 
}
function linkuStarto(){
    $('#linku').get(0).currentTime = 0;
    $('#linku').get(0).play();
     setTimeout(function(){
        $("#linku").show();
         $('#linku').get(0).volume = 0.1;
    },3000);
    setTimeout(function(){
        $("#linku").hide();
        $("#linku").get(0).pause();
    },13000);
    $("#commandReciver").val(''); 
}
function selectVideo(id){
    id = id.substr(1,1);
    var url = $("#v"+id).attr("src");
    $("#video").attr("src",url);
};