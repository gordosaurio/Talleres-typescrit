import { Serie } from "./serie.js";
import { data } from "./data.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;
const totalCreditElm: HTMLElement = document.getElementById("temporadas")!;
let tituloCarta: HTMLElement = document.getElementById('tituloCarta')!;
let descripcionCarta: HTMLElement = document.getElementById('descripcionCarta')!;
let webCarta: HTMLElement = document.getElementById('webCarta')!;
let imagenCarta: HTMLImageElement = document.getElementById("imagenCarta") as HTMLImageElement;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.nombre}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
    trElement.querySelector("td:nth-child(2)")!.addEventListener("click", () => actaulizarCarta(serie));

    seriesTbody.appendChild(trElement);
  });
}


function getTotalTemporadas(series: Serie[]): number {
  let temporadasTotales: number = 0;
  series.forEach((serie) => temporadasTotales = temporadasTotales + serie.temporadas);
  return temporadasTotales;
}

function actaulizarCarta(serie: Serie): void {
  tituloCarta.innerHTML = serie.nombre;
  descripcionCarta.innerHTML = serie.descripcion;
  webCarta.innerHTML = serie.web;
  imagenCarta.src = serie.foto;
  console.log(serie.foto);
}


renderSeriesInTable(data);

totalCreditElm.innerHTML = `${getTotalTemporadas(data)}`;