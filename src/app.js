'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import Core from './core/core.module';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  ngResource,
  Core.name,
  Components.name
])

  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider
      .html5Mode({ enabled: true, requireBase: false })
      .hashPrefix('!');
  })

  .component('app', AppComponent);
