import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article.model.client'
import {MainService} from '../../services/main.service.client'
import { NgForm } from '@angular/forms' 
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

uid: string;
articles:any;
article:Article;


  constructor(private mainService: MainService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() { 
    this.activatedRoute.params.subscribe(
      params => {
        this.uid = params["uid"]
      })
  	 this.mainService.findAllArticles(this.uid).subscribe((articles:Article[])=>{
   this.articles=articles
  	} 
  )}
}

