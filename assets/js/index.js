// botones
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// enviarcorreo
var enviarCorreo = document.getElementById('enviarCorreo');
enviarCorreo.addEventListener('click', function () {

    alert("El correo fue enviado correctamente");
});
// titulos rojos
$(document).ready(function () {

    $("h5.titulo-linea").on("dblclick", function () {

        $(this).css("color", "red");
    });
    $(".titulo-linea").on("dblclick", function () {
        $(this).css(
            "color", "red");
    });

    $(".recetas .card h4").click(function () {
        $(".recetas .card p").toggle();

    });
});

