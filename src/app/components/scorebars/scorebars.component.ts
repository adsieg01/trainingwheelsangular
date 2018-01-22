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
  
  constructor(private _scoreBar: ScoreBarService) {}

  ngOnInit() {
       var scoreBars = document.getElementById('scoreBars');
       this._scoreBar.scoreTrack()
         .subscribe(res => {
             let CnOScore = res['CnOScore']
             let HnWScore = res['HnWScore']
             let HygScore = res['HygScore']
             let SocScore = res['SocScore']
             let FinScore = res['FinScore']

            this.chart = new Chart(scoreBars, {
               type: 'horizontalBar',
               data: {
                 labels: ["blank", "blank", "blank", "blank", "blank"],
                 datasets: [
                    {
                      data: [16],
                      backgroundColor: '#0B7C7C',
                      borderColor: "#000",
                      borderWidth: 2,
                      fill: true
                    },
                    {
                      data: [154],
                      borderColor: "#000",
                      borderWidth: 2,
                      fill: true
                    },
                    {
                      data: [62],
                      borderColor: "#000",
                      borderWidth: 2,
                      fill: true
                    },
                    {
                      data: [50],
                      borderColor: "#000",
                      borderWidth: 2,
                      fill: true
                    },
                    {
                      data: [100],
                      borderColor: "#000",
                      borderWidth: 2,
                      fill: true
                    },
                  ]
                 },
                options: {
                    legend: {
                      display: false
                    },
                  }
             });
          })
      }
  }

//   Chart.types.Bar.extend({
//     name: "BarAlt",
//     initialize: function (data) {
//         Chart.types.Bar.prototype.initialize.apply(this, arguments);

//         if (this.options.curvature !== undefined && this.options.curvature <= 1) {
//             var rectangleDraw = this.datasets[0].bars[0].draw;
//             var self = this;
//             var radius = this.datasets[0].bars[0].width * this.options.curvature * 0.5;

//             // override the rectangle draw with ours
//             this.datasets.forEach(function (dataset) {
//                 dataset.bars.forEach(function (bar) {
//                     bar.draw = function () {
//                         // draw the original bar a little down (so that our curve brings it to its original position)
//                         var y = bar.y;
//                         // the min is required so animation does not start from below the axes
//                         bar.y = Math.min(bar.y + radius, self.scale.endPoint - 1);
//                         // adjust the bar radius depending on how much of a curve we can draw
//                         var barRadius = (bar.y - y);
//                         rectangleDraw.apply(bar, arguments);

//                         // draw a rounded rectangle on top
//                         Chart.helpers.drawRoundedRectangle(self.chart.scoreBars, bar.x - bar.width / 2, bar.y - barRadius + 1, bar.width, bar.height, barRadius);
//                         scoreBars.fill();

//                         // restore the y value
//                         bar.y = y;
//                     }
//                 })
//             })
//         }
//     }
// });

  

