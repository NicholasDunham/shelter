'use strict';

class HomeController {
  constructor(AnimalFactory, ClientFactory) {
    const vm = this;
    console.log(vm);
    AnimalFactory.query(function(animalsQry) {
      vm.animals = animalsQry;
      console.log(vm.animals);
    });
    ClientFactory.query(function(clientsQry) {
      vm.clients = clientsQry;
      console.log(vm.clients);
    });
    vm.name = 'Home';
  }
}

export default HomeController;
