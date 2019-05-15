console.log("exercice 6");

$(document).ready(() => {

//modifier couleur de fond du login en bleu au passage souris


    $('form button').on('click', function () {


        // je déclare des variables qui on une boite avac la valeur de cette boite
        var donneeMail = $('#email').val();
        var donneeMdp = $('#mdp').val();

        // je vérifie si un mail et mdp sont rentrés
        /*if ((!donneeMail) && (!donneeMdp)) {

            $('div').text('email et mdp obligatoire').addClass('alert alert-warning');
        }*/

        /*
        // je vérifie si c'est bien un email et si le mdp comporte + de 6 caracteres
        if ((donneeMail.indexOf('@') === -1)) {

            $('div').text('email not found').addClass('alert alert-warning');

        } else if (donneeMdp.length < 6) {

            $('div').text('mdp doit comporter + de 6 caracteres').addClass('alert alert-warning');
        }
       */

        // je vérifie si les information d'un utilisateur sont correct

        if ((donneeMail === 'hello@me.com') && (donneeMdp === 'secret8')) {

            $('div').text('Vous êtes connecté').addClass('alert alert-success');
        }

            alert('error');

        // j'affiche dans la console les information rentrées
        console.log('email :' + ' ' + donneeMail + 'mdp :' + ' ' + donneeMdp);


    })


});