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
import { MatIconModule } from '@angular/material/icon';
import { AppCrudOperationComponent } from './app-crud-operation/app-crud-operation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './upload/upload.component';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AppCrudOperationComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
