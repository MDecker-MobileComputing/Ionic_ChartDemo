import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Chart } from 'chart.js/auto'; // https://www.chartjs.org/docs/latest/getting-started/integration.html#quick-start

@Component({
  selector: 'app-barchart2',
  templateUrl: './barchart2.page.html',
  styleUrls: ['./barchart2.page.scss'],
})
export class Barchart2Page implements AfterViewInit {

  /** Referenziert mit `#canvasFuerChart` ausgezeichnetes Canvas-Element in HTML. */
  @ViewChild('canvasFuerChart') canvasFuerChart: any;


  /**
   * Einzige Lifecycle-Methode aus Interface `AfterViewInit`
   */
   ngAfterViewInit() {

    this.zeichneChart();
  }

  /**
   * Barchart mit zwei Datenreihen erzeugen in das Canvas-Element.
   */
  private zeichneChart() {

    const canvasKontext = this.canvasFuerChart.nativeElement;

    new Chart(canvasKontext, {
      type: "bar",
      data: {
        labels: ["Firma A", "Firma B", "Firma C", "Firma D" ],
        datasets: [
          {
            label: "Verkaufszahlen 2022",
            data: [20500, 10300, 5100, 16300],
            borderWidth: 1
          },
          {
            label: "Verkaufszahlen 2023",
            data: [19100, 12300, 4100, 17300],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  }

}
