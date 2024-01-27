import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
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
