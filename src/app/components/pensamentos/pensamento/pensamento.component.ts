import { Component, OnInit, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

  @Input() pensamento:Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  larguraPensamento():string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
