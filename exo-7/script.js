console.log("exercice 7");

$(document).ready(() => {

    // fonction qui réqupere la data
    function getData() {
        return data; // data is defined in DATA.js file
    };

    // fonction avec un parametre line qui  insérez le contenu par rapport au parametre donnée
    function addLineToTable(line) {

        // jquery de la boite table pour le tbody ajoute une ligne mail nom prenom telephone
        $('#table tbody').append('<tr><td>' + line.email + '</td><td>' + line.name.last + '</td><td>' + line.name.first + '</td><td>' + line.phone + '</td></tr>');

    }

    // création d'une variable contenant la fonction getdata
    var test = getData();

    // je fais une boucle avec en parametre ma variable test et un fonction qui appel la fonction addLineToTable avec en parametre les information récupéré
    $.each(test, function () {

        addLineToTable(this);
    });
    /*test.forEach(function(line) {

        addLineToTable(line);
    });*/

});