import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartType: string
  @Output() labelSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.verifyChartType(this.chartType)
  }
  verifyChartType(chartType: string) {
    switch (chartType) {
      case 'doughnut':
        this.createDoughnutChart()
        break;
      case 'bar':
        this.createBarChart()
        break;
      default:
        break
    }

  }

  private createDoughnutChart() {
    const chart = document.getElementById('myChart') as any
    const ctx = chart.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Necessidades Básicas',
          'Doações',
          'Investimentos',
          'Despesas de Longo Prazo',
          'Diversão',
          'Instrução'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [37.85, 10, 10, 15.05, 12.98, 14.11],
          backgroundColor: [
            'rgba(0,156,73,255)',
            'rgba(51,80,184,255)',
            'rgba(254,0,0,255)',
            'rgba(112,48,160,255)',
            'rgba(255,192,0,255)',
            'rgba(175,171,170,255)'
          ],
          hoverBackgroundColor: [
            'rgba(0,156,73,255)',
            'rgba(51,80,184,255)',
            'rgba(254,0,0,255)',
            'rgba(112,48,160,255)',
            'rgba(255,192,0,255)',
            'rgba(175,171,170,255)'
          ],
          borderJoinStyle: 'round',
          borderColor: 'rgba(0, 0, 0, 0)',
          hoverOffset: 5,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || '';

                if (label) {
                  label += ': ';
                }

                if (context.parsed !== null) {
                  label += context.parsed + ' %';
                }
                return label;
              }
            }
          }
        },
        onClick: (event_, elements_, chart) => {
          this.labelSelected.emit(chart.tooltip?.dataPoints[0].label)
        }
      }
    });
  }

  private createBarChart() {
    const chart = document.getElementById('myChart') as any
    const ctx = chart.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Valor Gasto',
          'Orçamento',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [37, 85],
          backgroundColor: [
            'rgba(0,156,73,255)',
            'rgba(51,80,184,255)'
          ],
          hoverBackgroundColor: [
            'rgba(0,156,73,255)',
            'rgba(51,80,184,255)',
          ],
          borderColor: 'rgba(0, 0, 0, 0)',
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || '';

                if (label) {
                  label += ': ';
                }

                if (context.parsed !== null) {
                  label += context.parsed + ' %';
                }
                return label;
              }
            }
          }
        },
        onClick: (event_, elements_, chart) => {
          this.labelSelected.emit(chart.tooltip?.dataPoints[0].label)
        }
      }
    });
  }


}
