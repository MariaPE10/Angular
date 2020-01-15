import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {

  public title:string;
  constructor() {
    this.title = "Bienvenido a Angular 6";
  }

  ngOnInit() {
  }

}
