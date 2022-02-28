import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  emitButtonClicked(buttonName: string, event: MouseEvent){
    this.buttonClicked.emit(buttonName)
  }
}
