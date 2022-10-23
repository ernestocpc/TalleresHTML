
import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";
let serieTbody: HTMLElement = document.getElementById("series")!;
const averageSeason: HTMLElement = document.getElementById("season-average")!;

renderSeriesInTable(dataSeries);
averageSeason.innerHTML = `${getAverageSeason(dataSeries)}`


function renderSeriesInTable(series: Serie[]): void {
    console.log("Desplegando series en tabla");
    series.forEach(serie => {
        let trElement = document.createElement("tr");

        trElement.innerHTML = ` <td>${serie.index}</td>
                                <td>${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.season}</td>`;
        serieTbody.appendChild(trElement);
        trElement.children[1].classList.add("link");

        trElement.children[1].addEventListener("click", () => { showSerie(serie, serie.index) });

    });
}


function getAverageSeason(serie: Serie[]): number {
    let average: number = 0;
    serie.forEach(serie => {
        average += serie.season;
    });
    return average / serie.length;
}


function showSerie(serie: Serie, index: number): void {
    let card: HTMLElement = document.getElementById("card")!;
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${serie.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.descripcion}</p>
            <a href="${serie.webPage}" class="btn btn-primary">Go to web page</a>
        </div>
    </div>`

}
