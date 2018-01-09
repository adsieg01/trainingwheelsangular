import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: string = '10';

  categories = [
    {value: 'healthnwell-0', viewValue: 'Health and Wellness', categoryid: '0'},
    {value: 'hygiene-1', viewValue: 'Hygiene', categoryid: '1'},
    {value: 'finance-2', viewValue: 'Finance', categoryid: '2'},
    {value: 'social-3', viewValue: 'Social', categoryid: '3'},
    {value: 'orgncommit-4', viewValue: 'Organization and Commitment', categoryid: '4'}
  ];

  activities = [
    {value: 'sleep', viewValue: 'Get at least x hours of sleep', actid: '0'},
    {value: 'workout', viewValue: 'Worked out', actid: '0'},
    {value: 'grocery', viewValue: 'Went to the grocery store', actid: '0'},
    {value: 'cook', viewValue: 'Cooked own meal/reheated leftovers', actid: '0'},
    {value: 'dread', viewValue: 'Did not let existential dread set in', actid: '0'},
    {value: 'laundry', viewValue: 'Did laundry', actid: '1'},
    {value: 'shower', viewValue: 'Took a shower', actid: '1'},
    {value: 'teeth', viewValue: 'Brushed teeth', actid: '1'},
    {value: 'hair', viewValue: 'Maintained facial/body hair', actid: '1'},
    {value: 'nails', viewValue: 'Cleaned gunk under nails', actid: '1'},
    {value: 'utilities', viewValue: 'Paid utilities', actid: '2'},
    {value: 'deposit', viewValue: 'Made a deposit', actid: '2'},
    {value: 'statement', viewValue: 'Managed online bank statement', actid: '2'},
    {value: 'debt', viewValue: 'Paid some debt', actid: '2'},
    {value: 'swiss', viewValue: 'Opened a Swiss bank account', actid: '2'},
    {value: 'fam', viewValue: 'Called a family member', actid: '3'},
    {value: 'group', viewValue: 'Group activity', actid: '3'},
    {value: 'drink', viewValue: 'Responsibly enjoyed intoxicants', actid: '3'},
    {value: 'irl', viewValue: 'Hung out with someone in person', actid: '3'},
    {value: 'dog', viewValue: 'Met a new dog', actid: '3'},
    {value: 'appoint', viewValue: 'Kept an appointment', actid: '4'},
    {value: 'date', viewValue: 'Remembered an important date', actid: '4'},
    {value: 'ontime', viewValue: 'Made it to work on time', actid: '4'},
    {value: 'clean', viewValue: 'Cleaned a room', actid: '4'},
    {value: 'trash', viewValue: 'Took out the trash', actid: '4'},
    {value: 'chart', viewValue: 'Stared blankly at an organization chart', actid: '4'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

