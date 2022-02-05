import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchText: string = "";
  @Output() searchItem = new EventEmitter<string>();
 filterFunc () {
    this.searchItem.emit(this.searchText);
}
  constructor() { }

  ngOnInit(): void {
  }

}
