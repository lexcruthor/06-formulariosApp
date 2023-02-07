import { Component} from '@angular/core';


interface Persona {
  nombre: string,
  favoritos: Favorito[];
}


interface Favorito {
  id: number,
  nombreJuego:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})


export class DinamicosComponent {

  nuevoJuego: string = '';


  persona : Persona = 
    {
      nombre: 'Alex',
      favoritos: [
        {
          id: 1,
          nombreJuego: 'Kingdom Hearts'

        }
        ,
        {
          id: 2,
          nombreJuego: 'Final Fantasy'
          
        }

      ]
    }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length +1,
      nombreJuego: this.nuevoJuego

    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = ''
  }
  eliminar(index : number){
    this.persona.favoritos.splice(index,1);
    }
  guardar(){
    console.log('Formulario posteado')
  }
}
