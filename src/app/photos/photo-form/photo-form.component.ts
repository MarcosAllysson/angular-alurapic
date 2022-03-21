import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IPhoto } from './IPhoto';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File;
  previewImage: string = "";
  photoForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): FormGroup {
    return this.photoForm = this._formBuilder.group({
      file: ['', Validators.required],
      description: ['',
        [
          Validators.required,
          Validators.maxLength(300)
        ]
      ],
      allowComments: [true]
    });
  }

  handleFile(file: File) {
    this.file = file;

    // converting to base64
    const reader = new FileReader();
    reader.onload = (event: any) => this.previewImage = event.target.result;
    reader.readAsDataURL(this.file);
  }

  upload() {
    const data: IPhoto = this.photoForm.getRawValue();
    this._photoService.upload(data);
    this.cleanForm();
  }

  cleanForm(): void {
    this.photoForm.reset();
    this.previewImage = "";
    this.file = null;
  }
}
