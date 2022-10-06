import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';

export interface ListItem  {
  name: string;
  value: number
}


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  @ViewChild('screen ') screen: any;

  userID: any;
  chartUrl: string;
  showBudgetChartSection: boolean = false;
  initialIncomeValue: number;
  remainingIncomeValue: number = 0;
  showIncomeInput: boolean = true;
  showBudgetChartButton: boolean = false;
  showIncomeAllocation: boolean = false;
  inputButtonLabel: string = 'Incluir pagamentos';
  allocationList: Array<ListItem> = [];
  showMinimunValueError: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private captureService: NgxCaptureService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.chartUrl =
      this.userID == '1'
        ? '../../assets/img/chart_dark_theme.png'
        : '../../assets/img/chart_light_theme.png';
  }

  validateMinimunValue(event: any) {
    if (
      event.target.innerHTML === 'Incluir pagamentos' &&
      !this.initialIncomeValue
    ) {
      const dialogRef = this.dialog.open(ErrorDialog);
      return;
    }
    this.switchBetweenInputAndAllocation();
  }

  switchBetweenInputAndAllocation() {
    this.changeShowIncomeInputValue();
    this.changeshowBudgetChartButtonValue();
    this.changeshowIncomeAllocationValue();
    this.setRemainingValueInitialState();
    this.clearAllocationListArray();
  }

  changeShowIncomeInputValue() {
    this.showIncomeInput = !this.showIncomeInput;
  }

  changeshowBudgetChartButtonValue() {
    this.showBudgetChartButton = !this.showBudgetChartButton;
  }

  changeshowIncomeAllocationValue() {
    this.showIncomeAllocation = !this.showIncomeAllocation;
  }

  setRemainingValueInitialState() {
    this.remainingIncomeValue = this.initialIncomeValue;
  }

  clearAllocationListArray() {
    this.allocationList = [];
  }

  openAddListDialog() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ItemAllocationDialog);

    dialogRef.afterClosed().subscribe((result) => {
      this.addAllocationListItem(result);
    });
  }

  addAllocationListItem(dialogItem: ListItem) {
    this.allocationList.push(dialogItem);
    this.updateRemainingValue(dialogItem);
  }

  updateRemainingValue(dialogItem: ListItem) {
    this.remainingIncomeValue = this.remainingIncomeValue - dialogItem.value;
  }

  takeScreenshot() {
    this.captureService
      .getImage(this.screen.nativeElement, true)
      .pipe(
        tap((img) => {
          this.shareScreenshot(img);
        })
      )
      .subscribe();
  }

  shareScreenshot(base64: string){
    const name = Date.now().toString()+'.png'
    const blob = this.DataURIToBlob(base64)
    const filesArray = [new File([blob], name, { type: 'image/png' })]
    const shareData = {
      files: filesArray,
    }
    // eslint-disable-nextline
    const nav: any = navigator
    const canShare = nav.canShare && nav.canShare(shareData)
    const userAgent = navigator.userAgent || navigator.vendor
    const isMobile = /android|iPad|iPhone|iPod/i.test(userAgent)
    if (canShare && isMobile) {
      navigator.share(shareData)
      return true
    }
    return false
  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]
        
    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)
      
        return new Blob([ia], { type: mimeString })
}



}






@Component({
  selector: 'item-allocation-dialog',
  templateUrl: '/item-allocation-dialog/item-allocation-dialog.html',
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


@Component({
  selector: 'error-dialog',
  templateUrl: '/error-dialog/error.dialog.html',
  styleUrls: ['./budget.component.scss']

})

export class ErrorDialog{

dialogItem = {
    name: '',
    value: 0
  }

  constructor(){
  }

}

