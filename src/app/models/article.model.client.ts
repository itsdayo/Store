export class Article {
 _id?: string;
developerId: string;
articleName: string;
articleURL: string;


constructor(_id,developerId, articleName, articleURL){

	this.developerId = developerId;
	this.articleName = articleName;
	this.articleURL = articleURL;
} 
} 
