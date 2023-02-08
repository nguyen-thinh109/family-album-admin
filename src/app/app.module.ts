import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumUpdateComponent } from './components/album-update/album-update.component';
import { PhoneUpdateComponent } from './components/phone-update/phone-update.component';
import { FunctionBoardComponent } from './components/function-board/function-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponentComponent } from './components/shared/dialog-component/dialog-component.component';
import { ToggleSwitchComponent } from './components/shared/toggle-switch/toggle-switch.component';
import {
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ExistedPhoneItemComponent } from './components/shared/existed-phone-item/existed-phone-item.component';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DialogModule } from '@angular/cdk/dialog';
import { EditItemDialogComponent } from './components/shared/edit-item-dialog/edit-item-dialog.component';
import { ExistedPhotoCardComponent } from './components/shared/existed-photo-card/existed-photo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumUpdateComponent,
    PhoneUpdateComponent,
    FunctionBoardComponent,
    DialogComponentComponent,
    ToggleSwitchComponent,
    ExistedPhoneItemComponent,
    EditItemDialogComponent,
    ExistedPhotoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ScrollingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponentComponent]
})
export class AppModule {}
