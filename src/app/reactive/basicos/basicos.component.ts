import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  // miFormulario: FormGroup = new FormGroup(
  //   {
  //     'nombre': new FormControl('RTX 4080TI'),
  //     'precio': new FormControl(1700),
  //     'existencias': new FormControl(5)

  //   }
  // );

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  campoValido(campo: string) {
    return this.miFormulario.get(campo)?.errors
      && this.miFormulario.get(campo)?.touched
  }


  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
      console.log(this.miFormulario.value);
      this.miFormulario.reset();

   
  }


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'RTX 4080 Ti',
      precio: 1500
    })

  }
}
