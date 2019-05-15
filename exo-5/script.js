console.log("exercice 5");

$(document).ready(() => {

    //$('#fd-jeux').css('background-color', '#c0c0c0')


    $("#block-jeu img").click(function () {

        // le choix du joueur on clone juste l'id joueur
        let choix = $(this).clone().attr("id", 'Joueur');

        // alert("vous avez selectionné :" + " " + choix)
//if ($('#Joueur') )
        // si je click sur un autre choix l'image est remplacé pas la nouvelle
        $('#Joueur').replaceWith(choix);
    });

    $('#start').on('click', function () {

        // la variable IA contient un nom aléatoire compris entre 0 et 2 compris
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
            // si choix du joueur = a celui de l'IA
            if (JoueurChoix === IAChoix) {

                $('h2 strong').text('Tied').css('color', 'grey'); // affiche égalité

            // si non si joueur fais le choix gagnant par rapport à l'IA
            } else if ((JoueurChoix === 'pierre' && IAChoix === 'ciseau') || (JoueurChoix === 'feuille' && IAChoix === 'pierre') || (JoueurChoix === 'ciseau' && IAChoix === 'feuille')) {

                $('h2 strong').text('You Win !!!').css('color', 'green'); //affiche gagné

            // si non perdu
            } else {

                $('h2 strong').text('You Loose !!!').css('color', 'red');
            }
       // })

    });

});

