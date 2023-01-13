import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './Componentes/Persona/persona.component';
import { EditarpersonaComponent } from './Componentes/Persona/editarpersona.component';
import { NuevapersonaComponent } from './Componentes/Persona/nuevapersona.component';

const routes: Routes = [
  {path: '', component: PersonaComponent},
  {path: 'editarpersona/:id', component: EditarpersonaComponent},
  {path: 'nuevapersona', component: NuevapersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
