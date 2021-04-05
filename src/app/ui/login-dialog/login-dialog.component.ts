import {Component, OnInit} from '@angular/core';
import {AUTH_LOGIN_FORM_TEXT} from '../../shared-data/Constants';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  loginText;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) {
  }

  ngOnInit(): void {
    this.loginText = AUTH_LOGIN_FORM_TEXT;
  }
}
