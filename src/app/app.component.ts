import {Component, OnInit} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doctor-vet-app';

  constructor(private functions: AngularFireFunctions) {
  }

  ngOnInit(): void {
    // const callable = this.functions.httpsCallable('addAdminRole');
    // const obs = callable({email: 'izmarius.im@gmail.com'});
    //
    // obs.subscribe((res) => {
    //   console.log(res);
    // });
  }
}
