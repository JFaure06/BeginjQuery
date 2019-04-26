console.log("exercice 5");

$(document).ready(() => {

    //$('#fd-jeux').css('background-color', '#c0c0c0')


    $("#block-jeu img").click(function () {

        let choix = $(this).clone().attr("id", 'Joueur');

        // alert("vous avez selectionné :" + " " + choix)
//if ($('#Joueur') )
        $('#Joueur').replaceWith(choix);
    });

    $('#start').on('click', function () {

        var IA = Math.floor(Math.random() * 3);

        //si 0  c'est égale à 'pierre'
        if (IA === 0) {
            var pierre = $("#block-jeu img[name='pierre']").clone().attr("id", 'IA');
            $('#IA').replaceWith(pierre);
        }
        // si non 1 c'est égale à 'feuille'
        else if (IA === 1) {
            var feuille = $("#block-jeu img[name='feuille']").clone().attr("id", 'IA');
            $('#IA').replaceWith(feuille);
        }
        // si non c'est 'ciseaux'
        else {
            var ciseau = $("#block-jeu img[name='ciseau']").clone().attr("id", 'IA');
            $('#IA').replaceWith(ciseau);
        }


       // $('#Resultat').append(function () {

            var JoueurChoix = $("img#Joueur").attr('name');
            var IAChoix = $("#IA").attr('name');

            console.log(JoueurChoix, IAChoix);

            if (JoueurChoix === IAChoix) {

                $('h2 strong').text('Tied').css('color', 'grey');

            } else if ((JoueurChoix === 'pierre' && IAChoix === 'ciseau') || (JoueurChoix === 'feuille' && IAChoix === 'pierre') || (JoueurChoix === 'ciseau' && IAChoix === 'feuille')) {

                $('h2 strong').text('You Win !!!').css('color', 'green');

            } else {

                $('h2 strong').text('You Loose !!!').css('color', 'red');
            }
       // })

    });

});

