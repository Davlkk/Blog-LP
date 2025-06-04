var app = angular.module("blog", []);

app.controller("Rest", function($scope, $http) {
    $http.get("https://api-fake-blog.onrender.com/postagens")
        .then(function(response) {
            $scope.postagens = response.data;
        });
});

app.controller("DetalheCtrl", function($scope, $http) {
    function getQueryParam(param) {
        var params = new URLSearchParams(window.location.search);
        return params.get(param);
    }

    var id = getQueryParam("id");

    $http.get("https://api-fake-blog.onrender.com/postagens")
        .then(function(response) {
            var postagens = response.data;
            $scope.postagem = postagens[id];
        });
});
