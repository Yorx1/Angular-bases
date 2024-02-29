import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'App de angular';
  public array:number[]= [1,2,3,4,5]

  public count:number = 5


  increaseBy( value:number): void {
    this.count += value
  }



  resetCounter(): void{
    this.count = 0
  }

}

