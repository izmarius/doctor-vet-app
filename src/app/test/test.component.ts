import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log(this.firestore.collection('tests'));
  }
}
