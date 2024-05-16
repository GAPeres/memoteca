import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: "Teste de conteudo no Angular",
      autoria: "Guilherme",
      modelo: "modelo3"
    },
    {
      conteudo: "Teste2 de novos conteudos no Angular",
      autoria: "Guilherme",
      modelo: "modelo2"
    },
    {
      conteudo: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.",
      autoria: "Alura",
      modelo: "modelo1"
    }
  ]

}
