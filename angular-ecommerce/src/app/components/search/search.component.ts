import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  doSearch(keyword: string){
    console.log(`search keyword ${keyword}`);
    //Route the data to our "search" route. It will be handled by the productListComponent
    this.router.navigateByUrl(`/search/${keyword}`);
  }

}
