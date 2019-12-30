import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog : any = {};
  allItems : any[];
  pages : any[];
  pageSize: 5;
  pager : any= {} ;
  

  constructor(private config : ConfigService ,private pagerService :PagerService) { }
  
  ngOnInit() {
    this.blog = this.getblog();
    this.allItems = this.blog.posts;
    this.setPage (1);
  }
   getblog(){
    return this.config.getconfig().blog;
   }

   setPage (pageNumber : number){
    
    this.pager=this.pagerService.getPager(this.allItems.length, pageNumber , this.pageSize);
    this.pages = this.allItems.slice( this.pager.startIndex , this.pager.endIndex + 1 );
     console.log(this.pager)
   }
 
}
