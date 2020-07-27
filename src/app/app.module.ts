
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';

import { LoginService } from './services/login.service';
import { AddBookService } from './services/add-book.service';
import { UploadImageService } from './services/upload-image.service';
import { BookListService } from './services/book-list.service';
import { GetBookService } from './services/get-book.service';
import { EditBookService } from './services/edit-book.service';
import { RemoveBookService } from './services/remove-book.service';



import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent, DialogResultExampleDialog } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

import {
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule
    } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { EditBookComponent } from './components/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    DialogResultExampleDialog,
    ViewBookComponent,
    EditBookComponent
  ],
  imports: [BrowserModule, 
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            HttpClientModule,
            routing, 
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatDatepickerModule,
            MatDialogModule,
            MatDividerModule,
            MatExpansionModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatNativeDateModule,
            MatPaginatorModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatRippleModule,
            MatSelectModule,
            MatSidenavModule,
            MatSliderModule,
            MatSlideToggleModule,
            MatSnackBarModule,
            MatSortModule,
            MatStepperModule,
            MatTableModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,
  ],
  exports: [],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    BookListService,
    GetBookService,
    EditBookService,
    RemoveBookService
    ],
  bootstrap: [AppComponent, DialogResultExampleDialog]
})
export class AppModule { }