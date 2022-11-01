import { Component, OnInit } from '@angular/core';
import { Serie} from './serie';
import { dataSeries } from './dataSeries';


getAverageSeason(dataSeries)

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeason: number = getAverageSeason(dataSeries);

  constructor() { }
  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  ngOnInit() {
    this.series = this.getSerieList();
  }
}

function getAverageSeason(serie: Serie[]): number {
  let average: number = 0;
  serie.forEach(serie => {
      average += serie.season;
  });
  return average / serie.length;
}
