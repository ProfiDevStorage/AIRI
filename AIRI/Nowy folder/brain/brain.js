var dictionary = [];
var z = 0;
$(function () {
    console.log(dictionary);
});
function removeDuplicateUsingSet(arr){
    let unique_array = Array.from(new Set(arr))
    return unique_array
}
function stop(){
    z++;
}
function search(fullList,x,word,fraze){
    if(x === 15){
        stop();
    } else {
        var tmp = fullList[x].getAttribute("data-ctorig"); 
        tmp = tmp.toLowerCase();
        var str = tmp.search(word);
        var len = word.length;
        var url = tmp.substr(str,len);
        url = url.toLowerCase();
        x++;
        if(url == word){
        if(dictionary === undefined || dictionary.length == 0){
            fraze = fraze.toLowerCase();
            dictionary.push(fraze);
            } else {
                for(let i = 0; i <dictionary.length; i++){
                    if(fraze != dictionary[i]){
                        fraze = fraze.toLowerCase();
                        dictionary.push(fraze);
                    }
                }
            }   
        }
        loop(fullList,x,word,fraze);   
    }
}
function loop(fullList,x,word,fraze){
        search(fullList,x,word,fraze);
}
function learningWordsFunction(word,len,fraze,words,frazes,k){
    if(z === words.length){
        end(k);
    } else {
        $("#gsc-i-id1").val("sjp pwn " + fraze);
        $(".gsc-search-button .gsc-search-button-v2").click();
        setTimeout(function(){
            var fullList = $("a.gs-title");
            var x = 0;
            search(fullList,x,word,fraze);
            k++;
            lopp(words[k],words.length,frazes[k],words,frazes,k);
        },500);
    }
}
function end(k){
    dictionary = removeDuplicateUsingSet(dictionary);
    for(let s=0;s<dictionary.length;s++){
        dictionary[s].toLowerCase();
    }
    k=0;
    z=0;
}
function sentenceType(expression){
    console.log(expression);
}