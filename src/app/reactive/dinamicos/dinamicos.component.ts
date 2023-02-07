import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder) {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    favoritos: this.fb.array([  //espeficamos así que es un array, si lo ponemos con [] significa que es un nuevo campo como el anterior de nombre
      ['Kingdom Hearts IV', Validators.required],
      ['Persona 5', Validators.required]
    ], Validators.required)  //tiene que tener mínimo 1, si no el formulario es false
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required) //creamos un control nuevo, y si es valido tomamos su valor

  get favoritosArray() {
    return this.miFormulario.get('favoritos') as FormArray;
  }


  campoValido(campo: string) {
    return this.miFormulario.get(campo)?.errors
      && this.miFormulario.get(campo)?.touched
  }


  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    this.favoritosArray.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(i: number){
    this.favoritosArray.removeAt(i); //aquí no existe el splice, el removeAt necesita un index
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
    else {
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    }
  }

}

