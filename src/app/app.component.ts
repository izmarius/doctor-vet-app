import {Component, OnInit} from '@angular/core';
import {AngularFireFunctions} from '@angular/fire/functions';
import {AuthStateChangeService} from './services/auth/auth-state-change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doctor-vet-app';

  constructor(private functions: AngularFireFunctions,
              private authStateChange: AuthStateChangeService) {
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
