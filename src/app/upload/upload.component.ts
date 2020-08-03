import { Component, OnInit, Inject } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { map, filter, switchMap, take } from 'rxjs/operators';
import * as firebase from 'firebase';
import { combineLatest, Observable } from 'rxjs';

import { CrudTestService } from '../services/crud-test.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  uploads: any[];
  allPercentage: Observable<any>;
  files: Observable<any>;

  constructor(
    public afs: AngularFirestore,
    public storage: AngularFireStorage,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.files = this.afs.collection(`Employees`).valueChanges();
  }

  importImages(event) {
    // reset the array
    this.uploads = [];
    const filelist = event.target.files;
    const allPercentage: Observable<number>[] = [];

    for (const file of filelist) {
      const path = `Employees/${file.name}`;
      const ref = this.storage.ref(path);
      const task = this.storage.upload(path, file);
      const _percentage$ = task.percentageChanges();
      allPercentage.push(_percentage$);

      // create composed objects with different information. ADAPT THIS ACCORDING to YOUR NEED
      const uploadTrack = {
        fileName: file.name,
        percentage: _percentage$,
      };

      // push each upload into the array
      this.uploads.push(uploadTrack);

      // for every upload do whatever you want in firestore with the uploaded file
      const _t = task.then((f) => {
        return f.ref.getDownloadURL().then((url) => {
          return this.afs.collection('Employees').add({
            name: f.metadata.name,
            url: url,
          });
        });
      });
    }

    this.allPercentage = combineLatest(allPercentage).pipe(
      map((percentages) => {
        let result = 0;
        for (const percentage of percentages) {
          let per: number;
          per = percentage;
          result = result + per;
        }
        return result / percentages.length;
      }),
      tap(console.log)
    );
  }

  // logout(): void {
  //   this.router.navigate(['login']);
  // }

}
