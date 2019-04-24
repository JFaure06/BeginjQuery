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
    $('#myNavbar ul:first').remove();

    // supprime et change l'icon
    $('.glyphicon, .glyphicon-log-in').removeClass('glyphicon-log-in').addClass('glyphicon-yen');

    // changement du footer
    $('footer').text('Copyright 2017').css('font-weight', 'bold').addClass('intro');
    //ou
    //$('footer').html('<strong>Copyright 2017</strong>');

    // modifie la 1ere et 2e ligne de paragraphe des div d'image
    //$('#work1 p').text('Mon projet' + (index + 1));
    // a modifier
    $('#work1  p').each(function (index) {

        $(this).text('Mon projet ' + (index + 1));
    });

    // change les images
    $('img').each(function (index) {

        $(this).attr('src', 'image' + (index + 1) + '.jpg');

    });

    // ajoute une image et un text apres le h3
    // $('h3').append(//    ('<div><img class="col-md-12 img-responsive" src="images.jpg" alt="lundai" style="height: 250px"><p>Studio LUNDAÏ</p></div>'));

    var image = $('<img>', {
        src: 'images.jpg',
        alt: 'lundai',
        class: 'col-md-12 img-responsive',
        style: 'height: 250px',

    });

    var text = $('<p>', {

        text: 'Studio Lundaï',
    });

    $('h3').append(image, text);//.text('Studio Lundaï');

    // change la couleur du Copyright -> voir ligne 41

});
