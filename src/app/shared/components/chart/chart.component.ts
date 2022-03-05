import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const chart = document.getElementById('myChart') as any
    const ctx = chart.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [
          'Necessidades Básicas',
          'Doações',
          'Investimentos',
          'Longo Prazo',
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
          borderJoinStyle:'round',
          borderColor:'rgba(0, 0, 0, 0)',
          hoverOffset: 3,
        }]
      },
      options:{
        plugins:{
          legend:{
            display:false,
          },
          tooltip:{
            callbacks: {
              label: function(context) {
                  let label = context.label || '';

                  if (label) {
                    label += ': ';
                }

                  if (context.parsed !== null) {
                      label += context.parsed +' %';
                  }
                  return label;
              }
            }
          }
        }
      }
    });
  }


}
