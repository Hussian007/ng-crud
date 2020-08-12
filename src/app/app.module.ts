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
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';


//header
// import { MatButtonModule } from  '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarMainContainerComponent } from './toolbar-main-container/toolbar-main-container.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ContactComponent } from './contact/contact.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    AppCrudOperationComponent,
    UploadComponent,
    ToolbarMainContainerComponent,
    ContactComponent,
    CreatecontactComponent,
    HomeComponent,
    FooterComponent
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
    NgbModule,
    //FontAwesomeModule,
    MatDividerModule,
    MatSliderModule,
    //toolbar
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
