import { Component, Input } from '@angular/core';
import { Blueprint } from '../blueprint.model';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrl: './blueprint.component.css'
})
export class BlueprintComponent {
  @Input() blueprint: Blueprint
}
