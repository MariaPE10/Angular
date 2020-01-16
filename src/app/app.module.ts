import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { CosasComponent } from './cosas/cosas.component';
import { NuevoComComponent } from './nuevo-com/nuevo-com.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    HolaMundoComponent,
    CosasComponent,
    NuevoComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
