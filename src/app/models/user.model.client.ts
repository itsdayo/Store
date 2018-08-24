export class User {
 _id?: string;
username: string;
password: string;
email: string;
firstName: string;
lastName: string;

constructor(_id,username, password, email, firstName, lastName){

	this.username = username;
	this.password = password;
	this.email = email;
	this.firstName = firstName;
	this.lastName = lastName
	
} 
} 
