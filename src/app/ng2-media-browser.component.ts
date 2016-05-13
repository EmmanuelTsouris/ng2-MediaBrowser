import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { WatchComponent } from './+watch';
import { AboutComponent } from './+about';
import { GridComponent } from './+grid';
import { MediaService } from './media/media.service';

@Component({
  moduleId: module.id,
  selector: 'ng2-media-browser-app',
  templateUrl: 'ng2-media-browser.component.html',
  styleUrls: ['ng2-media-browser.component.css'],
  directives: [ROUTER_DIRECTIVES, GridComponent],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MediaService]
})
@Routes([
  {path: '/', component: GridComponent},
  {path: '/watch', component: WatchComponent},
  {path: '/about', component: AboutComponent}
])
export class Ng2MediaBrowserAppComponent implements OnInit {
  title = 'Media Browser';
  
  constructor(private router: Router) {}

  ngOnInit() {
  }
}
