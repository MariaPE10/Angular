import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'prueba4';
  otro = "hola holita vesinito";

  cambiar(){
    this.otro = "Lo he cambiado!!";
  }
}
