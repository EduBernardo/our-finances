import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  @Input() userID: string
  @Output() buttonClicked = new EventEmitter<string>();

  buttons = [
    {icon: "arrow_back_ios", name:'back'},
    {icon: "home", name:'home'},
    {icon: "account_circle", name:'account'},
  ]
  constructor(
    private router : Router,
    public dialog: MatDialog
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
          this.router.navigate(['home', this.userID])
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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
