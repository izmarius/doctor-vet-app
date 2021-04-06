import {Component, OnInit} from '@angular/core';
import {NAVBAR_TEXT} from '../../../shared-data/Constants';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../../login-dialog/login-dialog.component';
import {SignupDialogComponent} from '../../signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarText;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.navbarText = NAVBAR_TEXT;
    this.openSignupDialog();
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '25%',
      height: '28.625rem',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '26%',
      height: '37rem',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }
}
