import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SignUpService } from '../services/auth/sign-up.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    public signUpService: SignUpService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log(this.firestore.collection('tests'));
  }
}
