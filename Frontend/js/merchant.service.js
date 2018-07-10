myApp
  .factory('SignUp', function ($http, constants ) {
    // body...
    return {
      register: function (profileData) {
        // body...
        return $http({
          method: 'POST',
          url: constants.API_URL  + 'register',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: $.param(profileData)
        });
      },

    }
  })

  .factory('Login', function ($http, constants ) {
    return {

      auth: function (loginData) {
        // body...
        return $http({
          method: 'POST',
          url: constants.API_URL + 'auth',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: $.param(loginData)
        });
      }

    }
  })

  .factory('Product', function ($http, constants) {
    return {

      get: function () {
        // body...
        return $http.get(constants.API_URL + 'product');
      },
      
      save: function (productData) {
        // body...
        return $http({
          method: 'POST',
          url: constants.API_URL + 'product',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
          data: $.param(productData)
        });
      }

    }
  })

  .factory('Referrals', function ($http, constants) {
    return {
      get: function () {
        // body...
        return $http.get( constants.API_URL + '/api/referrals/');
      }
    }
  });

myApp
  .filter('earningRate', function () {
    return function (input, subscriptions, selected) {

      var data;
      angular
        .forEach(subscriptions, function (key, value) {
          var subscription = key;

          if (subscription.membershipFee == selected) {
            if (subscription.hasOwnProperty(input)) {
              data = angular.copy(subscription[input]);
            } else
              if (input == 'wtf') {

                data = angular.copy(subscription);
              }
          }
        });

      return data;
    };
  });