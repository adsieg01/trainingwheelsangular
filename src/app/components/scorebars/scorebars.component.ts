import { Component, OnInit } from '@angular/core';
import { ScoreBarService } from '../../services/scorebar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';

const scoreBars = document.getElementById('scoreBars');

@Component({
  selector: 'app-scorebars',
  templateUrl: './scorebars.component.html',
  styleUrls: ['./scorebars.component.css'],
  providers: [ScoreBarService]
})
export class ScoreBarsComponent {

  chart: any;

  constructor(private _scoreBar: ScoreBarService) { }

  ngOnInit() {
    var scoreBars = document.getElementById('scoreBars');
    this._scoreBar.scoreTrack()
      .subscribe(res => {
        let CnOScore = res['CnOScore']
        let HnWScore = res['HnWScore']
        let HygScore = res['HygScore']
        let SocScore = res['SocScore']
        let FinScore = res['FinScore']
        console.log(CnOScore);
        this.chart = new Chart(scoreBars, {
          type: 'horizontalBar',
          data: {
            // labels: ["blank", "blank", "blank", "blank", "blank"],
            datasets: [
              {
                data: [30],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
              {
                data: [10],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
              {
                data: [200],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
              {
                data: [50],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
              {
                data: [100],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
            ]
          },
          options: {
            legend: {
              display: false
            },

            layout: {
              padding: {
                left: 0,
                right: -50,
                top: 10,
                bottom: 20
              },
              scales: {
                yAxes: [{
                  gridLines: {
                    offsetGridLines: false
                },
                  // display: false,
                  ticks: {
                    display: false 
                  }
                }],
                xAxes: [{
                  gridLines: {
                    offsetGridLines: false
                },
                }]
              }
            }
          }
        });
      }
      )
  }
}
