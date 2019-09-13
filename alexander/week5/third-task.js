const books = {
    _author: '',
    _title: '',
    _pages: 0,
    _isCheckedOut: false,
    _ratings: [],
    get author(){
        return this._author;
    },
    get title(){
        return this._title;
    },
    get pages(){
        return this._pages;
    },
    get isCheckedOut(){
        return this._isCheckedOut;
    },
    get ratings(){
        return this._ratings;
    },
    getAverageRating(){

    },
    toggleCheckOutStatus(){

    },
    addRating(){

    },   
}
const movies = {
    _director: '',
    _title: '',
    _runTime: 0,
    _isCheckedOut: false,
    _ratings: [],
    get director(){
        return this._director;
    },
    get title(){
        return this._title;
    },
    get runTime(){
        return this._runTime
    },
    get isCheckedOut(){
        return this._isCheckedOut
    },
    get ratings(){
        return this._ratings
    },
    getAverageRating(){

    },
    toggleCheckOutStatus(){

    },
    addRating(){

    },
}
const cd = {
    _artist: '',
    _title: '',
    _isCheckedOut: false,
    _ratings: [],
    _songs: [],
    get artist(){
        return this._artist;           
    },
    get title(){
        return this._title;
    },
    get isCheckedOut(){
        return this._isCheckedOut;
    },
    get ratings(){
        return this._ratings;
    },
    get songs(){
        return this._songs;
    },
    getAverageRating(){

    },
    toggleCheckOutStatus(){

    },
    addRating(){

    }
}
class SharedProps {
    constructor(title,isCheckedOut,ratings){
          this._title = title;
          this._isCheckedOut = isCheckedOut;
          this._ratings = ratings;        
    }
}
const props = new SharedProps("vlastelin",true,[1,2,3]);
Object.assign(books,props);
Object.assign(movies,props);
Object.assign(cd,props);
