import {Component, OnInit} from '@angular/core';
import {NAVBAR_TEXT} from '../../../shared-data/Constants';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../../login-dialog/login-dialog.component';
import {SignupDialogComponent} from '../../signup-dialog/signup-dialog.component';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarText;
  user;
  isUserLoggedIn: boolean;

  constructor(private dialog: MatDialog,
              private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.setHiddenNavLinks();
    this.navbarText = NAVBAR_TEXT;
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '22%',
      height: '27.5rem',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isUserLoggedIn = true;
      }
    });
  }

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '26%',
      height: '39rem',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

  setHiddenNavLinks(): void {
    if (localStorage.getItem('user')) {
      this.isUserLoggedIn = true;
    }
  }

  signOut(): void {
    this.afAuth.signOut();
    this.isUserLoggedIn = false;
  }
}
