import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: {{base}}</h3>

        <button (click)="add(-base)">- {{base}}</button>
        <span>{{number}}</span>
        <button (click)="add(base)">+ {{base}}</button>
    `
  })
export class ContadorComponent {
    public title: string = 'Contador App';
    public number: number = 10;
    public base: number = 5;
  
    add(n: number): void {
      this.number += n;
    }
}