
import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";
let serieTbody: HTMLElement = document.getElementById("series")!;
const averageSeason: HTMLElement = document.getElementById("season-average")!;

renderSeriesInTable(dataSeries);
averageSeason.innerHTML = `${getAverageSeason(dataSeries)}`


function renderSeriesInTable(series: Serie[]): void{
    console.log("Desplegando series en tabla");
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = ` <td>${serie.index}</td>
                                <td>${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.season}</td>`;
        serieTbody.appendChild(trElement);

    });
}


function getAverageSeason(serie: Serie[]): number{
    let average: number = 0;
    serie.forEach(serie => {
        average += serie.season;
    });
    return average/serie.length;
}