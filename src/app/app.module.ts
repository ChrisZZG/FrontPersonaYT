import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './Componentes/Persona/persona.component';
import { NuevapersonaComponent } from './Componentes/Persona/nuevapersona.component';
import { EditarpersonaComponent } from './Componentes/Persona/editarpersona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    NuevapersonaComponent,
    EditarpersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
