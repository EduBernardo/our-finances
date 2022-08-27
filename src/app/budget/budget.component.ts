import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  userID: any;
  chartUrl: string;
  showBudgetChartSection: boolean = false;
  initialIncomeValue: number;
  incomeValue: number = 0;
  calculatedIncomeValue: number = 0;
  showIncomeInput: boolean = true;
  showBudgetChartButton: boolean = false;
  showIncomeAllocation: boolean = false;
  inputButtonLabel: string = 'Incluir pagamentos';


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.chartUrl = this.userID == '1' ? '../../assets/img/chart_dark_theme.png' : '../../assets/img/chart_light_theme.png';
  }

  setInitialIncomeValue(){
    this.incomeValue = this.initialIncomeValue
  }

  switchBetweenInputAndAllocation(){
    this.changeShowIncomeInputValue();
    this.changeshowBudgetChartButtonValue();
    this.changeshowIncomeAllocationValue();
  }

  changeShowIncomeInputValue(){
    this.showIncomeInput = !this.showIncomeInput
  }

  changeshowBudgetChartButtonValue(){
    this.showBudgetChartButton = !this.showBudgetChartButton
  }

  changeshowIncomeAllocationValue(){
    this.showIncomeAllocation = !this.showIncomeAllocation
  }

}
