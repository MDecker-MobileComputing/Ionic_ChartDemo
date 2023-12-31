import { Component, ViewChild, AfterViewInit } from '@angular/core';

//import { Chart } from 'chart.js';
import { Chart } from 'chart.js/auto'; // https://www.chartjs.org/docs/latest/getting-started/integration.html#quick-start


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  /** Referenziert mit `#canvasFuerChart` ausgezeichnetes Canvas-Element in HTML. */
  @ViewChild('canvasFuerChart') canvasFuerChart: any;

  /**
   * Einzige Lifecycle-Methode aus Interface `AfterViewInit`
   */
  ngAfterViewInit() {

    this.zeichneChart();
  }

  /**
   * Zeichnet einen BarChart mit Einwohnerzahlen der fünf größten Städte
   * in Deutschland in das Canvas-Element.
   * <br><br>
   * Quelle Einwohnerzahlen:
   * https://www.wiwo.de/erfolg/trends/ranking-2023-das-sind-die-groessten-staedte-deutschlands-nach-einwohnerzahl/27461152.html
   */
  private zeichneChart() {

    const canvasKontext = this.canvasFuerChart.nativeElement;

    new Chart(canvasKontext, {
      type: "bar",
      data: {
        labels: ["Berlin", "Hamburg", "München", "Köln", "Frankfurt a.M."],
        datasets: [{
          label: "Anzahl Einwohner",
          data: [3.664, 1.852, 1.488, 1.08, 0.764],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              text: "Anzahl Einwohner in Mio.",
              display: true
            }
          },
          x : {
            title: {
              text: "Die fünf größten Städte in Deutschland",
              display: true
            }
          }
        }
      }
    });
  }

}
