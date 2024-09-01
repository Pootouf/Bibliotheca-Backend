import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-species-card',
  templateUrl: './species-card.component.html',
  styleUrl: './species-card.component.scss',
  standalone: true
})
export class SpeciesCardComponent {

  @Input() speciesName: String = "";
  @Input() vernacularName: String = "";
  @Input() imagePath: String = "";

}
