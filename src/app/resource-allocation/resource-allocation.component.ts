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


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.chartUrl = this.userID == '1' ? '../../assets/img/chart_dark_theme.png' : '../../assets/img/chart_light_theme.png';
  }

  setChartLabelSelectedValue(chartLabelSelected: string){
    this.treeComponent.clickTreeNodeSelectedByChart(chartLabelSelected);
    this.chartLabelSelected = chartLabelSelected
  }

}
