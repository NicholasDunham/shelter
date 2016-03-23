'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular.module('shelter', [
  'uiRouter'
])
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true).hashPrefix('!');


})
