import { Component, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'clark';
  public age: number = 53;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  decriptionHero():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = 'spiderman'
  }

  changeAge():void {
    this.age = 25;
  }

  resetform():void {
    this.name = 'clark';
    this.age = 53;

    document.querySelectorAll('h1').forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    })
  }



}
