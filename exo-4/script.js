console.log("exercice 4");

$(document).ready(() => {

    // en cliquant sur sign up affiche une alerte
    /*$('button').click(function() {

        alert("Merci nous vous tiendrons informé des différentes offres");
    });*/

    /*$("button[type='button']").on('click', function() {

        if (!this.value) {

            alert("Merci nous vous tiendrons informé des différentes offres");
        }

    });*/

    //  en cliquant sur sign up affiche une alerte avec l'adresse email rentrée
    $('button').click(function () {

        var mail = $("input[type='email']").val();

        alert("Merci " + " " + mail + " " + "nous vous tiendrons informé des différentes offres");
    });


    // si double click alors cache l'onglet
    $("ul:first li:last a").dblclick(function () {

        $(this).hide();
    });

    // si click sur image ajoute au panier et affiche le nombre d'article selectionné
    /*
    var Cart = 0;
    $('img').click(function () {

        $('ul:last li:last a').html("<span class=\"glyphicon glyphicon-shopping-cart\"></span> Cart " + "(" + (++Cart) + ")");

    });
    */

    // affiche ce qu'il y a en passant sur l'image
    $('div .panel-body img').on('mouseover', function () {

        var text = $(this).parentsUntil('.col-sm-4').children('.panel-footer').html();//.replace(/[^0-9\.]+/g, '');

        console.log("L'utilisateur regarde" + " " + text)
    });

    // recupere ce qui a été ecris dans l'input
    $('input').on('keyup', function () {

        console.log($(this).val());
    })

    // récupere le nombre énoncer de la card et ajout ce nombre au panier
    var Cart = 0;
    $('img').click(function () {

        var panel = parseInt($(this).parentsUntil('.col-sm-4').children('.panel-footer').html().replace(/[^0-9\.]+/g, ''));
        var Carts = Cart + panel;


        $('ul:last li:last a').html("<span class=\"glyphicon glyphicon-shopping-cart\"></span> Cart " + "(" + (Carts) + ")");

    });

});