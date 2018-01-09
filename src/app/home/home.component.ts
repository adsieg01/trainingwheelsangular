import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories = [
    {value: 'healthnwell-0', viewValue: 'Health and Wellness', id: '0'},
    {value: 'hygiene-1', viewValue: 'Hygiene', id: '1'},
    {value: 'finance-2', viewValue: 'Finance', id: '2'},
    {value: 'social-3', viewValue: 'Social', id: '3'},
    {value: 'orgncommit-4', viewValue: 'Organization and Commitment', id: '4'}
  ];

  activities = [
    {value: 'sleep', viewValue: 'Get at least x hours of sleep', id: '0'},
    {value: 'workout', viewValue: 'Worked out', id: '0'},
    {value: 'grocery', viewValue: 'Went to the grocery store', id: '0'},
    {value: 'cook', viewValue: 'Cooked own meal/reheated leftovers', id: '0'},
    {value: 'dread', viewValue: 'Did not let existential dread set in', id: '0'},
    {value: 'laundry', viewValue: 'Did laundry', id: '1'},
    {value: 'shower', viewValue: 'Took a shower', id: '1'},
    {value: 'teeth', viewValue: 'Brushed teeth', id: '1'},
    {value: 'hair', viewValue: 'Maintained facial/body hair', id: '1'},
    {value: 'nails', viewValue: 'Cleaned gunk under nails', id: '1'},
    {value: 'utilities', viewValue: 'Paid utilities', id: '2'},
    {value: 'deposit', viewValue: 'Made a deposit', id: '2'},
    {value: 'statement', viewValue: 'Managed online bank statement', id: '2'},
    {value: 'debt', viewValue: 'Paid some debt', id: '2'},
    {value: 'swiss', viewValue: 'Opened a Swiss bank account', id: '2'},
    {value: 'fam', viewValue: 'Called a family member', id: '3'},
    {value: 'group', viewValue: 'Group activity', id: '3'},
    {value: 'drink', viewValue: 'Responsibly enjoyed intoxicants', id: '3'},
    {value: 'irl', viewValue: 'Hung out with someone in person', id: '3'},
    {value: 'dog', viewValue: 'Met a new dog', id: '3'},
    {value: 'appoint', viewValue: 'Kept an appointment', id: '4'},
    {value: 'date', viewValue: 'Remembered an important date', id: '4'},
    {value: 'ontime', viewValue: 'Made it to work on time', id: '4'},
    {value: 'clean', viewValue: 'Cleaned a room', id: '4'},
    {value: 'trash', viewValue: 'Took out the trash', id: '4'},
    {value: 'chart', viewValue: 'Stared blankly at an organization chart', id: '4'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

