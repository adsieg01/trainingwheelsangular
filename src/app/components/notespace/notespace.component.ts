import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Notespace } from "../../models/Notespace";
import { NotespaceService } from "../../services/notespace.service";

@Component({
  selector: 'app-notespace',
  templateUrl: './notespace.component.html',
  styleUrls: ['./notespace.component.css']
})
export class NotespaceComponent implements OnInit {
  notespace: Notespace;

  private _editNotespaceForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _notespaceService: NotespaceService,
              private _ar: ActivatedRoute,
              private _router: Router) { 
                this._ar.paramMap.subscribe(p => {
                  this._notespaceService.getNotespace().subscribe((singleNotespace: Notespace) => {
                    this.notespace = singleNotespace;
                    this.createForm();
                  });
                });
              }

  ngOnInit() {
  }

  createForm() {
    this._editNotespaceForm = this._form.group({
      Id: new FormControl(this.notespace.Id),
      Note: new FormControl(this.notespace.Note)
    });
  }

  onSubmit(form) {
    const updateNotespace: Notespace = {
      Id: form.value.Id,
      Note: form.value.Note
    };
    this._notespaceService.updateNotespace(updateNotespace).subscribe();    
  }

}
