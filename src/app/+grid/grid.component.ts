import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from '../media/media.service';
import { Media } from '../media/media.model';
@Component({
  moduleId: module.id,
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css']
})
export class GridComponent implements OnInit {
  mediaFiles: Media[] = [];
  rows: number[];
  
  constructor(
    private _router: Router,
    private _mediaService: MediaService) {
  }

  ngOnInit() {
    this._mediaService.getMediaFiles().subscribe(mediaFiles => {
      this.mediaFiles = mediaFiles;
      this.rows = Array.from(Array(Math.ceil(this.mediaFiles.length / 4)).keys())
      console.log("rows: ",this.rows);
    });
  }

  gotoWatch(media: Media) {
    let link = ['/watch', { id: media.id }];
    this._router.navigate(link);
  }

}
