$(function (){
    var i = 0
    var array = [0,1,2,3,4,5,6,7,8];

    $("td").each(function (index, element){
    $(this).click(function () {

        if ($(element).hasClass("symbole_0") || $(element).hasClass("symbole_1") ) {

        }else {
            if (i % 2 != 0) {
                $(element).addClass("symbole_0")
                i++
                array.splice(index,1,"O")
            } else {
                $(element).addClass("symbole_1")
                i++
                array.splice(index,1,"X")
            }
        }
        if (i >= 5){

            if (array[0] === "X" && array[1] === "X" && array[2] === "X" ||
                array[3] === "X" && array[4] === "X" && array[5] === "X" ||
                array[6] === "X" && array[7] === "X" && array[8] === "X" ||
                array[0] === "X" && array[3] === "X" && array[6] === "X" ||
                array[1] === "X" && array[4] === "X" && array[7] === "X" ||
                array[2] === "X" && array[5] === "X" && array[8] === "X" ||
                array[0] === "X" && array[4] === "X" && array[8] === "X" ||
                array[6] === "X" && array[4] === "X" && array[2] === "X" ){
                setTimeout(() => {
                    alert("Le joueur croix a gagné")
                    array = [0,1,2,3,4,5,6,7,8];
                    $("td").removeClass("symbole_0")
                    $("td").removeClass("symbole_1")
                    i = 0
                }, 100)
            }else if (i > 8){
                var egalite = 1
            }

            if (array[0] === "O" && array[1] === "O" && array[2] === "O" ||
                array[3] === "O" && array[4] === "O" && array[5] === "O" ||
                array[6] === "O" && array[7] === "O" && array[8] === "O" ||
                array[0] === "O" && array[3] === "O" && array[6] === "O" ||
                array[1] === "O" && array[4] === "O" && array[7] === "O" ||
                array[2] === "O" && array[5] === "O" && array[8] === "O" ||
                array[0] === "O" && array[4] === "O" && array[8] === "O" ||
                array[6] === "O" && array[4] === "O" && array[2] === "O" ){
                setTimeout(() => {
                    alert("Le joueur cercle a gagné")
                    array = [0,1,2,3,4,5,6,7,8];
                    $("td").removeClass("symbole_0")
                    $("td").removeClass("symbole_1")
                    i = 0
                }, 100)
            }else if (i > 8){
                 egalite++
            }
            if (egalite == 2){
                setTimeout(() => {
                    alert("Égalité")
                    array = [0,1,2,3,4,5,6,7,8];
                    $("td").removeClass("symbole_0")
                    $("td").removeClass("symbole_1")
                    i = 0
                }, 100)
            }
        }
    })

    })
})
