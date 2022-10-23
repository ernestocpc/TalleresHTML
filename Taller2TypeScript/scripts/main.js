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
        // trElement.children[1].classList.add("link");
        trElement.children[1].setAttribute("class", "link");
        trElement.children[1].addEventListener("click", function () { showSerie(serie, serie.index); });
    });
}
function getAverageSeason(serie) {
    var average = 0;
    serie.forEach(function (serie) {
        average += serie.season;
    });
    return average / serie.length;
}
function showSerie(serie, index) {
    var card = document.getElementById("card");
    card.innerHTML = "\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(serie.imagen, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n            <p class=\"card-text\">").concat(serie.descripcion, "</p>\n            <a href=\"").concat(serie.webPage, "\" class=\"btn btn-primary\">Go to web page</a>\n        </div>\n    </div>");
}
