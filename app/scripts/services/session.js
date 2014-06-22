'use strict';

angular.module('meshstackApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
