class Media {
  // TODO: Media is the shared class - all other classes have these properties
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    //  To get the title
    return this._title;
  }
  get isCheckedOut() {
    // To check if it is checked ouy
    return this._isCheckedOut;
  }
  get ratings() {
    // To get the raiting
    return this._ratings;
  }
    toggleCheckOutStatus() {
    // If this._isCheckedOut is true, "!" will make it false. If it is false, "!" will make it true
        this._isCheckedOut = !this._isCheckedOut; 
                           }
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }
  getAverageRating() {
    // based on the inputs in the array, write logic that returns the avarage rating
  }
  addRating(rating) {
    // Add the rating into the raiting array
  }
}

class Books { // something is missing

}

class Movies { // something is missing

}

class CD { // something is missing

}

/*
All of the methods should be functional, therefore, you need to test them as you had tested the second task.
Add values, console log the avarage, change the checkout... etc.
*/