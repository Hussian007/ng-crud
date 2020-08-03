import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'




import { AppCrudOperationComponent } from './app-crud-operation/app-crud-operation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './upload/upload.component';

const config = {
  apiKey: "AIzaSyD9PL1JghaUxT36uFIRHnfXygZmfqd-Xl4",
    authDomain: "project-sms-for-sms.firebaseapp.com",
    databaseURL: "https://project-sms-for-sms.firebaseio.com",
    projectId: "project-sms-for-sms",
    storageBucket: "project-sms-for-sms.appspot.com",
    messagingSenderId: "262893239167",
    appId: "1:262893239167:web:74d265a717018a301c384a",
    measurementId: "G-6VYPYXR14S"
};

@NgModule({
  declarations: [
    AppComponent,
    AppCrudOperationComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
