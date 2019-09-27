class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
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
    this._ratings.push(rating)
  }
}
class Book extends Media{ 
constructor(title,author,pages){
super(title);
this._author = author;
this._pages = pages;
}
get authors(){
  return this._author;
}
get pages(){
  return this._pages;
}
}
class Movie extends Media{ 
  constructor(title,director,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
    }
    get directors(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
}

class CD extends Media{ 
  constructor(title,artist,song){
    super(title);
    this._artist = artist;
    this._song = song;
    }
    get artist(){
      return this._artist;
    }
    get song(){
      return this._song;
    }
}

const hybridTheory = new CD('Hybrid Theory', 'Linkin Park', 'Papercut')
console.log(hybridTheory.isCheckedOut)
hybridTheory.toggleCheckOutStatus();
console.log(hybridTheory.isCheckedOut);
console.log(hybridTheory.title)
console.log(hybridTheory.artist)
console.log(hybridTheory.song);
hybridTheory.addRating(2);
hybridTheory.addRating(3);
hybridTheory.addRating(4);
console.log(hybridTheory.getAverageRating())
