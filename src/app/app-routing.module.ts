import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { StatusComponent } from './components/status/status.component';
import { EventsComponent } from './components/events/events.component';

 
const routes: Routes = [
 { path: 'config', component: ConfigurationComponent },
 { path: 'status', component: StatusComponent },
 { path: 'events', component: EventsComponent },
 { path: '**', component: StatusComponent }
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes, { useHash: true })],
 exports: [RouterModule]
})
export class AppRoutingModule { }