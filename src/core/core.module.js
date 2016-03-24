'use strict';

import angular from 'angular';
import ClientFactory from './client.factory';
import AnimalFactory from './animal.factory';

const Core = angular.module('app.core', [])

  .factory('AnimalFactory', AnimalFactory)
  .factory('ClientFactory', ClientFactory);

export default Core;
