import { Component } from '@angular/core';

import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';
import { AddCharacterComponent } from '../components/add-character/add-character.component';




@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: dbzService) { }


  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character)
  }





}
