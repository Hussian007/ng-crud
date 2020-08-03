import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-app-crud-operation',
  templateUrl: './app-crud-operation.component.html',
  styleUrls: ['./app-crud-operation.component.scss'],
})
export class AppCrudOperationComponent implements OnInit {
  public items = [];
  public isToUpdate: boolean;
  public itemToUpdate: any;
  public createField: boolean;
  public name: string;
  public imagePath: string;
  public age: number;
  public currentFilePath: any;

  constructor(
    private database: AngularFirestore,
    private fireStorage: AngularFireStorage,
    private storage:AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.isToUpdate = false;
    this.createField = false;
    this.database
      .collection(`Employees`)
      .snapshotChanges()
      .subscribe((result) => {
        this.items = [];
        result.forEach((a) => {
          const item: any = a.payload.doc.data();
          item.id = a.payload.doc.id;
          this.items.push(item);
        });
      });
  }

  add() {
    this.createField = true;
  }

  create() {
    this.database.collection(`Employees`).add({
      name: this.name,
      age: this.age,
      imagePath: this.imagePath,
    });
    this.name = '';
    this.age = undefined;
  }

  update(item) {
    this.itemToUpdate = item;
    this.isToUpdate = true;
  }
  item;

  submit() {
    this.database.doc(`Employees/${this.itemToUpdate.id}`).update({
      name: this.itemToUpdate.name,
      age: this.itemToUpdate.age,
    });
  }

  delete(item) {
    this.database.doc(`Employees/${item.id}`).delete();
  }

  upload(event) {
    this.currentFilePath = event.target.files[0];
    // console.log(event);
  }

  uploadImage() {
    

        var filePath = 'Employees' + Math.random() + this.currentFilePath.name;

     const fileRef = this.storage.ref(filePath)
    this.fireStorage.upload(filePath,
      this.currentFilePath
    ).snapshotChanges().pipe(
             
             finalize(()=>{
              fileRef.getDownloadURL().subscribe((url)=>{

              this.imagePath=url;

              console.log(this.imagePath)

              })
             })
           ).subscribe(result => {
                console.log(result);
              })
    

  }
}