import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

export interface ListItem  {
  name: string;
  value: number
}

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
  remainingIncomeValue: number = 0;
  showIncomeInput: boolean = true;
  showBudgetChartButton: boolean = false;
  showIncomeAllocation: boolean = false;
  inputButtonLabel: string = 'Incluir pagamentos';
  allocationList: Array<ListItem> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.chartUrl = this.userID == '1' ? '../../assets/img/chart_dark_theme.png' : '../../assets/img/chart_light_theme.png';
  }

  setInitialIncomeValue(){
    this.incomeValue = this.initialIncomeValue
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

  switchBetweenInputAndAllocation(){
    this.changeShowIncomeInputValue();
    this.changeshowBudgetChartButtonValue();
    this.changeshowIncomeAllocationValue();
    this.setRemainingValueInitialState();
    this.clearAllocationListArray()
  }

  setRemainingValueInitialState() {
    this.remainingIncomeValue = this.initialIncomeValue
  }

  clearAllocationListArray(){
  this.allocationList = [];

  }

  openAddListDialog(){
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ItemAllocationDialog);

    dialogRef.afterClosed().subscribe(result => {
      this.addAllocationListItem(result)
    });
  }

  addAllocationListItem(dialogItem: ListItem){
    this.allocationList.push(dialogItem);
    this.updateRemainingValue(dialogItem)
  }

  updateRemainingValue(dialogItem: ListItem){
    this.remainingIncomeValue = this.remainingIncomeValue - dialogItem.value
  }
}






@Component({
  selector: 'item-allocation-dialog',
  templateUrl: 'item-allocation-dialog.html',
  styleUrls: ['./budget.component.scss']

})

export class ItemAllocationDialog{

dialogItem = {
    name: '',
    value: 0
  }

  constructor(){
  }

}

