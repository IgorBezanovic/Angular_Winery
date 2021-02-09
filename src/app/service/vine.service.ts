import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WineSearchResult } from '../vine/model/vinaSearchResult';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Wine } from '../vine/model/vino';

const baseUrl = "http://localhost:3000/api/wines";

@Injectable({
  providedIn: 'root'
})
export class VineService {

  constructor(private http :HttpClient) { }

  getAll(params? :any) :Observable<WineSearchResult>{
    let queryParams = {};
    if(params){
      queryParams = {params : new HttpParams()
        .set('sort', params.sort || "")
        .set('sortDirection', params.sortDirection || "")
        .set('page', params.page && params.page.toString() || "")
        .set('pageSize', params.pageSize && params.pageSize.toString() || "")
        .set('filter', params.filter && JSON.stringify(params.filter) || "")
      }
    }

    return this.http.get(baseUrl, queryParams).pipe(map( 
      response => { return new WineSearchResult(response); }
    ));
  }

  get(id :number) :Observable<Wine>{
    return this.http.get(baseUrl + "/" + id).pipe(map(
      response => { return new Wine(response); }
    ));
  }

  add(newWine :Wine) :Observable<Wine>{
    return this.http.post(baseUrl, newWine).pipe(map(
      response => { return new Wine(response); }
    ));
  }

  remove(id :number) :Observable<Wine>{
    return this.http.delete(baseUrl + "/" + id).pipe(map(
      response => { return new Wine(response); }
    ));
  }
  
  update(editedWine :Wine) :Observable<Wine>{
    return this.http.put(baseUrl + "/" + editedWine._id, editedWine).pipe(map(
      response => { return new Wine(response); }
    ));
  }
}
