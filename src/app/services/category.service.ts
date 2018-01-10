import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Activity } from '../models/Activity';

@Injectable()
export class CategoryService {
  getCategories() {
    return [
      new Category(1, 'Health and Wellness'),
      new Category(2, 'Hygiene'),
      new Category(3, 'Finance'),
      new Category(4, 'Social'),
      new Category(5, 'Organization and Commitments')
    ];
  }

  getActivities() {
    return [
      new Activity(1, 1, 'Get at least x hours of sleep'),
      new Activity(2, 1, 'Worked out'),
      new Activity(3, 1, 'Went to the grocery store'),
      new Activity(4, 1, 'Cooked own meal/reheated leftovers'),
      new Activity(5, 1, 'Did not let the existential dread set in'),
      new Activity(6, 2, 'Did laundry'),
      new Activity(7, 2, 'Took a shower'),
      new Activity(8, 2, 'Brushed teeth'),
      new Activity(9, 2, 'Maintained facial/body hair'),
      new Activity(10, 2, 'Cleaned gunk under nails'),
      new Activity(11, 3, 'Paid utilities'),
      new Activity(12, 3, 'Made a deposit'),
      new Activity(13, 3, 'Managed online bank statement'),
      new Activity(14, 3, 'Paid some debt'),
      new Activity(15, 3, 'Opened a Swiss bank account'),
      new Activity(16, 4, 'Called a family member'),
      new Activity(17, 4, 'Group Activity'),
      new Activity(18, 4, 'Responsibly enjoyed intoxicants'),
      new Activity(19, 4, 'Hung out with someone in person'),
      new Activity(20, 4, 'Met a new dog'),
      new Activity(21, 5, 'Kept an appointment'),
      new Activity(22, 5, 'Remembered an important date'),
      new Activity(23, 5, 'Made it to work on time'),
      new Activity(24, 5, 'Cleaned a room'),
      new Activity(25, 5, 'Took out the trash'),
      new Activity(26, 5, 'Stared blankly at an organization chart')
    ];
  }
}
