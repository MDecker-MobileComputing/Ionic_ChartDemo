import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Chart } from 'chart.js/auto'; // https://www.chartjs.org/docs/latest/getting-started/integration.html#quick-start


/**
 * Doku zu Radar-Chart von chart.js:
 * https://www.chartjs.org/docs/latest/charts/radar.html
 */
@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.page.html',
  styleUrls: ['./radarchart.page.scss'],
  standalone: false
})
export class RadarchartPage implements AfterViewInit {

  /** Referenziert mit `#canvasFuerChart` ausgezeichnetes Canvas-Element in HTML. */
  @ViewChild('canvasFuerChart') canvasFuerChart: any;


  /**
   * Einzige Lifecycle-Methode aus Interface `AfterViewInit`.
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
      type: "radar",
      data: {
        labels: [ "Reklamationen",
                  "Fehltage MA",
                  "Umsatz Kategorie A",
                  "Umsatz Kategorie B" ,
                  "Umsatz Kategorie C",
                  "Umsatz Kategorie D"
                ],
        datasets: [{
                    data: [ 65, 71, 62, 62, 52, 41 ],
                    label: "Filiale A",
                  },{
                    data: [ 81, 46, 69, 55, 76, 33 ],
                    label: "Filiale B",
                  }]
      },
      options: {
        elements: {
          line: {  borderWidth: 3 }
        }
      }
    });
  }

}
