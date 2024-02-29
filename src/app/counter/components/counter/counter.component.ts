import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{count}}</h1>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetCounter()">reset</button>
  `
})

export class CounterComponent {

  public count:number = 5


  increaseBy( value:number ) : void{
    this.count += value
  }

  resetCounter(){
    this.count = 5
  }

  constructor() { }


}
