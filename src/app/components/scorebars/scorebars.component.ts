import { Component, OnInit } from '@angular/core';
import { ScoreBarService } from '../../services/scorebar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';

const scoreBars = document.getElementById('scoreBars');

@Component({
  selector: 'app-scorebars',
  templateUrl: './scorebars.component.html',
  styleUrls: ['./scorebars.component.css'],
})
export class ScoreBarsComponent {

  chart: any;

  constructor(private _scoreBar: ScoreBarService) { }

  ngOnInit() {
    var scoreBars = document.getElementById('scoreBars');
    this._scoreBar.scoreTrack()
      .subscribe(res => {
        let HnWScore = res['HnWScore']
        let HygScore = res['HygScore']
        let FinScore = res['FinScore']
        let SocScore = res['SocScore']
        let CnOScore = res['CnOScore']
        this.chart = new Chart(scoreBars, {
          type: 'horizontalBar',
          data: {
            datasets: [
              {
                data: [HnWScore],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
              {
                data: [HygScore],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
              {
                data: [FinScore],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
              {
                data: [SocScore],
                backgroundColor: '#68000D',
                borderColor: "transparent",
                borderWidth: 0,
                fill: true
              },
              {
                data: [CnOScore],
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
                  display: false,
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
