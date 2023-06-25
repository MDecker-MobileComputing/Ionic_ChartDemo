import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('canvasFuerChart') canvasFuerChart: any;

  constructor() {}

  /**
   * Einzige Lifecycle-Methode aus Interface `AfterViewInit`
   */
  ngAfterViewInit() {

    this.zeichneChart();
  }

  /**
   * Zeichnet einen BarChart.
   */
  private zeichneChart() {

    const canvasKontext = this.canvasFuerChart.nativeElement;

    new Chart(canvasKontext, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

}
