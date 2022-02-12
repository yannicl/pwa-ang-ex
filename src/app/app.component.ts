import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mes tâches';

  tabs : any = [{label: "Composant A", link: "/a"}, {label: "Composant B", link: "/b"}]

}
