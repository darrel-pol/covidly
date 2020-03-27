import { Component, OnInit } from '@angular/core';
import { ChartService } from 'libs/ui/src/lib/chart.service';

@Component({
  selector: 'covidly-covid-graph',
  templateUrl: './covid-graph.component.html',
  styleUrls: ['./covid-graph.component.css']
})
export class CovidGraphComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    const reportContent = this.chartService.getReport(new Date('01-22-2020'));
    console.log(reportContent);
  }

}
