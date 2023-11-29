import { Component, EventEmitter, Output } from '@angular/core';
import { Server } from '../server.model';
import { Blueprint } from '../blueprint.model';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrl: './server-edit.component.css'
})

export class ServerEditComponent {
  newServerName = '';
  newServerContent = '';
  @Output() serverAdded = new EventEmitter<Server>()
  @Output() blueprintAdded = new EventEmitter<Server>()

  onAddServer() {
    this.serverAdded.emit(new Server(this.newServerName, this.newServerContent))
  }

  onAddBlueprint() {
    this.blueprintAdded.emit(new Blueprint(this.newServerName, this.newServerContent))
  }
}
