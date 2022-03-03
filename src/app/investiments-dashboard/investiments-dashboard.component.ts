import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investiments-dashboard',
  templateUrl: './investiments-dashboard.component.html',
  styleUrls: ['./investiments-dashboard.component.scss']
})
export class InvestimentsDashboardComponent implements OnInit {

  userID: any;
  chartUrl: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.chartUrl = this.userID == '1' ? '../../assets/img/chart_dark_theme.png' : '../../assets/img/chart_light_theme.png';
  }

}
