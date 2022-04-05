import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayus: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiarFLag(){
    this.enMayus = !this.enMayus;
  }

  cambiarOrden(valor: string){    
    this.ordenarPor = valor;
  }

}
