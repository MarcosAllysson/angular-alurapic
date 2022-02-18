import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/Iphoto';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = "";
  @Input() hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    // this.userName = this.activatedRoute.snapshot.params.userName;

    // data.photos was declared on app.routing
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  loadMoreButton() {
    this.photoService.listPhotosFromApiPaginated(this.userName, this.currentPage + 1)
      .subscribe(photos => {
        this.filter = "";
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }

}
