import { Component, ViewChild, AfterViewInit } from '@angular/core';

//import { Chart } from 'chart.js';
import { Chart } from 'chart.js/auto'; // https://www.chartjs.org/docs/latest/getting-started/integration.html#quick-start



@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.page.html',
  styleUrls: ['./linechart.page.scss'],
})
export class LinechartPage implements AfterViewInit {

  /** Referenziert mit `#canvasFuerChart` ausgezeichnetes Canvas-Element in HTML. */
  @ViewChild('canvasFuerChart') canvasFuerChart: any;

  /**
   * Einzige Lifecycle-Methode aus Interface `AfterViewInit`
   */
  ngAfterViewInit() {

    this.zeichneChart();
  }

  /**
   * Methode zeichnet Liniendiagramm.
   */
  private zeichneChart() {

    const canvasKontext = this.canvasFuerChart.nativeElement;

    new Chart(canvasKontext, {
      type: "line",
      data: {
        labels: ["Januar", "Februar", "März", "April", "Mai", "Juni"],
        datasets: [
          {
            label: "Land A",
            data: [ 10, 15, 22, 40, 51, 60 ], // absolute Zahlen, keine Prozentwerte!
            borderWidth: 1
          },
          {
            label: "Land B",
            data: [ 4, 15, 8, 30, 35, 32 ], // absolute Zahlen, keine Prozentwerte!
            borderWidth: 1
          }
        ]
      }    
    });    
  }


}
