import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	@Output() onSearch :EventEmitter<string>;
	searchForm: FormGroup;
  
  constructor(private fb: FormBuilder) { 
		this.onSearch = new EventEmitter();

		this.searchForm = this.fb.group({
			'searchText': ''
		}); 
	}
  ngOnInit(): void {
  }

  search() :void{
    this.onSearch.emit(this.searchForm.value.searchText);
  }
}
