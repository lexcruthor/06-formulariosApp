import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
      email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
      username: ['', [Validators.required, this.validatorService.noPuedeSerBatman]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],

    }, {
      validators: [ this.validatorService.camposIguales('password','password2')]
    }
  )


  constructor(private fb: FormBuilder, private validatorService : ValidatorService, private emailValidator: EmailValidatorService ) { }


  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Alex Cruz',
      email: 'test1@test.com',
      username: 'Lex_Minato',
      password: 123456,
      password2: 123456
    })
  }

  emailRequired(){
    return this.miFormulario.get('email')?.touched 
      && this.miFormulario.get('email')?.hasError('required')
  }
  emailFormato(){
    return this.miFormulario.get('email')?.touched 
      && this.miFormulario.get('email')?.hasError('pattern')
  }

  emailExiste(){
    return this.miFormulario.get('email')?.touched 
    && this.miFormulario.get('email')?.hasError('emailTomado')
  }


  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }
}
