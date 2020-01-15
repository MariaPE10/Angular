import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  titulico = "un 8?? Mimimimimi";

  cosicas = new Array("Canela", "Vainilla", "Oreo", "Chocolate");
  constructor() { }

  ngOnInit() {
  }

}
