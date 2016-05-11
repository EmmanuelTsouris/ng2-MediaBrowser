import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment } from '@angular/router';
import { Media } from '../media/media.model';
import { MediaService } from '../media/media.service';

@Component({
  moduleId: module.id,
  selector: 'app-watch',
  templateUrl: 'watch.component.html',
  styleUrls: ['watch.component.css']
})
export class WatchComponent implements OnInit {
  media: Media;
  medias: Media[] = [];
  errorMessage: string;
  
  constructor(
    private _router: Router,
    private _mediaService: MediaService,
    private _routeSegment: RouteSegment) {
  }

  ngOnInit() {
    let id = +this._routeSegment.getParam('id');
      
    this._mediaService.getMediaFiles()
      .subscribe(medias => {
          this.medias = medias;
          this.media = this.medias.find(media => media.id === id);
        });
  }
  
  gotoWatch(media: Media) {
    let link = ['/watch', { id: media.id }];
    this._router.navigate(link);
  }

}
