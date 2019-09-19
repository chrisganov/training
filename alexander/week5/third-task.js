class Media {
  // TODO: Media is the shared class - all other classes have these properties
  constructor(title,ratings) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = ratings;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut; 
                           }
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }
  getAverageRating() {
    let averageRating = 0;
    for(let a = 0; a < this._ratings.length; a++){
      averageRating += this._ratings[a];
    }
  return averageRating /= this._ratings.length;
  }
  addRating(rating) {
    this._ratings = rating;
  }
}

class Books extends Media{ 
constructor(title,ratings,author,pages){
super(title,ratings);
this._author = author;
this._pages = pages;
}
get title(){
  return title;
}
// get isCheckedOut(){
//   return super(this.isCheckedOut)
// }
get ratings(){
  return this.ratings;
}
get authors(){
  return this._author;
}
get pages(){
  return this._pages;
}
getAverageRating(){
  super.getAverageRating()
}
toggleCheckOutStatus(){
  super.toggleCheckOutStatus()
}
addRating(){
  super.addRating()
}
}

class Movies extends Media{ 
  constructor(title,ratings,director,runTime){
    super(title,ratings);
    this._director = director;
    this._runTime = runTime;
    }
    get title(){
      return this.title;
    }
    // get isCheckedOut(){
    //   return super(this._isCheckedOut)
    // }
    get ratings(){
      return this.ratings;
    }
    get directors(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
    getAverageRating(){
      super.getAverageRating()
    }
    toggleCheckOutStatus(){
      super.toggleCheckOutStatus()
    }
    addRating(){
      super.addRating()
    }
}

class CD extends Media{ 
  constructor(title,ratings,artist,songs){
    super(title,ratings);
    this._artist = artist;
    this._songs = songs;
    }
    get title(){
      return this.title;
    }
    // get isCheckedOut(){
    //   return 
    // }
    get ratings(){
      return this.ratings;
    }
    get artists(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
    getAverageRating(){
    return  super.getAverageRating(); 
    }
    toggleCheckOutStatus(){
     return super.toggleCheckOutStatus();
    }
    addRating(){
     return super.addRating();
    }
}
const cd = new CD("rings",[1,2,3],"pesho",["balls to the wall","smoke on the water","galena"]);
console.log(cd);
console.log(cd.getAverageRating());


