import { data } from "./data.js";
var coursesTbody = document.getElementById('series');
var totalCreditElm = document.getElementById("temporadas");
renderSeriesInTable(data);
totalCreditElm.innerHTML = "".concat(getTotalTemporadas(data));
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                             <td>").concat(serie.nombre, "</td>\n                             <td>").concat(serie.canal, "</td>\n                             <td>").concat(serie.temporadas, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
function getTotalTemporadas(series) {
    var temporadasTotales = 0;
    series.forEach(function (serie) { return temporadasTotales = temporadasTotales + serie.temporadas; });
    return temporadasTotales;
}
