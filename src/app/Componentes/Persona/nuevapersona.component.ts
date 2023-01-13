import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-nuevapersona',
  templateUrl: './nuevapersona.component.html',
  styleUrls: ['./nuevapersona.component.css']
})
export class NuevapersonaComponent implements OnInit {

  nombre: string;
  apellido: string;
  descripcion: string;

  constructor(private personaS: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const persona = new Persona(this.nombre, this.apellido, this.descripcion);
    this.personaS.save(persona).subscribe(
      data => {
        alert("Persona Añadida Satisfactoriamente");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo Crear la Persona");
        this.router.navigate(['']);
      }
    )
  }

}
