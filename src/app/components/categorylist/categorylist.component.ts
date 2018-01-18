import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';
import { Activity } from '../../models/Activity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  providers: [CategoryService]
})
export class CategoryListComponent {
  selectedCategory:Category = new Category(0, '--Select--');
  selectedActivity={};
  categories: Category[];
  activities: Activity[];
  showWeeklyArchive = false;
  

  constructor(private _categoryservice: CategoryService) {
    this.categories = this._categoryservice.getCategories();
   }
  

   onSelect(id) {
    this._categoryservice.getActivities().subscribe(activities => {
      this.activities = [];
      Object.keys(activities).forEach((eachActivity) => {
        if (activities[eachActivity].Category == id) {
          this.activities.push(activities[eachActivity])
        }
      })
      console.log(this.activities)
    });
  }
 
  onActivitySelect(ActivityId) {
    this._categoryservice.getActivities().subscribe(activities => {
      this.activities = [];
      Object.keys(activities).forEach((eachActivity) => {
        if (activities[eachActivity].ActivityId == ActivityId) {
          this.activities.push(activities[eachActivity])
        }
      })
      console.log(this.activities)
    });
  }
 
  onSubmit() {
    this.selectedActivity = this.activities
    console.log(this.selectedActivity)
      
  }
}
