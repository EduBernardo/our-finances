import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TreeComponent } from '../shared/components/tree/tree.component';

@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource-allocation.component.html',
  styleUrls: ['./resource-allocation.component.scss']
})
export class ResourceAllocationComponent implements OnInit {
  @ViewChild('labelsTree') treeComponent: TreeComponent;
  
  userID: any;
  chartUrl: string;
  chartLabelSelected: string
  showDistributionTableSection: boolean = true;
  showDistributionTable: boolean = false;
  showAllocationChartSection: boolean = false;
  hasDiscounts: boolean;
  incomeValue: number = 100;
  deductionValue: number = 0;
  incomeValueCalculated: number;
  inputButtonLabel: string = "Calcular";
  allocationItemValueSum: number = 0;

  allocationItems = [
    {id:0, name:"Dízimo", tax:0.1 },
    {id:1, name:"Total para Alocação (sem o dízimo)", tax:1 },
    {id:2, name:"Necessidades Básicas", children:["Aluguel", "Água", "Luz", "Fraldas Arthur", "Gasolina", "Internet", "Fundo Mushu", "Tim"], tax:0.4785 },
    {id:3, name:"Despesas de Longo Prazo", children:["Entrada Casa Própria"], tax:0.1505 },
    {id:4, name:"Instrução", children:["Mensalidade Pós"], tax:0.1411 },
    {id:5, name:"Diversão", children:["Streamings", "Mesadas", "Roles"], tax:0.1296 },
    {id:6, name:"Investimentos", children:[	"Renda Variável", "Criptomoedas", "Renda Fixa"], tax:0.1 },
    
  ]



  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.chartUrl = this.userID == '1' ? '../../assets/img/chart_dark_theme.png' : '../../assets/img/chart_light_theme.png';
  }

  updateIncomeValue(event: any){
    if (event.srcElement.innerText === "Calcular"){
      this.showDistributionTable= !this.showDistributionTable
    }
    
    this.incomeValueCalculated = (this.incomeValue * 0.9) - this.deductionValue
    this.inputButtonLabel = this.showDistributionTable ? "Atualizar" : "Calcular"
  }

  getAllocationItemValue(allocationItem: any){
    const allocationItemValueResult = allocationItem.id !== 0
    ? this.incomeValueCalculated * allocationItem.tax
    : this.incomeValue * allocationItem.tax;

    return allocationItemValueResult.toFixed(2)
  }

  setChartLabelSelectedValue(chartLabelSelected: string){
    // this.treeComponent.clickTreeNodeSelectedByChart(chartLabelSelected);
    this.chartLabelSelected = chartLabelSelected
  }

}
