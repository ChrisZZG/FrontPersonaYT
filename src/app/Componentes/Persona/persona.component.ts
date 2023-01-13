import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona[] = [];

  constructor(private personaS: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.personaS.list().subscribe(
      data => {
        this.persona = data;
      }
    )
  }

  delete(id?: number): void {
    if(id != undefined) {
      this.personaS.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("Eliminacion Fallida");
        }
      )
    }
  }

}
