$(function (){
    var i = 0
    var array = [0,1,2,3,4,5,6,7,8];
    var egalite = 0;
    $('body').append('<div id="winner"></div>');

    $("td").each(function (index, element){
        $(this).click(function () {

            if ($(element).hasClass("symbole_0") || $(element).hasClass("symbole_1")) {

            }else {
                if (i % 2 !== 0) {
                    $(element).addClass("symbole_0")
                    i++
                    array.splice(index,1,"O")
                } else {
                    $(element).addClass("symbole_1")
                    i++
                    array.splice(index,1,"X")
                }
            }

            function winner(joueur){
                if (array[0] === joueur && array[1] === joueur && array[2] === joueur ||
                    array[3] === joueur && array[4] === joueur && array[5] === joueur ||
                    array[6] === joueur && array[7] === joueur && array[8] === joueur ||
                    array[0] === joueur && array[3] === joueur && array[6] === joueur ||
                    array[1] === joueur && array[4] === joueur && array[7] === joueur ||
                    array[2] === joueur && array[5] === joueur && array[8] === joueur ||
                    array[0] === joueur && array[4] === joueur && array[8] === joueur ||
                    array[6] === joueur && array[4] === joueur && array[2] === joueur ){

                    $("#winner").append("Le joueur "+ joueur + " a gagné")
                    return true;


                }else if (i > 8){
                    egalite++
                }
            }

            function reset(){
                array = [0,1,2,3,4,5,6,7,8];
                setTimeout(function () {
                    $("td").removeClass("symbole_0 symbole_1")
                    i = 0
                    egalite = 0
                }, 300)

                setTimeout(function() {
                    document.getElementById('winner').innerHTML = "";
                },2000);
            }

            if (i >= 5){
                    var x = winner("X")
                    if (x == true) {
                        reset()
                    }

                    var o = winner("O")
                    if (o == true) {
                        reset()
                    }

                if (egalite == 2){
                    $("#winner").append("Égalité")
                    reset()
                }
            }
        })

    })
})
