import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccordionComponent } from '../shared/components/accordion/accordion.component';

@Component({
  selector: 'app-investiments-dashboard',
  templateUrl: './investiments-dashboard.component.html',
  styleUrls: ['./investiments-dashboard.component.scss']
})
export class InvestimentsDashboardComponent implements OnInit {

  userID: any;
  chartUrl: string;
  banks = [
    {id:'itau', name:'Itaú', imgSrc:'../../../../assets/img/banks/itau-logo.png', purpose:'Fundo de Emergência + Previdência', value:19843.37},
    {id:'picpay', name:'PicPay', imgSrc:'../../../../assets/img/banks/picpay-logo.png', purpose:'Fundo para Casa Própria', value:10884.97},
    {id:'mercadoPago', name:'Mercado Pago', imgSrc:'../../../../assets/img/banks/mercado-pago-logo.png', purpose:'Fundo de Emergência Mushu', value:45.94},
    {id:'nuBank', name:'Nu Bank', imgSrc:'../../../../assets/img/banks/nu-bank-logo.png', purpose:'Fundo de Emergência Mushu', value:14.38},
    {id:'nuInvest', name:'Nu Invest', imgSrc:'../../../../assets/img/banks/nu-invest-logo.png', purpose:'Investimentos Bolsa de Valores', value:4231.68},
    {id:'mercadoBitcoin', name:'Mercado Bitcoin', imgSrc:'../../../../assets/img/banks/mercado-bitcoin-logo.png', purpose:'Investimentos Crypto', value:52.21},
    {id:'caixa', name:'Caixa', imgSrc:'../../../../assets/img/banks/caixa-logo.png', purpose:'Fundo de Garantia', value:26903.93},

  ];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.chartUrl = this.userID == '1' ? '../../assets/img/chart_dark_theme.png' : '../../assets/img/chart_light_theme.png';
  }

  calculatePortifolio(){
    let portifolioValue = 0;
    this.banks.forEach((x)=>{
       portifolioValue = portifolioValue + x.value
    })
    return portifolioValue
  }

}
