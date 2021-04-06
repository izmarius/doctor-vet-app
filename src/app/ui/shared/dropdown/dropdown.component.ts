import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public inputText: string;
  public searchResult = [];
  public isSearchResult: boolean;
  @Output() valueEmitter = new EventEmitter();
  @Input() placeholder: string;
  @Input() seriesList: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

  closeDropdown(): void {
    setTimeout(() => {
      this.isSearchResult = false;
      this.searchResult = [];
    }, 100);
  }

  fetchSeries(): void {
    if (!this.inputText) {
      this.isSearchResult = false;
      this.searchResult = [];
      return;
    }
    this.searchResult = this.seriesList.filter((series) => {
      return series.toLowerCase().startsWith(this.inputText.toLowerCase());
    });
    if (this.searchResult && this.searchResult.length > 0) {
      this.isSearchResult = true;
    }
  }

  emitSelectedValue(value: string): void {
    this.inputText = value;
    this.valueEmitter.emit(value);
  }

  openDropdown(): void {
    this.isSearchResult = !this.isSearchResult;
    if (this.searchResult && this.searchResult.length > 0) {
      return;
    }
    this.searchResult = this.seriesList;
  }
}
