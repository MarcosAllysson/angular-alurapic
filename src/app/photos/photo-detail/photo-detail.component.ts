import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/Iphoto';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  // photo$: Observable<Photo>;
  photo: Photo;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _photoService: PhotoService
  ) { }

  ngOnInit() {
    const photoId = this._activatedRoute.snapshot.params.photoId;
    this._photoService
      .findCharacterById(photoId)
      .subscribe(
        (character) => {
          if (character) {
            this.photo = character[0];
          }
        },
        () => alert("Character not found!")
      );
  }
}
