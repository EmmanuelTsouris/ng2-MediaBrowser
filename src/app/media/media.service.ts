import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Media } from './media.model';
import 'rxjs/Rx';

@Injectable()
export class MediaService {
  mediaFiles: Observable<Media[]>
  
  // Web api Url
  private mediaUrl = 'media/list.json';  
  
  constructor (private http: Http) {}

  getMediaFiles(): Observable<Media[]> {  
    setTimeout(()=>{
      console.log("wait for a bit");
    }, 20000); // 2 seconds
    
      this.mediaFiles = this.http.get(this.mediaUrl)
                      .map(this.extractData)
                      .catch(this.handleError);
                      
      return this.mediaFiles;
  }
 
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
