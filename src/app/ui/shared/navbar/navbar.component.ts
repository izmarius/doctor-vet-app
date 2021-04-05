import {Component, OnInit} from '@angular/core';
import {NAVBAR_TEXT} from '../../../shared-data/Constants';
import {MatDialog} from "@angular/material/dialog";
import {UserAnimalDataDialogComponent} from "../../user-animal-data-dialog/user-animal-data-dialog.component";
import {LoginDialogComponent} from "../../login-dialog/login-dialog.component";

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
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '20%',
      height: '28.625rem',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

}
