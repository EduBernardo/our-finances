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
  hasDiscounts: boolean;
  incomeValue: number = 100;
  deductionValue: number = 0;
  incomeValueCalculated: number;
  inputButtonLabel: string = "Calcular";
  allocationItems = [
    {id:0, name:"Necessidades Básicas", tax:0.3785 },
    {id:1, name:"Despesas de Longo Prazo", tax:0.1505 },
    {id:2, name:"Instrução", tax:0.1411 },
    {id:3, name:"Diversão", tax:0.1296 },
    {id:4, name:"Investimentos", tax:0.1 },
    {id:5, name:"Doações", tax:0.1 },
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
    
    this.incomeValueCalculated = this.incomeValue - this.deductionValue
    this.inputButtonLabel = this.showDistributionTable ? "Atualizar" : "Calcular"
  }

  getAllocationItemValue(taxValue: number){
    const allocationItemValueResult = this.incomeValueCalculated * taxValue;
    return allocationItemValueResult.toFixed(2)
  }

  setChartLabelSelectedValue(chartLabelSelected: string){
    // this.treeComponent.clickTreeNodeSelectedByChart(chartLabelSelected);
    this.chartLabelSelected = chartLabelSelected
  }

}
