import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  /**
   * Konstruktor für Dependency-Injection
   */
  constructor(private menuController: MenuController) {}

  /**
   * Event-Handler-Methode um Menü-Leiste von Hamburger-Menü zu schließen.
   */
  public menuSchliessen() {

    this.menuController.close();
  }
}
