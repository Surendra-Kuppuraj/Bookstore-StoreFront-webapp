import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Router } from '@angular/router'
import { LoginService } from '../../services/login.service';
import { BookListService} from '../../services/book-list.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RemoveBookService} from '../../services/remove-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public selectedBook : Book;
	public checked: boolean;
	public bookList: Book[];
	public allChecked: boolean;
	public removeBookList: Book[] = new Array();

  constructor(public dialog:MatDialog, private router: Router, private bookListService: BookListService, private removeBookService: RemoveBookService) { }

  onSelect(book: Book){
     this.selectedBook=book;
     this.router.navigate(['/viewBook', this.selectedBook.id]);
  }

  openDialog(book:Book){
     let dialogRef =  this.dialog.open(DialogResultExampleDialog);
     dialogRef.afterClosed().subscribe(
         result => {
             console.log(result);
             if(result == "yes"){
               this.removeBookService.removeBook(book.id).subscribe(
                 res => {
                     console.log(res);
                      this.getBookList();
                 },
                 error => {
                   console.log(error);
                 }
                 );
             }
         },
         error => {
               console.log(error);
         }
       );
  }

  updateRemoveBookList(checked:boolean, book:Book){
    if(checked){
      this.removeBookList.push(book);
    }else {
      this.removeBookList.splice(this.removeBookList.indexOf(book), 1);
    }
  }

  updateSelected(checked: boolean){
    if(checked){
      this.allChecked = true;
      this.removeBookList=this.bookList.slice();
    }else {
      this.allChecked = false;
      this.removeBookList=[];
    }

  }

  removeSelectedBooks(){
     let dialogRef =  this.dialog.open(DialogResultExampleDialog);
     dialogRef.afterClosed().subscribe(
         result => {
             console.log(result);
             if(result == "yes"){
               for(let book of this.removeBookList){
                 this.removeBookService.removeBook(book.id).subscribe(
                 res => {
                     console.log(res);
                 },
                 error => {
                   console.log(error);
                 }
                 );
               }
               this.getBookList();
             }
         },
         error => {
               console.log(error);
         }
       );
  }
  getBookList(){
    this.bookListService.getBookList().subscribe(
      res => {
        console.log(res.json());
        this.bookList=res.json();
      }, 
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  	this.getBookList();
  }

}


@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
}