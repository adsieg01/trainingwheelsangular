import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = [
    {value: 'healthnwell-0', viewValue: 'Health and Wellness'},
    {value: 'hygiene-1', viewValue: 'Hygiene'},
    {value: 'finance-2', viewValue: 'Finance'},
    {value: 'social-3', viewValue: 'Social'},
    {value: 'orgncommit-4', viewValue: 'Organization and Commitment'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

