import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid } from "uuid";
@Injectable({
  providedIn: 'root'
})
export class dbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  }, {
    id: uuid(),
    name: 'goku',
    power: 9500,
  }, {
    id: uuid(),
    name: 'vegeta',
    power: 7500
  }
  ];


  addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter)


  }

  // onDeleteCharacter(index: number): void {
  //   console.log(index)
  //   this.characters.splice(index, 1)
  // }



  deleteCharacterById(id: string) {


    this.characters = this.characters.filter( characters => characters.id !== id)


  }




}
