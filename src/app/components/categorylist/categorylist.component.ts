import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';
import { Activity } from '../../models/Activity';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  providers: [CategoryService]
})
export class CategoryListComponent {
  selectedCategory:Category = new Category(1, 'Health and Wellness');
  categories: Category[];
  activities: Activity[];

  constructor(private _categoryservice: CategoryService) {
    this.categories = this._categoryservice.getCategories();
   }

  onSelect(catid) {
    this.activities = this._categoryservice.getActivities().filter((item)=> item.catid == catid);
  }
}
