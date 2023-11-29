import { Component } from '@angular/core';
import { Server } from './server.model';
import { Blueprint } from './blueprint.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Array<Server | Blueprint> = [];

  onServerAdded(server: Server) {
    this.serverElements.push(server)
  }

  onBlueprintAdded(blueprint: Blueprint) {
    this.serverElements.push(blueprint)
  }
}
