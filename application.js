angular.module('firstModule', [])
.factory('CustomerService', function () {
    var items = [];
    return {
        getItems: function () {
            return items;
        },
        addCustomer: function (customer) {
            items.push(customer);
        }
    };
})
.controller('CustomerCtrl', function ($scope, $http, CustomerService) {
    $scope.customerService = CustomerService;
    $scope.controllerCustomers =
    [
    { id: 1, name: "Meyer", surname: "Klaus" },
    { id: 2, name: "Müller", surname: "Erwin" },
    { id: 3, name: "Krause", surname: "Otto" }
    ];

    $http.get("customers.json").then(function (customerResponse) {
        $scope.jsonFileCustomers = customerResponse.data;
    });    
})
.controller('CustomerDatabaseCtrl', function($scope, CustomerService)
{
    $scope.customerService = CustomerService;
}
);