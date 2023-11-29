import { Component, EventEmitter, Output } from '@angular/core';
import { Server } from '../server.model';
import { Blueprint } from '../blueprint.model';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrl: './server-edit.component.css'
})

export class ServerEditComponent {
  newServerContent = '';
  @Output() serverAdded = new EventEmitter<Server>()
  @Output() blueprintAdded = new EventEmitter<Server>()

  onAddServer(serverName: string) {
    this.serverAdded.emit(new Server(serverName, this.newServerContent))
  }

  onAddBlueprint(serverName: string) {
    this.blueprintAdded.emit(new Blueprint(serverName, this.newServerContent))
  }
}
