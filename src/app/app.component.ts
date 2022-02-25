import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alarme';

  tabs : any = [{label: "Statut", link: "/status"}, {label: "Événements", link: "/events"}, {label: "Configuration", link: "/config"}]
}
