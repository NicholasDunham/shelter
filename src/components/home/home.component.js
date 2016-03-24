'use strict';

import template from './home.html';
import controller from './home.controller';

const homeComponent = {
  restrict: 'E',
  bindings: {
    animals: '@',
    clients: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default homeComponent;
