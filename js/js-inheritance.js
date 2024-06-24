class Media {
    constructor(title) {
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
  
    get title() {
      return this._title;
    }
    get ratings() {
      return this._ratings;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(bool) {
      if(typeof bool === 'boolean') {
        this._isCheckedOut = bool;
      }
    }
    getAverageRating() {
     return  this._ratings.reduce((acc, curr) => acc + curr)/this._ratings.length;
    }
    toggleCheckedOutStatus() {
      this._isCheckOut ? this._isCheckOut = false : this._isCheckedOut = true;
    }
    addRating(num) {
      if(typeof num === 'number' && num <=5 && num >= 0) {
        this._ratings.push(num);
      }
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
    set author(author) {
      if(typeof author === 'string') {
        this._author = author;
      }
    }
    set pages(num) {
      if(typeof num === 'number') {
        this._pages = num;
      }
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  historyOfEverything.toggleCheckedOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4); historyOfEverything.addRating(5); historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckedOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1); speed.addRating(1); speed.addRating(5);
  console.log(speed.getAverageRating());

  class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(num) {
      if(typeof num === 'number' && num >= 0) {
        this._numberOfStudents = num;
      } else {
        console.log('Invalid Input: numberOfStudents must be set to a number.');
      }
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
      return substituteTeachers[Math.floor(Math.random()*(substituteTeachers.length - 1))];
    }
  }
  
  class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle', numberOfStudents);
    }
  }
  
  class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);