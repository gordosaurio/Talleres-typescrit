import { Serie } from "./serie.js";

import { data } from "./data.js";

let coursesTbody: HTMLElement = document.getElementById('series')!;

const totalCreditElm: HTMLElement = document.getElementById("temporadas")!;

renderSeriesInTable(data);

totalCreditElm.innerHTML = `${getTotalTemporadas(data)}`

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${serie.id}</td>
                             <td>${serie.nombre}</td>
                             <td>${serie.canal}</td>
                             <td>${serie.temporadas}</td>`;
      coursesTbody.appendChild(trElement);
    });
  }

function getTotalTemporadas(series: Serie[]): number {
    let temporadasTotales: number = 0;
    series.forEach((serie) => temporadasTotales = temporadasTotales + serie.temporadas);
    return temporadasTotales;
  }