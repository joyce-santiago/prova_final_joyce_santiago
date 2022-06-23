import { Component, OnInit } from '@angular/core';
import { Carro } from '../carros';
import { CARROS } from '../lista-carros';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
  carros = CARROS;
  selectedCarro?: Carro;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(carro: Carro): void {
    this.selectedCarro = carro;
  }
}