import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumUpdateComponent } from './components/album-update/album-update.component';
import { PhoneUpdateComponent } from './components/phone-update/phone-update.component';
import { FunctionBoardComponent } from './components/function-board/function-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlbumUpdateComponent,
    PhoneUpdateComponent,
    FunctionBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
