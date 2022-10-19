import { dataSeries } from "./dataSeries.js";
var serieTbody = document.getElementById("series");
var averageSeason = document.getElementById("season-average");
renderSeriesInTable(dataSeries);
averageSeason.innerHTML = "".concat(getAverageSeason(dataSeries));
function renderSeriesInTable(series) {
    console.log("Desplegando series en tabla");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.index, "</td>\n                                <td>").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.season, "</td>");
        serieTbody.appendChild(trElement);
    });
}
function getAverageSeason(serie) {
    var average = 0;
    serie.forEach(function (serie) {
        average += serie.season;
    });
    return average / serie.length;
}
