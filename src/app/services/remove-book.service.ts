import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Book} from '../models/book';
import {AppConst} from '../appConstant/AppConstant';

@Injectable()
export class RemoveBookService {

  constructor(private http:Http) { }

  removeBook(bookId: number) {
  	let url = AppConst.serverPath+"/book/"+bookId;
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.delete(url, {headers: headers});
  }

}
