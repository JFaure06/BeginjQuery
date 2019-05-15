console.log("exercice 8");

$(document).ready(() => {

    $('#test').mousseover(function () {

        var $image = $('.lundai');

        $image.viewer({
            inline: true,
            viewed: function () {
                $image.viewer('zoomTo', 4);
            }
        });
    });
}