import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddBookService } from '../../services/add-book.service';
import { UploadImageService } from '../../services/upload-image.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
 
  public newBook: Book = new Book();
  public bookAdded: boolean;  

  constructor(public addBookService:AddBookService, public uploadImageService:UploadImageService, private router: Router) {
  }
  onSubmit() {
    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
       
        this.newBook = new Book();
        this.newBook.active=true;
        this.newBook.category="Management";
        this.newBook.language="english";
        this.newBook.format="paperback";
        this.bookAdded=true;
       },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.bookAdded=false;
    this.newBook.active=true;
    this.newBook.category="Management";
    this.newBook.language="english";
    this.newBook.format="paperback";
  }


}