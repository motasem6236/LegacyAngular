inController.jsJavaScript
//loginController.js
(function () {
'use strict';
angular
.module('app')
.controller('LoginController', LoginController);
LoginController.$inject = ['$location','AuthenticationService'];
function LoginController( $location, AuthenticationService) {
var vm = this;
vm.login = login;
(function initController() {
// reset login status
AuthenticationService.ClearCredentials();
})();
function login() {
console.log("login method executing");
vm.dataLoading = true;
AuthenticationService.Login(vm.username, vm.password, function (response) {
if (response.success) {
AuthenticationService.SetCredentials(vm.username, vm.password);
$location.path('/home');
} else {
alert(response.message);
vm.dataLoading = false;
}
});
}
}
})();
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
//loginController.js
(function () {
    'use strict';
    angular
        .module('app')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$location','AuthenticationService'];
    function LoginController( $location, AuthenticationService) {
        var vm = this;
        
        vm.login = login;
 
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
        
        function login() {
          console.log("login method executing");
          
          vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                } else {
                    alert(response.message);
                    vm.dataLoading = false;
                }
        });
      }
    }
})();