myApp
   .directive('fileModel',  function ($parse) {
    return {

      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function() {
          scope.$apply (function() {
            modelSetter(scope, element[0].files[0]);
          });
        });
        
      }
    
    }
    
  })

  .controller('signupCtrl', function signupCtrl($window, $scope, $stateParams, SignUp, $location) {

    let vm = this;

    // object to hold all the data for the new merchant registration form
    $scope.profileData = {
      'email': '',
      'password': '',
      'first_name': '',
      'last_name': '',
      'phone_no': '',
      'company_name': '',
      'address': '',
      'city': '',
      'state': '',
      'country': ''
    };

    $scope.register = function () {
      
      $scope.loading = true;

      SignUp.register($scope.profileData)
        .then(function (response) {
          // body...
          auth = response.data;
          $scope.loading = false;
          $window.location.href = '../merchant/product.html';
        },
          function (error) {
            // body...
            console.log(error);
            loading = false;
          });
    };

  })

  .controller('loginCtrl', function loginCtrl($window, $scope, $stateParams, Login) {

    var vm = this;

    $scope.loginData = {
      'email': '',
      'password': '',
    };

    $scope.login = function () {

      // save the comment. pass in comment data from the form
      // use the function we created in our service

      Login.auth($scope.loginData)
        .then(function (response) {
          // body...
          $scope.auth = response.data;
          console.log($scope.auth);
          $window.location.href = '../merchant/product.html';
          
        }, function (error) {
          // body...
          console.log(error);
        });
    };

  })

  .controller('productCtrl',
  function productCtrl($window, $scope, $stateParams, Product) {

    $scope.productData = {
      'product_name': '',
      'product_color': '',
      'product_price': '',
      'quantity': '',
      'product_description': '',
      'other_product_details': '',
      'product_category_level': '',
      'product_category_name': ''
    }

    
    $scope.submitProduct = function () {
     
      // $scope.productData.product_image=$scope.myFile;
      console.log($scope.productData);

      Product.save($scope.productData, $scope.myFile)
        .then(function (response) {
          // body...
         
        }, function (error) {
          // body...
          console.log(error);
        });
    };

    })

  .controller('referralCtrl', function ($location, $scope, $stateParams, Referrals, Profile) {
    // body...
    Profile.get()
      .then(function (response) {
        // body...
        $scope.data = response.data;
      },
        function (error) {
          // body...
          console.log(error);
        });

    $scope.urlLink = window.location.host + '/register' + '?ref=';

    Referrals.get()
      .then(function (response) {
        // 
        $scope.referrals = response.data;

      }, function (error) {

        console.log(error);
      });

  });