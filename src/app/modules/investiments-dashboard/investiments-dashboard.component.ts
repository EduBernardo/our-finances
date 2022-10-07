import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investiments-dashboard',
  templateUrl: './investiments-dashboard.component.html',
  styleUrls: ['./investiments-dashboard.component.scss']
})
export class InvestimentsDashboardComponent implements OnInit {

  userID: any;
  chartUrl: string;
  banks = [
    {id:'itau', name:'Itaú', imgSrc:'../../../../assets/img/banks/itau-logo.png', purpose:'Fundo de Emergência + Previdência', value:21187.95},
    {id:'picpay', name:'PicPay', imgSrc:'../../../../assets/img/banks/picpay-logo.png', purpose:'Fundo para Casa Própria', value:10003.96},
    {id:'mercadoPago', name:'Mercado Pago', imgSrc:'../../../../assets/img/banks/mercado-pago-logo.png', purpose:'Fundo de Emergência Mushu', value:67.39},
    {id:'nuBank', name:'Nu Bank', imgSrc:'../../../../assets/img/banks/nu-bank-logo.png', purpose:'Fundo de Emergência Mushu', value:25.81},
    {id:'nuInvest', name:'Nu Invest', imgSrc:'../../../../assets/img/banks/nu-invest-logo.png', purpose:'Investimentos Bolsa de Valores', value:4231.68},
    {id:'mercadoBitcoin', name:'Mercado Bitcoin', imgSrc:'../../../../assets/img/banks/mercado-bitcoin-logo.png', purpose:'Investimentos Crypto', value:57.25},
    {id:'caixa', name:'Caixa', imgSrc:'../../../../assets/img/banks/caixa-logo.png', purpose:'Fundo de Garantia', value:27556.09},

  ];

  constructor(  ) { }

  ngOnInit(): void {
 }

  calculatePortifolio(){
    let portifolioValue = 0;
    this.banks.forEach((x)=>{
       portifolioValue = portifolioValue + x.value
    })
    return portifolioValue
  }

}
