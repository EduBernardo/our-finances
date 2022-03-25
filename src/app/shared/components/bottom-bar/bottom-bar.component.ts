import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<string>();

  buttons = [
    {icon: "arrow_back_ios", name:'back'},
    {icon: "home", name:'home'},
    {icon: "account_circle", name:'account'},
  ]
  constructor(
    private router : Router,
    public dialog: MatDialog,
    private navigate: NavigationService

  ) { }

  ngOnInit(): void {
  }

  emitButtonClicked(buttonClicked: string){
    // this.buttonClicked.emit(buttonName)
      switch(buttonClicked) { 
        case 'back': { 
          window.history.back()
           break; 
        } 
        case 'home': { 
          this.navigate.navigateTo(buttonClicked)
           break; 
        }
        case 'account': { 
          // this.router.navigate(['login'])
          this.openDialog()
           break; 
        } 
        default: { 
           break; 
        } 
     } 
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
