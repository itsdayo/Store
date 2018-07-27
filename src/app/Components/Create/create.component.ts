import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MainService} from '../../services/main.service.client';
import {Article} from '../../models/article.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {


uid: string;
articles: Article[];
name: string;
articleURL: string;


  constructor(private activatedRoute: ActivatedRoute, private mainService: MainService, private router: Router) { }
@ViewChild('f') articleForm: NgForm;
  ngOnInit() {

  this.activatedRoute.params.subscribe(params =>{
	this.uid = params['uid'];

 this.mainService.findAllArticles(this.uid).subscribe((articles:Article[])=>{
   this.articles=articles
 }) 
})
}

create(){
  this.name = this.articleForm.value.name;
  this.articleURL = this.articleForm.value.url;
  const newArticle: Article={
    developerId: this.uid, 
    articleName: this.name,
    articleURL: this.articleURL
  } 
  this.mainService.createArticle(this.uid, newArticle).subscribe(
    (res: Response) => {
      this.router.navigate(['/user/:uid/main']); 
    }
  )


}


  }


