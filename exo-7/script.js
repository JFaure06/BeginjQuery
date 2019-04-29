console.log("exercice 7");

$(document).ready(() => {

    function getData() {
        return data; // data is defined in DATA.js file
    };

    function addLineToTable(line) {

        $('#table tbody').append('<tr><td>' + line.email + '</td><td>' + line.name.last + '</td><td>' + line.name.first + '</td><td>' + line.phone + '</td></tr>');

    }

    var test = getData();

    $.each(test, function () {

        addLineToTable(this);
    });

});