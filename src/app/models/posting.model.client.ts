export class Post{
    _id?: string;
   uid: string;
   title: string;
   shipping: string | number;
   price: number;
   description: string;
   url1?: string;
   url2?:string;
   url3?:string;
   
   
   constructor(_id,uid, url, description, title, shipping, price){
   
       this.uid = uid;
       this.title = title;
       this.description;
       this.shipping = shipping;
       this.price = price;
    
   } 
   } 
   

  //  items = [
  //   {_id: "123", uid:"", url: "img.jpg", Title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:"59.60"},
  // {_id: "234", uid:"", url: "img.jpg", Title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:"59.60"},
  //    {_id: "345", url: "img.jpg", Title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:"59.60"},
  //   {_id: "456", url: "img.jpg", Title: "Braveman Men's Slim-Fit 2-Piece Suit", shipping:"Free Shipping", price:"59.60"}
  //   ];
