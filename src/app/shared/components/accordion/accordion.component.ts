import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  items = [
    {id:'itau', name:'Itaú', imgSrc:'../../../../assets/img/banks/itau-logo.png', purpose:'Previdência'},
    {id:'picpay', name:'PicPay', imgSrc:'../../../../assets/img/banks/picpay-logo.png', purpose:'Fundo de Emergência'},
    {id:'mercadoPago', name:'Mercado Pago', imgSrc:'../../../../assets/img/banks/mercado-pago-logo.png', purpose:'Fundo para Casa Própria'},
    {id:'nuBank', name:'Nu Bank', imgSrc:'../../../../assets/img/banks/nu-bank-logo.png', purpose:'Fundo de Emergência Mushu'},
    {id:'nuInvest', name:'Nu Invest', imgSrc:'../../../../assets/img/banks/nu-invest-logo.png', purpose:'Investimentos Bolsa de Valores'},
    {id:'mercadoBitcoin', name:'Mercado Bitcoin', imgSrc:'../../../../assets/img/banks/mercado-bitcoin-logo.png', purpose:'Investimentos Crypto'},


  ];
  expandedIndex = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
