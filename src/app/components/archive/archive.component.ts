import { Component, OnInit } from '@angular/core';
import { Archive } from '../../models/Archive';
import { CategoryService } from '../../services/category.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ArchiveService } from '../../services/archive.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archive: Archive[];
  columnNames = ['Category', 'Activity', 'DateTime'];
  dataSource: ArchiveDataSource | null;
  constructor(private _categoryService: CategoryService, private _archiveService: ArchiveService) { }

  ngOnInit() {
    this._archiveService.getArchives().subscribe((archive: Archive[]) => {
      this.archive = archive;
      this.dataSource = new ArchiveDataSource(archive);
    });
  }

  getCategory(categoryId) {
    if(categoryId == 1) return 'Health and Wellness';
    else if(categoryId == 2) return 'Hygiene';
    else if(categoryId == 3) return 'Finance';
    else if(categoryId == 4) return 'Social';
    else if(categoryId == 5) return 'Organization and Commitments';
    else return 'You done fucked up, A-aron';
  }

}

export class ArchiveDataSource extends DataSource<any> {
  constructor(private archiveData: Archive[]) {
    super();
  }

  connect(): Observable<Archive[]> {
    return Observable.of(this.archiveData);
  }

  disconnect() { }
}