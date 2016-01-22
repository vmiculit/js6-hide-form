
angular.module("js6",[])

angular.module("js6")
	.controller("js6Troller",["$scope", function($scope) {

		$scope.user = {
			imageURL : "http://placehold.it/200x300",
			name : "John Doe",
			bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit enim nulla, pellentesque sagittis massa lacinia sed. Vivamus tellus nibh, lacinia eu vestibulum a, scelerisque vel urna. In mattis elit odio, vel rutrum ligula elementum a. Phasellus in tellus vitae orci interdum hendrerit.",
			favoriteBooks : ["Book1", "Book2", "Book3"],
			favoriteJSLibraries : ["Library 1", "Library 2", "Library 3"]
		}

		$scope.formSwitch = false

		$scope.showEditForm = function() {
			$scope.formSwitch = true
		}

}])