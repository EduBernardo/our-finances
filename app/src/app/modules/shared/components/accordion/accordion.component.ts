import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {


 @Input() banks: any;

  expandedIndex = 0;

  
  constructor() { }

  ngOnInit(): void {
  }

  setItems(items: any){
    this.banks = items;
  }

}
