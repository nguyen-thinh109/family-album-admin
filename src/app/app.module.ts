import { NgModule } from '@angular/core';
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
} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlbumUpdateComponent,
    PhoneUpdateComponent,
    FunctionBoardComponent,
    DialogComponentComponent,
    ToggleSwitchComponent,
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
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponentComponent]
})
export class AppModule {}
