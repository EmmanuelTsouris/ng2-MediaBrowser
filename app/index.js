System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+watch/watch.component.js",["@angular/core","@angular/router","../media/media.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("../media/media.service"),i=function(){function a(a,b,c){this._router=a,this._mediaService=b,this._routeSegment=c,this.medias=[]}return a.prototype.ngOnInit=function(){var a=this,b=+this._routeSegment.getParam("id");this._mediaService.getMediaFiles().subscribe(function(c){a.medias=c,a.media=a.medias.find(function(a){return a.id===b})})},a.prototype.gotoWatch=function(a){var b=["/watch",{id:a.id}];this._router.navigate(b)},a=d([f.Component({moduleId:c.id,selector:"app-watch",templateUrl:"watch.component.html",styleUrls:["watch.component.css"]}),e("design:paramtypes",[g.Router,h.MediaService,g.RouteSegment])],a)}();return b.WatchComponent=i,c.exports}),System.registerDynamic("app/+watch/index.js",["./watch.component"],!0,function(a,b,c){"use strict";var d=a("./watch.component");return b.WatchComponent=d.WatchComponent,c.exports}),System.registerDynamic("app/+about/about.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-about",templateUrl:"about.component.html",styleUrls:["about.component.css"]}),e("design:paramtypes",[])],a)}();return b.AboutComponent=g,c.exports}),System.registerDynamic("app/+about/index.js",["./about.component"],!0,function(a,b,c){"use strict";var d=a("./about.component");return b.AboutComponent=d.AboutComponent,c.exports}),System.registerDynamic("app/+grid/grid.component.js",["@angular/core","@angular/router","../media/media.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("../media/media.service"),i=function(){function a(a,b){this._router=a,this._mediaService=b,this.mediaFiles=[]}return a.prototype.ngOnInit=function(){var a=this;this._mediaService.getMediaFiles().subscribe(function(b){a.mediaFiles=b,a.rows=Array.from(Array(Math.ceil(a.mediaFiles.length/4)).keys()),console.log("rows: ",a.rows)})},a.prototype.gotoWatch=function(a){var b=["/watch",{id:a.id}];this._router.navigate(b)},a=d([f.Component({moduleId:c.id,selector:"app-grid",templateUrl:"grid.component.html",styleUrls:["grid.component.css"]}),e("design:paramtypes",[g.Router,h.MediaService])],a)}();return b.GridComponent=i,c.exports}),System.registerDynamic("app/+grid/index.js",["./grid.component"],!0,function(a,b,c){"use strict";var d=a("./grid.component");return b.GridComponent=d.GridComponent,c.exports}),System.registerDynamic("app/media/media.service.js",["@angular/core","@angular/http","rxjs/Observable","rxjs/Rx"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/http"),h=a("rxjs/Observable");a("rxjs/Rx");var i=function(){function a(a){this.http=a,this.mediaUrl="media/list.json"}return a.prototype.getMediaFiles=function(){return setTimeout(function(){console.log("wait for a bit")},2e4),this.mediaFiles=this.http.get(this.mediaUrl).map(this.extractData)["catch"](this.handleError),this.mediaFiles},a.prototype.extractData=function(a){if(a.status<200||a.status>=300)throw new Error("Bad response status: "+a.status);var b=a.json();return b||{}},a.prototype.handleError=function(a){var b=a.message||"Server error";return console.error(b),h.Observable["throw"](b)},a=d([f.Injectable(),e("design:paramtypes",[g.Http])],a)}();return b.MediaService=i,c.exports}),System.registerDynamic("app/ng2-media-browser.component.js",["@angular/core","@angular/router","@angular/http","./+watch","./+about","./+grid","./media/media.service"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("@angular/router"),h=a("@angular/http"),i=a("./+watch"),j=a("./+about"),k=a("./+grid"),l=a("./media/media.service"),m=function(){function a(a){this.router=a,this.title="Media Browser"}return a.prototype.ngOnInit=function(){this.router.navigate(["/"])},a=d([f.Component({moduleId:c.id,selector:"ng2-media-browser-app",templateUrl:"ng2-media-browser.component.html",styleUrls:["ng2-media-browser.component.css"],directives:[g.ROUTER_DIRECTIVES,k.GridComponent],providers:[g.ROUTER_PROVIDERS,h.HTTP_PROVIDERS,l.MediaService]}),g.Routes([{path:"/",component:k.GridComponent},{path:"/watch",component:i.WatchComponent},{path:"/about",component:j.AboutComponent}]),e("design:paramtypes",[g.Router])],a)}();return b.Ng2MediaBrowserAppComponent=m,c.exports}),System.registerDynamic("app/index.js",["./environment","./ng2-media-browser.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./ng2-media-browser.component");return b.Ng2MediaBrowserAppComponent=e.Ng2MediaBrowserAppComponent,c.exports});