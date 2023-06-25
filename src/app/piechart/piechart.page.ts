import { Component, ViewChild, AfterViewInit } from '@angular/core';

//import { Chart } from 'chart.js';
import { Chart } from 'chart.js/auto'; // https://www.chartjs.org/docs/latest/getting-started/integration.html#quick-start


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.page.html',
  styleUrls: ['./piechart.page.scss'],
})
export class PiechartPage implements AfterViewInit {

  /** Referenziert mit `#canvasFuerChart` ausgezeichnetes Canvas-Element in HTML. */
  @ViewChild('canvasFuerChart') canvasFuerChart: any;

  /**
   * Einzige Lifecycle-Methode aus Interface `AfterViewInit`
   */
  ngAfterViewInit() {

    this.zeichneChart();
  }

  /**
   * Methode zeichnet Kuchendiagramm.
   */
  private zeichneChart() {

    const canvasKontext = this.canvasFuerChart.nativeElement;

    new Chart(canvasKontext, {
      type: "pie",
      data: {
        labels: ["Partei A", "Partei B", "Partei C", "Ungültig" ],
        datasets: [
          {
            label: "Anzahl Stimmen",
            data: [ 25, 40, 66, 10 ], // absolute Zahlen, keine Prozentwerte!
            borderWidth: 1
          }
        ]
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: "Wahlergebnis",
                font: { size: 30 }                                
            }
        }
      }      
    });    
  }

}
