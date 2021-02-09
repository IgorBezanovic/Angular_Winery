import { Component, OnInit } from '@angular/core';
import { VineService } from '../service/vine.service';
import { WineSearchResult } from './model/vinaSearchResult';
import { Wine } from './model/vino';

@Component({
  selector: 'app-vine',
  templateUrl: './vine.component.html',
  styleUrls: ['./vine.component.css']
})
export class VineComponent implements OnInit {
  wineList :Wine[] = [];
	count :number = 0;

  params = {
		sort: "",
		sortDirection: "",
		page: 1,
		pageSize: 5,
		filter: {
			name: ""
		}
	}
  constructor( private service: VineService) { }

  ngOnInit(): void {
    this.refreshWineList();
  }
  onDelete(id :number) :void{
    console.log('Deleting wine ', id);
    this.service.remove(id).subscribe(
      wine => { wine._id }
    );
    this.refreshWineList();
  }

  changePage(newPage :number){
		this.params.page = newPage;
		this.refreshWineList();
	}

  refreshWineList(){
		this.service.getAll(this.params).subscribe(
			wineSearchRes => { 
				this.wineList = wineSearchRes.wines;
				this.count = wineSearchRes.count;
			}
		);
  }
  
  onChangeSortCriteria(criteria :string){
		if(this.params.sort == criteria){
			if(this.params.sortDirection == 'desc'){
				this.params.sortDirection = "";			
			}else{
				this.params.sortDirection = "desc";
			}
		}else{
			this.params.sort = criteria;
			this.params.sortDirection = "";
		}
		this.refreshWineList();
  }
  
  searchbyName(searchString :string){
		this.params.filter.name = searchString;
		this.refreshWineList();
	}
}
