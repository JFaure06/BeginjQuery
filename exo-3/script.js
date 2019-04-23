console.log("exercice 3");

$(document).ready(() => {
    /*
    // changer le texte du paragraphe si on a sélectionné un paragraphe
    $('p').on('click', event => {

        $(event.currentTarget).html('b<strong>lab</strong>la');

    });

    $('div').on('click', event => {

        //$(event.currentTarget).css('background-color', 'blue');


        // ajouter une div après l'élément sélectionné
        //$(event.currentTarget).append('<div><p>Some text..</p></div>');

        //supprimer un élément
        //$(event.currentTarget).remove();

        // cacher l'élément
        //$(event.currentTarget).hide();
    });
*/

    //modifie le titre
    $('h1').text('Julien');

    // modifie la tagline
    $('#tagline').html('Représentant <strong>Lundai</strong> avec une Web-série univers <strong>Steampunk</strong>');

    // supprime la nav non utile
    $('ul:first').remove();

    // supprime et change l'icon
    $('.glyphicon, .glyphicon-log-in').removeClass('glyphicon-log-in').addClass('glyphicon-yen');

    //changement du footer



});