import { Component } from '@angular/core';
import { interval } from 'rxjs'
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nselect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Daniel', 'Juan', 'Acenjo', 'Yulissa'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',

  }

  cambiarCliente() {
    if (this.nombre === 'Yulissa') {
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Yulissa';
      this.genero = 'femenino';
    }

  }

  borrarCliente() {
    this.clientes.pop();
    console.log(this.clientes.length);
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(3500); // 0,1,2,3,4,5


  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de promesa');
    }, 3500);
  })
}
