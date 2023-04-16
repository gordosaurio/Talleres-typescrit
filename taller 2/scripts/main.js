import { data } from "./data.js";
var seriesTbody = document.getElementById('series');
var totalCreditElm = document.getElementById("temporadas");
var tituloCarta = document.getElementById('tituloCarta');
var descripcionCarta = document.getElementById('descripcionCarta');
var webCarta = document.getElementById('webCarta');
var imagenCarta = document.getElementById("imagenCarta");
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.nombre, "</td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        trElement.querySelector("td:nth-child(2)").addEventListener("click", function () { return actaulizarCarta(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function getTotalTemporadas(series) {
    var temporadasTotales = 0;
    series.forEach(function (serie) { return temporadasTotales = temporadasTotales + serie.temporadas; });
    return temporadasTotales;
}
function actaulizarCarta(serie) {
    tituloCarta.innerHTML = serie.nombre;
    descripcionCarta.innerHTML = serie.descripcion;
    webCarta.innerHTML = serie.web;
    imagenCarta.src = serie.foto;
    console.log(serie.foto);
}
renderSeriesInTable(data);
totalCreditElm.innerHTML = "".concat(getTotalTemporadas(data));
