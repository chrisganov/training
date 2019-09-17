// let price = 0; TODO: you don't need this
const menu = {
    _courses:{
       _appetizers:[],
       _mains:[],
       _deserts:[],   
       get appetizers(){
         return this._appetizers;
       },
       set appetizers(value){
         this._appetizers = value;
       },
       get mains(){
          return this._mains;
       },
       set mains(value){
          this._mains = value;
       },
       get deserts(){
          return this._deserts;
       },
       set deserts(value){
          this._deserts = value;
       },     
   },
   get courses(){
     return {
     appetizers: this._courses.appetizers,
     mains: this._courses.mains,
     deserts: this._courses.deserts
     }
   },
   addDish(courseName, dishName,dishPrice){
    const _dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(_dish);
   },
   getRandomDishFromCource(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
   //  const dish = dishes[randomIndex].name; TODO: Why the name?
   //  price += dishes[randomIndex].price; TODO: Why the price?
   //  return dish;
      
      // OR just return:

      return dishes[randomIndex];
   },
   generateRandomMeal(){
    const main = this.getRandomDishFromCource("mains");
    const apetizer = this.getRandomDishFromCource("appetizers");
    const desert = this.getRandomDishFromCource("deserts");
   // TODO  The easiest way to get the price:
      const totalPrice = apetizer.price + main.price + desert.price;
      // TODO: You were returning objects - these objects have a name and a price, therefore you should have written the following string:
      // return `We will start with ${main} then we will get apetizers ${apetizer}, the we will finish with deserts ${desert} the price is ${price}$`;
      return `We will start with ${main.name} then we will get apetizers ${apetizer.name}, the we will finish with deserts ${desert.name} the price is ${totalPrice}$`;

      },
   };
  
 menu.addDish("mains", "salata",150);
 menu.addDish("mains", "bob",100);
 menu.addDish("mains", "zelen fasul",50);
 menu.addDish("appetizers", "soup",200);
 menu.addDish("appetizers", "guve4",300);
 menu.addDish("appetizers", "soup",400);
 menu.addDish("deserts", "cake",1000);
 menu.addDish("deserts", "pancake",2000);
 menu.addDish("deserts", "grozde",3000);
const final = menu.generateRandomMeal();
console.log(final);
