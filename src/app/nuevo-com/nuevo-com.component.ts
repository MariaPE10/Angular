import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-com',
  templateUrl: './nuevo-com.component.html',
  styleUrls: ['./nuevo-com.component.css']
})
export class NuevoComComponent implements OnInit {

  public mostrar: boolean;
  private datos: {
    nombre: string,
    apellidos: string,
    estatura: number,
    fnacimiento: Date
  }

  private opciones: Array<Object>;
  opSeleccionada: Object = null;
  private salida: string;

  constructor() {
    this.mostrar = true;
    this.datos = {nombre: "", apellidos: "", estatura: 0, fnacimiento: new Date()};
    this.opciones = [
      {id:1, nombre: "Opción 1"},
      {id:2, nombre: "Opción 2"},
      {id:3, nombre: "Opción 3"},
      {id:4, nombre: "Opción 4"},
      {id:5, nombre: "Opción 5"}
    ];
  }

  ngOnInit() {
  }

  enviar(){
    alert("aquí enviamos el formulario");
  }

  limpiar(){
    this.datos = {nombre: "Maria", apellidos: "Perez", estatura: 1.63, fnacimiento: new Date("1995-12-05")};
  }

  seleccion(evento:any){
    console.log(evento);
    console.log(this.opSeleccionada);
    this.salida = "Opción seleccionada: " + evento.nombre + " ID: " + evento.id;
  }
}
