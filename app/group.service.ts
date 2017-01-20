import {  Http, URLSearchParams, RequestOptions } from '@angular/http';
import  { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class GroupService{
    constructor(private http : Http){

    }
    get(mode,val){
        console.log([mode,val])
        let searchParams = new URLSearchParams();
        for(let key in val) {
        searchParams.set(key, val[key]);
    }
    let options = new RequestOptions({
        search: searchParams
    });
        return this.http.get('search', options).map(response => {return response.json().groups;});
    }
    add(mediaItem)
    {
        return this.http.post('mediaitems', mediaItem)
        .map(response => {});
    }

    delete(mediaItem){
         return this.http.delete(`mediaitems/${ mediaItem.id}`)
        .map(response => {});
    }
    
}