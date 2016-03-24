'use strict';

class HomeController {
  constructor(AnimalFactory) {
    this.name = 'Home';
    let animals = AnimalFactory.query(function() {
      console.log(animals);
    });
  }
}

export default HomeController;
