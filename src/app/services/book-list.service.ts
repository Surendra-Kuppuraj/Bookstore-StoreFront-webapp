import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Book} from '../models/book';
import {AppConst} from '../appConstant/AppConstant';


@Injectable()
export class BookListService {

  constructor(private http:Http) { }


  getBookList() {
  	let url = AppConst.serverPath+"/book";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url,{headers: headers});
  }

}
